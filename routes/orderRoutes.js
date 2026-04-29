const express = require("express");

const router = express.Router();

router.post("/order/new", (req, res) => {
  res.status(201).json({
    success: true,
    message: "Order created",
    orderId: `ord_${Date.now()}`,
  });
});

router.get("/order/:id", (req, res) => {
  res.status(200).json({
    success: true,
    order: { id: req.params.id, status: "processing" },
  });
});

router.get("/orders/me", (req, res) => {
  res.status(200).json({
    success: true,
    orders: [{ id: "ord_123", status: "processing" }],
  });
});

router.get("/admin/orders", (req, res) => {
  res.status(200).json({
    success: true,
    orders: [{ id: "ord_123", status: "processing" }],
  });
});

module.exports = router;
