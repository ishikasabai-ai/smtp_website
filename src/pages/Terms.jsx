import { ScrollText, AlertCircle, FileCheck } from 'lucide-react';

const Terms = () => {
    return (
        <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">

                    <h1 className="text-3xl font-bold text-slate-900 mb-2">Terms of Service</h1>
                    <p className="text-slate-500 mb-8">Last updated: January 15, 2026</p>

                    <div className="prose prose-slate max-w-none text-slate-600">
                        <p>
                            Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the SMTP Pro website and service operated by SMTP Pro, Inc.
                        </p>

                        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4 flex items-center gap-2">
                            <FileCheck className="h-5 w-5 text-primary-500" /> Agreement to Terms
                        </h3>
                        <p>
                            By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
                        </p>

                        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4 flex items-center gap-2">
                            <ScrollText className="h-5 w-5 text-primary-500" /> Use License
                        </h3>
                        <p>
                            Permission is granted to temporarily download one copy of the materials (information or software) on SMTP Pro's website for personal, non-commercial transitory viewing only.
                        </p>
                        <p className="mt-2">Use of our SMTP service for spam or unsolicited bulk email is strictly prohibited and will result in immediate termination of your account.</p>

                        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4 flex items-center gap-2">
                            <AlertCircle className="h-5 w-5 text-primary-500" /> Disclaimer
                        </h3>
                        <p>
                            The materials on SMTP Pro's website are provided on an 'as is' basis. SMTP Pro makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                        </p>

                        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Governing Law</h3>
                        <p>
                            These terms and conditions are governed by and construed in accordance with the laws of California and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Terms;
