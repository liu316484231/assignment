const rateLimit = require("express-rate-limit");

const defaultHandler = (message) => (req, res) => {
  const retryAfterSeconds = Math.ceil((req.rateLimit.resetTime - new Date()) / 1000);
  res.set("Retry-After", String(Math.max(retryAfterSeconds, 1)));
  return res.status(429).json({
    success: false,
    message,
    retryAfterSeconds: Math.max(retryAfterSeconds, 1),
  });
};

const paymentRateLimiter = rateLimit({
  windowMs: 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  handler: defaultHandler("Too many payment requests. Please retry shortly."),
});

const orderRateLimiter = rateLimit({
  windowMs: 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  handler: defaultHandler("Too many order requests. Please retry shortly."),
});

module.exports = {
  paymentRateLimiter,
  orderRateLimiter,
};
