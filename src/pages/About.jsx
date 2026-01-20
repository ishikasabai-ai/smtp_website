import { Users, Award, Building } from 'lucide-react';

const About = () => {
    return (
        <div className="pt-24 pb-20 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-6">About SMTP Pro</h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        We are dedicated to building the robust infrastructure that powers the world's communication.
                        Founded in 2020, SMTP Pro has delivered billions of emails for companies ranging from startups to Fortune 500s.
                    </p>
                </div>

                {/* Stats / Value */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <div className="text-center p-6 bg-slate-50 rounded-xl">
                        <div className="mx-auto bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                            <Users className="w-8 h-8 text-primary-600" />
                        </div>
                        <div className="text-3xl font-bold text-slate-900 mb-1">10k+</div>
                        <div className="text-slate-600">Active Customers</div>
                    </div>
                    <div className="text-center p-6 bg-slate-50 rounded-xl">
                        <div className="mx-auto bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                            <Award className="w-8 h-8 text-primary-600" />
                        </div>
                        <div className="text-3xl font-bold text-slate-900 mb-1">99.99%</div>
                        <div className="text-slate-600">Uptime Guarantee</div>
                    </div>
                    <div className="text-center p-6 bg-slate-50 rounded-xl">
                        <div className="mx-auto bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                            <Building className="w-8 h-8 text-primary-600" />
                        </div>
                        <div className="text-3xl font-bold text-slate-900 mb-1">5</div>
                        <div className="text-slate-600">Global Data Centers</div>
                    </div>
                </div>

                {/* Content Split */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            In a world where communication is instant, email remains the backbone of business. Our mission is to ensure that this backbone is unbreakable. We strive to provide an SMTP service that is not just a utility, but a competitive advantage for our clients.
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            We believe in transparency, security, and relentless innovation. Our team of engineers works around the clock to optimize delivery paths and secure your data against emerging threats.
                        </p>
                    </div>
                    <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg">
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                            alt="Team working"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Company Details */}
                <div className="mt-20 border-t border-slate-100 pt-16">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Company Information</h2>
                    <div className="bg-slate-50 rounded-xl p-8 max-w-2xl mx-auto border border-slate-100">
                        <div className="space-y-4">
                            <div className="flex flex-col sm:flex-row sm:justify-between border-b border-slate-200 pb-3">
                                <span className="font-semibold text-slate-700">Company Name</span>
                                <span className="text-slate-600">FRHAN AS TRADERS LTD</span>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:justify-between border-b border-slate-200 pb-3">
                                <span className="font-semibold text-slate-700">Company Number</span>
                                <span className="font-mono text-slate-600">16632684</span>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:justify-between border-b border-slate-200 pb-3">
                                <span className="font-semibold text-slate-700">Registered Address</span>
                                <span className="text-slate-600 text-right">PO Box 806, Cardiff, CF14 8LH</span>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:justify-between pt-1">
                                <span className="font-semibold text-slate-700">Nature of Business</span>
                                <span className="text-slate-600 text-right">Other retail sale not in stores,<br />stalls or markets (47990)</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;
