import { Shield, Zap, Globe, Lock, BarChart, Server, Mail, Smartphone, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const Features = () => {
    const mainFeatures = [
        {
            icon: Shield,
            title: "Enterprise Grade Security",
            desc: "Protect your reputation with automated SPF, DKIM, DMARC enforcement, and TLS 1.3 encryption by default. We scan every outgoing message for malware."
        },
        {
            icon: Zap,
            title: "Lightning Fast Delivery",
            desc: "Our globally distributed network ensures your emails are processed and delivered with sub-second latency, regardless of recipient location."
        },
        {
            icon: BarChart,
            title: "Real-time Analytics",
            desc: "Gain deep insights into your email performance. Track opens, clicks, bounces, spam complaints, and delivery rates in real-time."
        },
        {
            icon: Lock,
            title: "Dedicated IPs",
            desc: "Take full control of your sender reputation. Our dedicated IP pools ensure your deliverability isn't affected by other senders."
        },
        {
            icon: Globe,
            title: "Global CDN",
            desc: "Optimized routing through our intelligent global content delivery network ensures messages take the shortest path to the recipient."
        },
        {
            icon: Server,
            title: "99.99% Uptime SLA",
            desc: "We guarantee reliability. Our redundant infrastructure and 24/7 reliability engineering teams ensure your email service never goes down."
        }
    ];

    return (
        <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-6">Powerful Features for Modern Email</h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                        Everything you need to build, scale, and monitor your email infrastructure. Designed for developers, trusted by enterprises.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link to="/download" className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg">
                            Start Sending Free
                        </Link>
                        <Link to="/contact" className="bg-white text-slate-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors border border-slate-200">
                            Contact Sales
                        </Link>
                    </div>
                </div>

                {/* Main Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {mainFeatures.map((f, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition-all group">
                            <div className="bg-primary-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <f.icon className="w-7 h-7 text-primary-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Detailed Section 1 */}
                <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Developer-First API</h2>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                            Gone are the days of complex SMTP configurations. Our RESTful API lets you send emails with a simple HTTP request.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Simple JSON-based payload",
                                "Webhooks for delivery, open, and click events",
                                "Comprehensive API documentation and distinct environments",
                                "SDKs for Python, Node.js, Go, PHP, and Ruby"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center text-slate-700">
                                    <Code className="w-5 h-5 text-green-500 mr-3" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-slate-900 rounded-xl p-8 shadow-2xl text-sm font-mono text-slate-300">
                        <div className="flex space-x-2 mb-4 border-b border-slate-700 pb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="opacity-70 text-xs mb-4"># Send an email via API</div>
                        <div>
                            <span className="text-purple-400">await</span> client.send({'{'}
                            <br />&nbsp;&nbsp;to: <span className="text-green-400">"user@example.com"</span>,
                            <br />&nbsp;&nbsp;subject: <span className="text-green-400">"Welcome!"</span>,
                            <br />&nbsp;&nbsp;html: <span className="text-green-400">"&lt;h1&gt;Hi&lt;/h1&gt;"</span>
                            <br />{'}'});
                        </div>
                    </div>
                </div>

                {/* Detailed Section 2 */}
                <div className="bg-white rounded-3xl p-12 shadow-sm border border-slate-200">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Designed for Mobile & Web</h2>
                        <p className="text-lg text-slate-600 mb-10">
                            Whether you are sending transactional emails like password resets or marketing newsletters, SMTP Pro ensures your emails look perfect on every device.
                        </p>
                        <div className="grid sm:grid-cols-3 gap-8 text-left">
                            <div className="flex flex-col items-center text-center p-4">
                                <Smartphone className="w-10 h-10 text-primary-500 mb-4" />
                                <h4 className="font-bold text-slate-900 mb-2">Responsive Templates</h4>
                                <p className="text-sm text-slate-500">Free, pre-built templates that automatically adapt to mobile screens.</p>
                            </div>
                            <div className="flex flex-col items-center text-center p-4">
                                <Mail className="w-10 h-10 text-primary-500 mb-4" />
                                <h4 className="font-bold text-slate-900 mb-2">Inbox Preview</h4>
                                <p className="text-sm text-slate-500">Test how your email looks in 50+ email clients with a single click.</p>
                            </div>
                            <div className="flex flex-col items-center text-center p-4">
                                <Zap className="w-10 h-10 text-primary-500 mb-4" />
                                <h4 className="font-bold text-slate-900 mb-2">Dynamic Content</h4>
                                <p className="text-sm text-slate-500">Personalize emails using liquid syntax for higher engagement.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Features;
