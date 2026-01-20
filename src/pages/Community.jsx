import { Users, MessageCircle, Github, Twitter, Heart, Slack, FileQuestion } from 'lucide-react';

const Community = () => {
    return (
        <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Hero */}
                <div className="text-center mb-16">
                    <span className="text-primary-600 font-semibold tracking-wide uppercase text-sm">Community</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-6">
                        Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600">SMTP Pro</span> Ecosystem
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Connect with thousands of developers, share what you're building, and get help from the experts.
                    </p>
                </div>

                {/* Main Channels Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {/* Discord */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow group cursor-pointer">
                        <div className="bg-indigo-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <MessageCircle className="w-7 h-7 text-indigo-600" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Discord Server</h3>
                        <p className="text-slate-600 mb-6">Chat in real-time with other developers, show off your projects, and get instant feedback.</p>
                        <span className="text-indigo-600 font-bold group-hover:underline">Join 4,500+ Members &rarr;</span>
                    </div>

                    {/* GitHub */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow group cursor-pointer">
                        <div className="bg-slate-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Github className="w-7 h-7 text-slate-800" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">GitHub Discussions</h3>
                        <p className="text-slate-600 mb-6">Report bugs, request features, and contribute to our open-source SDKs.</p>
                        <span className="text-slate-900 font-bold group-hover:underline">View Repository &rarr;</span>
                    </div>

                    {/* Twitter/X */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow group cursor-pointer">
                        <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Twitter className="w-7 h-7 text-blue-500" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Twitter / X</h3>
                        <p className="text-slate-600 mb-6">Follow us for the latest product updates, downtime alerts, and engineering tips.</p>
                        <span className="text-blue-500 font-bold group-hover:underline">Follow @SMTPPro &rarr;</span>
                    </div>
                </div>

                {/* Support Section */}
                <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-center mb-20 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-900 opacity-50"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold text-white mb-6">Need technical help?</h2>
                        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                            Our support engineers and community experts are ready to assist you.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-primary-700 transition-all flex items-center justify-center">
                                <FileQuestion className="w-5 h-5 mr-2" />
                                Visit Stack Overflow
                            </button>
                            <button className="bg-slate-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-slate-600 transition-all flex items-center justify-center">
                                <Users className="w-5 h-5 mr-2" />
                                Contact Support
                            </button>
                        </div>
                    </div>
                </div>

                {/* Upcoming Events */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Upcoming Events</h2>
                        <div className="space-y-6">
                            <div className="flex gap-4 items-start">
                                <div className="bg-primary-100 text-primary-700 font-bold px-4 py-3 rounded-lg text-center min-w-[80px]">
                                    <div className="text-sm uppercase">Oct</div>
                                    <div className="text-2xl">24</div>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-slate-900">Email Deliverability Masterclass</h4>
                                    <p className="text-slate-600 text-sm mb-2">Online Webinar • 10:00 AM PST</p>
                                    <p className="text-slate-500 text-sm">Learn the secrets of avoiding the spam folder with our lead deliverability expert.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="bg-slate-200 text-slate-600 font-bold px-4 py-3 rounded-lg text-center min-w-[80px]">
                                    <div className="text-sm uppercase">Nov</div>
                                    <div className="text-2xl">12</div>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-slate-900">SMTP Pro Community Meetup</h4>
                                    <p className="text-slate-600 text-sm mb-2">San Francisco, CA • 6:00 PM PST</p>
                                    <p className="text-slate-500 text-sm">Join us for food, drinks, and tech talks at our HQ.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-primary-600 to-indigo-700 p-8 rounded-2xl text-white">
                        <Heart className="w-12 h-12 text-pink-400 mb-6" />
                        <h3 className="text-2xl font-bold mb-4">Open Source Contributions</h3>
                        <p className="text-primary-100 mb-6 leading-relaxed">
                            We love open source! We have special rewards for contributors who help improve our SDKs or documentation.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                                Free Enterprise plan for 1 year
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                                Exclusive generic swag pack
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                                Fast-tracked support
                            </li>
                        </ul>
                        <button className="w-full bg-white text-primary-700 font-bold py-3 rounded-lg hover:bg-primary-50 transition-colors">
                            Start Contributing
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Community;
