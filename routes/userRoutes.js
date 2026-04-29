const express = require("express");

const router = express.Router();

router.post("/login", (req, res) => {
  res.json({
    success: true,
    token: "mock-jwt-token",
    user: { id: "u_1001", name: "demo-user" },
  });
});

module.exports = router;
