import { motion } from 'framer-motion';
import { ArrowRight, Shield, Zap, Globe, Star, Code, HelpCircle, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero_image.jpg';

const Home = () => {
    return (
        <div className="pt-16">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-primary-900 text-white py-20 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] opacity-10 bg-cover bg-center"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
                            >
                                Power Your Email <span className="text-primary-400">Infrastructure</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 mb-10"
                            >
                                The most reliable and secure SMTP server solution for high-volume email delivery. Enterprise-grade performance for businesses of all sizes.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
                            >
                                <Link to="/download" className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-all flex items-center justify-center gap-2">
                                    Download Now <ArrowRight className="h-5 w-5" />
                                </Link>
                                <Link to="/price" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold py-3 px-8 rounded-lg transition-all border border-white/20">
                                    View Pricing
                                </Link>
                            </motion.div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="relative group"
                            >
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                                <img
                                    src={heroImage}
                                    alt="SMTP Pro Interface"
                                    className="relative transition-all duration-300 rounded-2xl shadow-2xl border border-white/10"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Trusted By Section */}
            <section className="py-10 bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-wider mb-6">Trusted by innovative teams worldwide</p>
                    <div className="relative overflow-hidden group">
                        <div className="flex animate-scroll group-hover:pause whitespace-nowrap opacity-50 grayscale hover:opacity-100 transition-opacity duration-300">
                            <div className="flex items-center gap-16 mx-8">
                                {['Acme Corp', 'GlobalTech', 'Nebula', 'Circle Systems', 'FoxRun'].map((brand) => (
                                    <span key={brand} className="text-xl font-bold text-slate-800">{brand}</span>
                                ))}
                            </div>
                            {/* Duplicate for seamless scrolling */}
                            <div className="flex items-center gap-16 mx-8">
                                {['Acme Corp', 'GlobalTech', 'Nebula', 'Circle Systems', 'FoxRun'].map((brand) => (
                                    <span key={`${brand}-duplicate`} className="text-xl font-bold text-slate-800">{brand}</span>
                                ))}
                            </div>
                            {/* Triplicate for wider screens to ensure no gaps */}
                            <div className="flex items-center gap-16 mx-8">
                                {['Acme Corp', 'GlobalTech', 'Nebula', 'Circle Systems', 'FoxRun'].map((brand) => (
                                    <span key={`${brand}-triplicate`} className="text-xl font-bold text-slate-800">{brand}</span>
                                ))}
                            </div>
                        </div>
                        {/* Fade edges */}
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent"></div>
                        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent"></div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose SMTP Pro?</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">Engineered for reliability, speed, and security. We provide the tools you need to ensure your emails reach the inbox.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Shield, title: 'Enterprise Security', desc: 'TLS/SSL encryption and advanced authentication to protect your mail streams.' },
                            { icon: Zap, title: 'Lightning Fast', desc: 'Optimized delivery engine capable of handling millions of emails per hour.' },
                            { icon: Globe, title: 'Global Infrastructure', desc: 'Distributed servers ensure low latency and high availability worldwide.' },
                        ].map((feature, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -5 }}
                                className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all"
                            >
                                <div className="bg-primary-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                                    <feature.icon className="h-6 w-6 text-primary-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">Don't just take our word for it. Here's what developers and businesses say about SMTP Pro.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                quote: "SMTP Pro revolutionized our email delivery. We went from a 92% delivery rate to 99.8% in just one week.",
                                author: "Sarah Jenkins",
                                role: "CTO at TechFlow"
                            },
                            {
                                quote: "The API documentation is a breeze to work with. Integrated it into our legacy system in under 2 hours.",
                                author: "Michael Chen",
                                role: "Lead Developer at CloudScale"
                            },
                            {
                                quote: "Customer support is top-notch. They helped us debug a complex routing issue at 2 AM on a Sunday.",
                                author: "Jessica Williams",
                                role: "VP of Engineering at DataStream"
                            }
                        ].map((testimonial, idx) => (
                            <div key={idx} className="bg-slate-50 p-8 rounded-2xl relative">
                                <div className="flex text-yellow-400 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-current" />
                                    ))}
                                </div>
                                <p className="text-slate-700 mb-6 italic">"{testimonial.quote}"</p>
                                <div>
                                    <div className="font-bold text-slate-900">{testimonial.author}</div>
                                    <div className="text-sm text-slate-500">{testimonial.role}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Developer Section */}
            <section className="py-20 bg-slate-900 text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="flex items-center space-x-2 text-primary-400 mb-4">
                                <Code className="h-6 w-6" />
                                <span className="font-bold uppercase tracking-wide">Developer First</span>
                            </div>
                            <h2 className="text-3xl font-bold mb-6">Integrate in Minutes, Not Days</h2>
                            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                Our SMTP server is built with developers in mind. Whether you use standard SMTP protocols or our robust REST API, you'll be up and sending in no time.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {['Simple SMTP Configuration', 'Webhooks for Delivery Events', 'Detailed API Documentation', 'SDKs for Python, Node, Ruby, and Go'].map((item) => (
                                    <li key={item} className="flex items-center">
                                        <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                                        <span className="text-slate-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link to="/download" className="text-primary-400 font-semibold hover:text-white transition-colors flex items-center gap-2">
                                Read the docs <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                        <div className="bg-slate-800 rounded-xl p-6 font-mono text-sm shadow-2xl border border-slate-700">
                            <div className="flex items-center space-x-2 mb-4 border-b border-slate-700 pb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <div className="text-xs text-slate-500 ml-2">send-email.js</div>
                            </div>
                            <div className="text-slate-300 space-y-2">
                                <p><span className="text-purple-400">const</span> nodemailer = <span className="text-blue-400">require</span>(<span className="text-green-400">'nodemailer'</span>);</p>
                                <p>&nbsp;</p>
                                <p><span className="text-purple-400">let</span> transporter = nodemailer.<span className="text-blue-400">createTransport</span>({'{'}</p>
                                <p>&nbsp;&nbsp;host: <span className="text-green-400">"smtp.smtppro.com"</span>,</p>
                                <p>&nbsp;&nbsp;port: <span className="text-orange-400">587</span>,</p>
                                <p>&nbsp;&nbsp;secure: <span className="text-orange-400">false</span>,</p>
                                <p>&nbsp;&nbsp;auth: {'{'}</p>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;user: <span className="text-green-400">"user@example.com"</span>,</p>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;pass: <span className="text-green-400">"your_api_key"</span></p>
                                <p>&nbsp;&nbsp;{'}'}</p>
                                <p>{'}'});</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-slate-600">Common questions about our service and billing.</p>
                    </div>

                    <div className="space-y-6">
                        {[
                            { q: "Do you offer a free trial?", a: "Yes, our 'Starter' plan is completely free forever. For paid plans, we offer a 14-day money-back guarantee." },
                            { q: "Can I use SMTP Pro with WordPress?", a: "Absolutely! We support all major platforms including WordPress, Magento, and custom applications via standard SMTP." },
                            { q: "What happens if I exceed my email limit?", a: "We will notify you when you approach your limit. You can choose to upgrade your plan or pay a small overage fee for critical emails." },
                            { q: "Is it GDPR compliant?", a: "Yes, we are fully GDPR compliant and host data in secure, certified data centers within the EU and US." }
                        ].map((faq, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                                <div className="flex items-start">
                                    <HelpCircle className="h-6 w-6 text-primary-500 mr-4 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-900 mb-2">{faq.q}</h3>
                                        <p className="text-slate-600">{faq.a}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-primary-600 text-white text-center">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold mb-6">Ready to scale your email infrastructure?</h2>
                    <p className="text-primary-100 text-xl mb-10">Join thousands of developers who trust SMTP Pro for their critical email delivery.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/download" className="bg-white text-primary-600 hover:bg-slate-100 font-bold py-3 px-8 rounded-lg transition-all shadow-lg">
                            Get Started for Free
                        </Link>
                        <Link to="/contact" className="bg-primary-700 text-white hover:bg-primary-800 font-semibold py-3 px-8 rounded-lg transition-all border border-primary-500">
                            Contact Sales
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
