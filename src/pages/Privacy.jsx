import { Shield, Lock, Eye } from 'lucide-react';

const Privacy = () => {
    return (
        <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">

                    <h1 className="text-3xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
                    <p className="text-slate-500 mb-8">Last updated: January 15, 2026</p>

                    <div className="prose prose-slate max-w-none text-slate-600">
                        <p>
                            At SMTP Pro, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclosure, and safeguard your information when you visit our website or use our services.
                        </p>

                        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4 flex items-center gap-2">
                            <Eye className="h-5 w-5 text-primary-500" /> Information We Collect
                        </h3>
                        <p>
                            We collect information that you strictly provide to us when you register for an account, express interest in obtaining information about us or our products, or otherwise contact us.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mt-4">
                            <li><strong>Personal Data:</strong> Name, email address, postal address, phone number, and other similar contact data.</li>
                            <li><strong>Credentials:</strong> Passwords, password hints, and similar security information used for authentication and account access.</li>
                            <li><strong>Usage Data:</strong> Information about how you use our API and SMTP services, including log data and analytical information.</li>
                        </ul>

                        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4 flex items-center gap-2">
                            <Lock className="h-5 w-5 text-primary-500" /> How We Use Your Information
                        </h3>
                        <p>
                            We use personal information collected via our website for a variety of business purposes described below:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mt-4">
                            <li>To provide and maintain our Service.</li>
                            <li>To notify you about changes to our Service.</li>
                            <li>To allow you to participate in interactive features of our Service.</li>
                            <li>To provide customer support.</li>
                            <li>To gather analysis or valuable information so that we can improve our Service.</li>
                        </ul>

                        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4 flex items-center gap-2">
                            <Shield className="h-5 w-5 text-primary-500" /> Data Security
                        </h3>
                        <p>
                            We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
                        </p>

                        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Contact Us</h3>
                        <p>
                            If you have questions or comments about this policy, you may email us at privacy@smtppro.com or by post to:
                        </p>
                        <address className="not-italic mt-2">
                            SMTP Pro, Inc.<br />
                            123 Tech Boulevard, Suite 400<br />
                            San Francisco, CA 94107
                        </address>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
