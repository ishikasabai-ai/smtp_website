import React from 'react';
import { CheckCircle, Download, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Success = () => {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 max-w-md w-full text-center">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
                    <CheckCircle className="h-10 w-10 text-green-600" />
                </div>

                <h1 className="text-3xl font-bold text-slate-900 mb-2">Payment Successful!</h1>
                <p className="text-slate-600 mb-8">
                    Thank you for your purchase. Your transaction has been completed successfully.
                </p>

                <div className="space-y-4">
                    <a
                        href="/download" // Or direct file link if available
                        className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 md:text-lg transition-all shadow-sm hover:shadow-md"
                    >
                        <Download className="w-5 h-5 mr-2" />
                        Download Software
                    </a>

                    <Link
                        to="/"
                        className="w-full flex items-center justify-center px-4 py-3 border border-slate-300 text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 md:text-lg transition-all"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Return Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Success;
