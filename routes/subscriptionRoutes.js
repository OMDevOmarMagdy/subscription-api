const express = require("express");
const router = express.Router();
const controller = require("../controllers/subscriptionController");

const protect = require("../middleware/protect");

router.post("/subscribe", protect, controller.subscribeToPlan);
router.patch("/:id/cancel", protect, controller.cancelSubscription);
router.get("/", protect, controller.getAllSubscriptions);

module.exports = router;
