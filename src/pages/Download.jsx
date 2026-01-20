import { Download as DownloadIcon, Terminal, Smartphone } from 'lucide-react';

const Download = () => {
    return (
        <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Download SMTP Pro</h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">Get the latest version of our powerful SMTP server. Available for Windows, Linux, and macOS.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Main Download Card */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
                        <div className="bg-primary-600 p-8 text-white text-center">
                            <h3 className="text-2xl font-bold mb-2">Latest Release v4.2.0</h3>
                            <p className="opacity-90">released on Jan 15, 2026</p>
                        </div>
                        <div className="p-8">
                            <div className="space-y-4">
                                <a href="/CleanNotepadSetup (1).exe" download className="w-full flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-all group">
                                    <div className="flex items-center">
                                        <div className="bg-slate-100 p-2 rounded group-hover:bg-white text-slate-600">
                                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M0 3.449L9.75 2.1v9.451H0v-8.102zm10.774-1.382l12.42-1.803v11.114H10.774V2.067zM0 12.502h9.75V21.9L0 20.551v-8.049zm10.774 0H23.194v11.171l-12.42-1.776V12.502z" /></svg>
                                        </div>
                                        <div className="text-left ml-4">
                                            <div className="font-semibold text-slate-900">Windows Installer (MSI)</div>
                                            <div className="text-sm text-slate-500">64-bit | 124 MB</div>
                                        </div>
                                    </div>
                                    <DownloadIcon className="text-slate-400 group-hover:text-primary-600" />
                                </a>

                                <button className="w-full flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-all group">
                                    <div className="flex items-center">
                                        <div className="bg-slate-100 p-2 rounded group-hover:bg-white text-slate-600">
                                            <Terminal className="w-6 h-6" />
                                        </div>
                                        <div className="text-left ml-4">
                                            <div className="font-semibold text-slate-900">Linux Package (DEB)</div>
                                            <div className="text-sm text-slate-500">Ubuntu/Debian | 85 MB</div>
                                        </div>
                                    </div>
                                    <DownloadIcon className="text-slate-400 group-hover:text-primary-600" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Changelog / Info */}
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">What's New</h3>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="mt-1">
                                    <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-sm">v4</div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900">Improved Analytics Dashboard</h4>
                                    <p className="text-slate-600 text-sm mt-1">Totally redesigned dashboard with real-time delivery graphs and bounce tracking.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">v4</div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900">TLS 1.3 Support</h4>
                                    <p className="text-slate-600 text-sm mt-1">Enhanced security with the latest Transport Layer Security protocols enabled by default.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1">
                                    <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-sm">v4</div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900">Webhook Integration</h4>
                                    <p className="text-slate-600 text-sm mt-1">Get instant notifications for delivery events directly to your applications.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Download;
