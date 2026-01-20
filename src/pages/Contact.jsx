import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Get in Touch</h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <Mail className="w-6 h-6 text-primary-600 mt-1 mr-4" />
                                <div>
                                    <h4 className="font-semibold text-slate-900">Email Us</h4>
                                    <p className="text-slate-600">support@smtppro.com</p>
                                    <p className="text-slate-600">sales@smtppro.com</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <Phone className="w-6 h-6 text-primary-600 mt-1 mr-4" />
                                <div>
                                    <h4 className="font-semibold text-slate-900">Call Us</h4>
                                    <p className="text-slate-600">+1 (555) 123-4567</p>
                                    <p className="text-slate-500 text-sm">Mon-Fri from 8am to 5pm EST</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <MapPin className="w-6 h-6 text-primary-600 mt-1 mr-4" />
                                <div>
                                    <h4 className="font-semibold text-slate-900">Visit Us</h4>
                                    <p className="text-slate-600">
                                        123 Tech Boulevard,<br />
                                        Suite 400,<br />
                                        San Francisco, CA 94107
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                                    <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="John" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                                    <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="Doe" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                                <input type="email" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                                <textarea rows="4" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="How can we help you?"></textarea>
                            </div>

                            <button type="button" className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-4 rounded-lg transition-all flex items-center justify-center gap-2">
                                Send Message <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;
