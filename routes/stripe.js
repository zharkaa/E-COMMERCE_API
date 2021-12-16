const router = require("express").Router();
const Stripe = require("stripe")(
  "sk_test_51K3w0MANbKePhR4B1Ax8kZZcUhg5blpUnqEcIzQSXYmSiQBOID2iPl5VtoHlEa8VGlvwNoC8XhMCv8bxHRTi1nTE00PTG5Awme"
);

router.post("/payment", (req, res) => {
  Stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
