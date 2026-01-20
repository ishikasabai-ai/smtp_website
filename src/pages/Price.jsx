import { Check } from 'lucide-react';

const Price = () => {
    const tiers = [
        {
            name: 'Starter',
            price: 'Free',
            desc: 'Perfect for testing and small projects.',
            features: ['1,000 emails/month', 'Basic Analytics', 'Community Support', '1 Dedicated IP'],
            cta: 'Get Started',
            popular: false
        },
        {
            name: 'Professional',
            price: '$49/mo',
            desc: 'For growing businesses and applications.',
            features: ['50,000 emails/month', 'Advanced Analytics', 'Priority Support', '3 Dedicated IPs', 'API Access'],
            cta: 'Start Free Trial',
            popular: true
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            desc: 'High-volume sending for large organizations.',
            features: ['Unlimited emails', 'Real-time Reporting', '24/7 Dedicated Support', 'Cluster Management', 'Custom SLAs'],
            cta: 'Contact Sales',
            popular: false
        }
    ];

    return (
        <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h1>
                <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">Choose the plan that fits your sending needs. Upgrade or downgrade at any time.</p>

                <div className="grid md:grid-cols-3 gap-8 text-left">
                    {tiers.map((tier) => (
                        <div key={tier.name} className={`relative bg-white rounded-2xl shadow-xl border ${tier.popular ? 'border-primary-500 scale-105 z-10' : 'border-slate-200'} p-8 flex flex-col`}>
                            {tier.popular && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                                    Most Popular
                                </div>
                            )}
                            <h3 className="text-lg font-semibold text-slate-900">{tier.name}</h3>
                            <div className="mt-4 mb-2">
                                <span className="text-4xl font-bold text-slate-900">{tier.price}</span>
                            </div>
                            <p className="text-slate-500 mb-6">{tier.desc}</p>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {tier.features.map((feature, i) => (
                                    <li key={i} className="flex items-start">
                                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                                        <span className="text-slate-600 text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${tier.popular ? 'bg-primary-600 hover:bg-primary-700 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-900'}`}>
                                {tier.cta}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Price;
