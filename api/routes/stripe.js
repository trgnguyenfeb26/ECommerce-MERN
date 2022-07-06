const router = require("express").Router();
const KEY = process.env.STRIPE_KEY
const stripe = require("stripe")("sk_test_51LFgLuDVTKEMMVPljVmmAf38x71X4rLssRNDpVxsklJELnrY25Ee7IX2r0rey9kvAZkQTnV7N9Vak3iAyvO0xkEi00VCXzejB1");



router.post("/payment", (req, res) => {
    stripe.charges.create(
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
