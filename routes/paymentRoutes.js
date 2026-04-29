const express = require("express");

const router = express.Router();

router.post("/payment/process", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Payment processed",
    paymentId: `pay_${Date.now()}`,
  });
});

router.post("/callback", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Payment callback accepted",
  });
});

router.get("/payment/status/:id", (req, res) => {
  res.status(200).json({
    success: true,
    paymentId: req.params.id,
    status: "completed",
  });
});

module.exports = router;
