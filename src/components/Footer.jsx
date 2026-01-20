import { Mail, Twitter, Github, Linkedin, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
                    <div className="col-span-2 lg:col-span-2">
                        <div className="flex items-center space-x-2 mb-6">
                            <div className="bg-primary-600 p-1.5 rounded-lg">
                                <Mail className="h-6 w-6 text-white" />
                            </div>
                            <span className="font-bold text-2xl text-white">SMTP<span className="text-primary-500">Pro</span></span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
                            The most reliable and secure SMTP server solution for high-volume email delivery. trusted by developers and businesses worldwide.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Github className="h-5 w-5" /></a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-6">Product</h3>
                        <ul className="space-y-4 text-sm">
                            <li><Link to="/price" className="hover:text-primary-400 transition-colors">Pricing</Link></li>
                            <li><Link to="/download" className="hover:text-primary-400 transition-colors">Download</Link></li>
                            <li><Link to="/features" className="hover:text-primary-400 transition-colors">Features</Link></li>


                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-6">Resources</h3>
                        <ul className="space-y-4 text-sm">
                            <li><Link to="/docs" className="hover:text-primary-400 transition-colors">Documentation</Link></li>
                            <li><Link to="/changelog" className="hover:text-primary-400 transition-colors">Changelog</Link></li>
                            <li><Link to="/community" className="hover:text-primary-400 transition-colors">Community</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-6">Company</h3>
                        <ul className="space-y-4 text-sm">
                            <li><Link to="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-primary-400 transition-colors">Contact</Link></li>
                            <li><Link to="/careers" className="hover:text-primary-400 transition-colors">Careers</Link></li>

                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                    <div>
                        &copy; {new Date().getFullYear()} SMTP Pro. All rights reserved.
                    </div>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/cookies" className="hover:text-white transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
