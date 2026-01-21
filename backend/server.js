import express from "express";
import Stripe from "stripe";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Validate Stripe secret key is loaded
if (!process.env.STRIPE_SECRET_KEY) {
    console.error('ERROR: STRIPE_SECRET_KEY is not set in .env file');
    process.exit(1);
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Health check endpoint
app.get("/health", (req, res) => {
    res.json({
        status: "ok",
        message: "Stripe payment server is running",
        stripeConfigured: !!process.env.STRIPE_SECRET_KEY
    });
});

app.post("/create-checkout-session", async (req, res) => {
    try {
        const { productName, amount } = req.body;
        const origin = req.headers.origin || 'http://localhost:5173';

        // Use default values if not provided, or validate/sanitize inputs
        // For now, we'll use the inputs from the frontend

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            line_items: [
                {
                    price_data: {
                        currency: "usd",
                        product_data: {
                            name: productName || "Software License",
                            description: "Lifetime License",
                        },
                        unit_amount: amount || 4999, // Amount in cents
                    },
                    quantity: 1,
                },
            ],
            success_url: `${origin}/success`,
            cancel_url: `${origin}/cancel`,
        });

        res.json({ url: session.url });
    } catch (err) {
        console.error("Error creating checkout session:", err);
        res.status(500).json({ error: err.message });
    }
});

const PORT = 4242;
app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`)
);
