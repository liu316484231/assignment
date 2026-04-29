const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    products: [
      { id: "p_1", name: "Keyboard", price: 79 },
      { id: "p_2", name: "Mouse", price: 39 },
    ],
  });
});

module.exports = router;
