const express = require("express");
const router = express.Router();
const planController = require("../controllers/planController");

router.post("/", planController.createPlan);
router.get("/", planController.getPlans);
router.patch("/:id", planController.updatePlan);
router.delete("/:id", planController.deletePlan);

module.exports = router;
