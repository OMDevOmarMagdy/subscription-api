const Subscription = require("../models/subscriptionsModel");
const Plan = require("../models/planModel");
const paymentGateway = require("../dummy-payment/paymentGateway");
const response = require("../utils/response");

// I used response functino in only subscribeToPlan and i want to use it in each function but i have no time to do it
// Subscribe user to a plan
exports.subscribeToPlan = async (req, res) => {
  try {
    const planId = req.body.planId;
    const userId = req.user.id;

    const plan = await Plan.findById(planId);
    if (!plan) return response(res, 404, "Plan not found");

    const paymentResult = await paymentGateway.processPayment(plan.price);
    if (!paymentResult.success) response(res, 400, "Payment failed");

    const endDate = new Date();
    endDate.setDate(endDate.getDate() + plan.duration);

    const newSubscription = await Subscription.create({
      userId,
      planId,
      endDate,
      paymentInfo: {
        transactionId: paymentResult.transactionId,
        amount: paymentResult.amount,
      },
    });
    response(res, 201, "Subscription successful", newSubscription);
  } catch (error) {
    response(res, 500, "Subscription failed", undefined, error);
  }
};

// Cancel a subscription
exports.cancelSubscription = async (req, res, next) => {
  try {
    const id = req.params.id;
    const subscription = await Subscription.findByIdAndUpdate(
      id,
      { status: "cancelled" },
      { new: true }
    );
    if (!subscription) {
      return res.status(404).json({ message: "Subscription not found" });
    }

    res.status(200).json({
      message: "Subscription cancelled",
      subscription,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error cancelling subscription",
      error: error.message,
    });
  }
};

// Get all subscriptions
exports.getAllSubscriptions = async (req, res, next) => {
  try {
    const subscriptions = await Subscription.find().populate("planId");
    res.status(200).json({
      message: "Subscriptions fetched successfully",
      data: {
        subscriptions,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Error getting subscriptions",
      error: error.message,
    });
  }
};
