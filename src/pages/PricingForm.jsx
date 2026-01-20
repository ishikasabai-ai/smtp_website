import { useLocation, useNavigate } from 'react-router-dom';
import { Send, CheckCircle } from 'lucide-react';

const PricingForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const selectedPlan = location.state?.plan || 'Starter'; // Default to Starter if accessed directly

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, you would handle form submission here
        console.log('Form submitted for plan:', selectedPlan);
        alert('Thank you for your interest! We will contact you shortly.');
        navigate('/');
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

                        <button type="submit" className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-4 rounded-lg transition-all flex items-center justify-center gap-2 mt-4">
                            Confirm & Get Started <Send className="w-4 h-4" />
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default PricingForm;
