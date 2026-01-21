import { useLocation, useNavigate } from 'react-router-dom';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import { useState } from 'react';

const PricingForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const selectedPlan = location.state?.plan || 'Professional'; // Default to Professional for demo
    const [isProcessing, setIsProcessing] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        let amount = 0;
        if (selectedPlan === 'Professional') amount = 4900;
        // Starter is free, Enterprise is custom - simplified for this flow

        if (amount === 0) {
            alert(`You have selected the ${selectedPlan} plan. This plan does not require immediate payment. We will contact you.`);
            navigate('/');
            return;
        }

        setIsProcessing(true);

        try {
            const response = await fetch("http://localhost:4242/create-checkout-session", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    productName: `${selectedPlan} Plan`,
                    amount: amount
                }),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({ error: 'Server error' }));
                throw new Error(errorData.error || `Server returned ${response.status}`);
            }

            const data = await response.json();
            if (data.url) {
                // Redirect to Stripe Checkout
                window.location.href = data.url;
            } else {
                throw new Error("No checkout URL returned from server");
            }
        } catch (error) {
            console.error("Payment error:", error);
            setIsProcessing(false);

            // More helpful error message
            let errorMessage = "Payment initialization failed. ";
            if (error.message.includes('Failed to fetch')) {
                errorMessage += "Cannot connect to payment server. Make sure the backend is running on port 4242.";
            } else {
                errorMessage += error.message;
            }

            alert(errorMessage);
        }
    };

    return (
        <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Get Started with {selectedPlan}</h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">Complete the form below to begin your journey with our {selectedPlan} plan.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                                <input required type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="John" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                                <input required type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="Doe" />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                                <input required type="email" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="john@company.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                                <input type="tel" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="+1 (555) 000-0000" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Company Name (Optional)</label>
                            <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="Your Company Ltd" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Selected Plan</label>
                            <div className="flex items-center w-full px-4 py-2 border border-slate-200 bg-slate-50 rounded-lg text-slate-500">
                                <CheckCircle className="w-4 h-4 mr-2 text-primary-600" />
                                {selectedPlan} Plan
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isProcessing}
                            className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition-all flex items-center justify-center gap-2 mt-4"
                        >
                            {isProcessing ? (
                                <>
                                    Processing... <Loader2 className="w-4 h-4 animate-spin" />
                                </>
                            ) : (
                                <>
                                    {selectedPlan === 'Professional' ? 'Proceed to Payment' : 'Confirm & Get Started'} <Send className="w-4 h-4" />
                                </>
                            )}
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default PricingForm;
