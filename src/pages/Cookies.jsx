import { Shield, Lock, Eye, Cookie, Info } from 'lucide-react';

const Cookies = () => {
    return (
        <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">

                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-primary-50 p-3 rounded-xl">
                            <Cookie className="h-8 w-8 text-primary-500" />
                        </div>
                        <h1 className="text-3xl font-bold text-slate-900">Cookie Policy</h1>
                    </div>

                    <p className="text-slate-500 mb-8">Last updated: January 20, 2026</p>

                    <div className="prose prose-slate max-w-none text-slate-600">
                        <p>
                            This Cookie Policy explains how SMTP Pro (“we”, “our”, “us”) uses cookies and similar technologies when you visit our website and use our services.
                        </p>
                        <p>
                            By continuing to browse or use our website, you agree to the use of cookies as described in this policy.
                        </p>

                        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4 flex items-center gap-2">
                            <Info className="h-5 w-5 text-primary-500" /> 1. What Are Cookies?
                        </h3>
                        <p>
                            Cookies are small text files stored on your device (computer, tablet, or mobile phone) when you visit a website. They help websites function properly, improve user experience, and provide analytical information.
                        </p>
                        <p>
                            Cookies do not typically contain personally identifiable information, but may be linked to personal data we store about you.
                        </p>

                        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4 flex items-center gap-2">
                            <Eye className="h-5 w-5 text-primary-500" /> 2. How We Use Cookies
                        </h3>
                        <p>SMTP Pro uses cookies to:</p>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li>Ensure the website functions correctly</li>
                            <li>Improve performance and security</li>
                            <li>Remember user preferences</li>
                            <li>Analyze website traffic and usage</li>
                            <li>Enhance user experience</li>
                            <li>Support authentication and session management</li>
                        </ul>

                        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4 flex items-center gap-2">
                            <Shield className="h-5 w-5 text-primary-500" /> 3. Types of Cookies We Use
                        </h3>

                        <div className="space-y-6 mt-4">
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h4 className="font-bold text-slate-900 mb-2">🔹 Strictly Necessary Cookies</h4>
                                <p className="text-sm mb-3">These cookies are essential for the website to operate properly and cannot be disabled.</p>
                                <p className="text-sm font-semibold">Examples:</p>
                                <ul className="list-disc pl-5 text-sm space-y-1 mt-1">
                                    <li>Login authentication</li>
                                    <li>Account security</li>
                                    <li>Session management</li>
                                    <li>Load balancing</li>
                                </ul>
                            </div>

                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h4 className="font-bold text-slate-900 mb-2">🔹 Performance & Analytics Cookies</h4>
                                <p className="text-sm mb-3">These cookies help us understand how visitors interact with our website.</p>
                                <p className="text-sm font-semibold">Used for:</p>
                                <ul className="list-disc pl-5 text-sm space-y-1 mt-1">
                                    <li>Page views and traffic analysis</li>
                                    <li>Error tracking</li>
                                    <li>Performance optimization</li>
                                </ul>
                                <p className="text-xs text-slate-400 mt-2">Data collected is aggregated and anonymous.</p>
                            </div>

                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h4 className="font-bold text-slate-900 mb-2">🔹 Functional Cookies</h4>
                                <p className="text-sm mb-3">These cookies allow the website to remember your preferences.</p>
                                <p className="text-sm font-semibold">Examples:</p>
                                <ul className="list-disc pl-5 text-sm space-y-1 mt-1">
                                    <li>Language selection</li>
                                    <li>Region or timezone</li>
                                    <li>Saved settings</li>
                                </ul>
                            </div>

                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h4 className="font-bold text-slate-900 mb-2">🔹 Security Cookies</h4>
                                <p className="text-sm mb-3">We use security cookies to:</p>
                                <ul className="list-disc pl-5 text-sm space-y-1 mt-1">
                                    <li>Detect fraudulent activity</li>
                                    <li>Prevent abuse and unauthorized access</li>
                                    <li>Protect SMTP services and infrastructure</li>
                                </ul>
                            </div>

                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h4 className="font-bold text-slate-900 mb-2">🔹 Third-Party Cookies</h4>
                                <p className="text-sm mb-3">Some cookies are set by trusted third-party services we use, such as:</p>
                                <ul className="list-disc pl-5 text-sm space-y-1 mt-1">
                                    <li>Analytics providers</li>
                                    <li>Customer support tools</li>
                                    <li>Payment processors</li>
                                </ul>
                                <p className="text-xs text-slate-400 mt-2">These third parties have their own privacy and cookie policies.</p>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Cookies Related to Email Services</h3>
                        <p>SMTP Pro does not use cookies to:</p>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li>Read email content</li>
                            <li>Track email recipients without consent</li>
                            <li>Collect sensitive email data</li>
                        </ul>
                        <p className="mt-2 text-sm italic">
                            Email tracking (such as opens or clicks) is only enabled when explicitly configured by the customer and governed by applicable data protection laws.
                        </p>

                        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">5. Managing Cookies</h3>
                        <p>You can control or disable cookies through your browser settings:</p>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li>Delete existing cookies</li>
                            <li>Block future cookies</li>
                            <li>Receive notifications when cookies are set</li>
                        </ul>
                        <p className="mt-2 text-sm text-amber-600 bg-amber-50 p-3 rounded-lg inline-block border border-amber-100">
                            Create: Please note that disabling cookies may affect website functionality and user experience.
                        </p>

                        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">6. Changes to This Cookie Policy</h3>
                        <p>
                            We may update this Cookie Policy from time to time to reflect legal, technical, or operational changes. Updates will be posted on this page with a revised “Last updated” date.
                        </p>

                        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">7. Contact Us</h3>
                        <p>If you have any questions about our use of cookies or this policy, please contact us:</p>
                        <div className="mt-4 bg-slate-50 p-6 rounded-xl border border-slate-200">
                            <p className="mb-2"><strong>📧 Email:</strong> <a href="mailto:support@smtppro.com" className="text-primary-600 hover:text-primary-700">support@smtppro.com</a></p>
                            <p><strong>🌐 Website:</strong> <a href="https://www.smtppro.com" className="text-primary-600 hover:text-primary-700">www.smtppro.com</a></p>
                        </div>

                        <div className="mt-8 p-6 bg-primary-50 rounded-xl border border-primary-100">
                            <h4 className="flex items-center gap-2 font-bold text-slate-900 mb-2">
                                <Lock className="h-5 w-5 text-primary-500" /> Your Privacy Matters
                            </h4>
                            <p className="text-slate-700 text-sm">
                                SMTP Pro is committed to transparency, security, and compliance with global data protection standards, including GDPR and other applicable regulations.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cookies;
