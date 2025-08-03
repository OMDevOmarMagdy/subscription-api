const Plan = require("../models/planModel");

// CREATE a new plan
exports.createPlan = async (req, res, next) => {
  try {
    const { name, price, duration, description } = req.body;
    const newPlan = await Plan.create({ name, price, duration, description });

    res.status(201).json({
      message: "Plan created successfully",
      data: {
        plan: newPlan,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating plan",
      error: error.message,
    });
  }
};

// GET all plans
exports.getPlans = async (req, res, next) => {
  try {
    const plans = await Plan.find();
    res.status(200).json({
      message: "Plans fetched successfully",
      data: {
        plans,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Error getting plans",
      error: error.message,
    });
  }
};

// UPDATE a plan
exports.updatePlan = async (req, res) => {
  try {
    const id = req.params.id;
    const updated = await Plan.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updated) return res.status(404).json({ message: "Plan not found" });

    res.status(200).json({
      message: "Plan updated successfully",
      data: {
        updatedPlan: updated,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating plan",
      error: error.message,
    });
  }
};

// DELETE (Cancel) a plan
exports.deletePlan = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await Plan.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "Plan not found" });
    res.status(200).json({
      message: "Plan deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting plan",
      error: error.message,
    });
  }
};
