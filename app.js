const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const healthRoutes = require("./routes/healthRoutes");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const orderRoutes = require("./routes/orderRoutes");
const { paymentRateLimiter, orderRateLimiter } = require("./middlewares/rateLimit");

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/", healthRoutes);
app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);
app.use("/api/payment", paymentRateLimiter, paymentRoutes);
app.use("/api/order", orderRateLimiter, orderRoutes);

app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

module.exports = app;
