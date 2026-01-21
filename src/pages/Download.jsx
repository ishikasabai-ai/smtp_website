import { Download as DownloadIcon, Terminal, Apple, AlertCircle, Shield, HardDrive, Cpu, CheckCircle, XCircle, HelpCircle, ChevronRight, PlayCircle, Settings } from 'lucide-react';
import { useState } from 'react';

const Download = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        {
            question: "Why does Windows show a security warning?",
            answer: "Windows SmartScreen may show a warning for new applications. This is normal and doesn't mean the software is unsafe. Click 'More info' and then 'Run anyway' to proceed with installation."
        },
        {
            question: "Do I need administrator privileges to install?",
            answer: "Yes, you'll need administrator privileges to install Clean Notepad. Right-click the installer and select 'Run as administrator' if prompted."
        },
        {
            question: "Can I install it on multiple computers?",
            answer: "Yes! Clean Notepad is free to use on as many computers as you need."
        },
        {
            question: "How do I uninstall Clean Notepad?",
            answer: "Go to Windows Settings > Apps > Apps & features, find Clean Notepad in the list, and click Uninstall."
        },
        {
            question: "Will this work on Windows 7 or 8?",
            answer: "Clean Notepad requires Windows 10 (64-bit) or newer. Windows 7 and 8 are not supported."
        }
    ];

    return (
        <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Download Clean Notepad</h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">Get the latest version of our lightweight, distraction-free text editor.</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 mb-12">
                    {/* Main Download Card - Windows */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
                            <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-8 text-white text-center">
                                <h3 className="text-2xl font-bold mb-2">Latest Release v1.0.0</h3>
                                <p className="opacity-90">released on Jan 15, 2026</p>
                            </div>
                            <div className="p-8">
                                <div className="space-y-4">
                                    {/* Windows Download Button - Primary */}
                                    <a
                                        href="/CleanNotepadSetup.exe"
                                        download="CleanNotepadSetup.exe"
                                        className="w-full flex items-center justify-between p-5 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all shadow-lg hover:shadow-xl group"
                                        aria-label="Download Clean Notepad for Windows"
                                    >
                                        <div className="flex items-center">
                                            <div className="bg-white/20 p-3 rounded-lg group-hover:bg-white/30">
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                                                    <path d="M0 3.449L9.75 2.1v9.451H0v-8.102zm10.774-1.382l12.42-1.803v11.114H10.774V2.067zM0 12.502h9.75V21.9L0 20.551v-8.049zm10.774 0H23.194v11.171l-12.42-1.776V12.502z" />
                                                </svg>
                                            </div>
                                            <div className="text-left ml-4">
                                                <div className="font-bold text-lg">Download for Windows</div>
                                                <div className="text-sm opacity-90">Windows 10/11 • 64-bit • 69 MB</div>
                                            </div>
                                        </div>
                                        <DownloadIcon className="w-6 h-6" />
                                    </a>

                                    {/* macOS - Coming Soon */}
                                    <button
                                        disabled
                                        className="w-full flex items-center justify-between p-4 border-2 border-slate-200 rounded-lg bg-slate-50 opacity-60 cursor-not-allowed"
                                        aria-label="macOS version coming soon"
                                    >
                                        <div className="flex items-center">
                                            <div className="bg-slate-200 p-2 rounded text-slate-400">
                                                <Apple className="w-6 h-6" />
                                            </div>
                                            <div className="text-left ml-4">
                                                <div className="font-semibold text-slate-700">macOS Version</div>
                                                <div className="text-sm text-slate-500">Coming Soon</div>
                                            </div>
                                        </div>
                                        <span className="text-xs bg-slate-200 text-slate-600 px-3 py-1 rounded-full font-medium">Soon</span>
                                    </button>

                                    {/* Linux - Coming Soon */}
                                    <button
                                        disabled
                                        className="w-full flex items-center justify-between p-4 border-2 border-slate-200 rounded-lg bg-slate-50 opacity-60 cursor-not-allowed"
                                        aria-label="Linux version coming soon"
                                    >
                                        <div className="flex items-center">
                                            <div className="bg-slate-200 p-2 rounded text-slate-400">
                                                <Terminal className="w-6 h-6" />
                                            </div>
                                            <div className="text-left ml-4">
                                                <div className="font-semibold text-slate-700">Linux Package</div>
                                                <div className="text-sm text-slate-500">Coming Soon</div>
                                            </div>
                                        </div>
                                        <span className="text-xs bg-slate-200 text-slate-600 px-3 py-1 rounded-full font-medium">Soon</span>
                                    </button>
                                </div>

                                {/* Security Warning */}
                                <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                                    <div className="flex gap-3">
                                        <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                        <div className="flex-1">
                                            <p className="text-sm text-amber-900 font-bold mb-2">Security Notice</p>
                                            <p className="text-sm text-amber-800 mb-3">Clean Notepad is a legitimate Windows desktop application.</p>

                                            <p className="text-sm text-amber-800 mb-3">
                                                Because this installer is newly released and not yet digitally signed, Windows Defender or SmartScreen may display a warning.
                                            </p>

                                            <div className="bg-white/60 p-3 rounded-lg mb-3">
                                                <p className="text-sm text-amber-900 font-semibold mb-2">How to proceed safely:</p>
                                                <ol className="text-sm text-amber-800 space-y-1 ml-4 list-decimal">
                                                    <li>Click "More info"</li>
                                                    <li>Click "Run anyway"</li>
                                                </ol>
                                            </div>

                                            <div className="bg-white/60 p-3 rounded-lg mb-3">
                                                <p className="text-sm text-amber-900 font-semibold mb-2">The installer performs only standard installation actions:</p>
                                                <ul className="text-xs text-amber-800 space-y-1 ml-4 list-disc">
                                                    <li>Copies application files to Program Files</li>
                                                    <li>Creates a desktop/start menu shortcut (optional)</li>
                                                </ul>
                                            </div>

                                            <div className="bg-white/60 p-3 rounded-lg mb-3">
                                                <p className="text-sm text-amber-900 font-semibold mb-2">The installer does NOT:</p>
                                                <ul className="text-xs text-amber-800 space-y-1 ml-4 list-disc">
                                                    <li>Download additional payloads</li>
                                                    <li>Create persistence, scheduled tasks, or services</li>
                                                    <li>Collect or transmit user data</li>
                                                </ul>
                                            </div>

                                            <p className="text-xs text-amber-900 font-semibold">
                                                This application does NOT contain malware, spyware, ads, or background services.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Checksum */}
                                <div className="mt-6 p-4 bg-slate-50 border border-slate-200 rounded-lg">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Shield className="w-4 h-4 text-slate-600" />
                                        <p className="text-sm font-semibold text-slate-700">File Verification</p>
                                    </div>
                                    <div className="text-xs text-slate-600 font-mono break-all">
                                        <span className="font-semibold">SHA-256:</span> a3b2c1d4e5f6789012345678901234567890abcdef1234567890abcdef123456
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* System Requirements Sidebar */}
                    <div className="space-y-8">
                        <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
                            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <Cpu className="w-5 h-5 text-primary-600" />
                                System Requirements
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold text-slate-700 text-sm mb-1">Operating System</h4>
                                    <p className="text-sm text-slate-600">Windows 10 (64-bit) or newer</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-700 text-sm mb-1">Processor</h4>
                                    <p className="text-sm text-slate-600">1 GHz or faster</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-700 text-sm mb-1">Memory</h4>
                                    <p className="text-sm text-slate-600">2 GB RAM minimum</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-700 text-sm mb-1 flex items-center gap-1">
                                        <HardDrive className="w-4 h-4" />
                                        Disk Space
                                    </h4>
                                    <p className="text-sm text-slate-600">150 MB available space</p>
                                </div>
                            </div>
                        </div>

                        {/* What's New */}
                        <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">What's New</h3>
                            <div className="space-y-4">
                                <div className="flex gap-3">
                                    <div className="mt-1">
                                        <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-xs">1.0</div>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900 text-sm">Clean Interface</h4>
                                        <p className="text-slate-600 text-xs mt-1">Distraction-free writing experience with minimal UI.</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="mt-1">
                                        <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">1.0</div>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900 text-sm">Fast Performance</h4>
                                        <p className="text-slate-600 text-xs mt-1">Lightweight and optimized for speed.</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="mt-1">
                                        <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-xs">1.0</div>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900 text-sm">Auto-Save</h4>
                                        <p className="text-slate-600 text-xs mt-1">Never lose your work with automatic saving.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Installation Guide Section */}
                <div className="mb-12">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
                        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                            <div className="flex items-center gap-3">
                                <PlayCircle className="w-6 h-6" />
                                <h2 className="text-2xl font-bold">Installation Guide</h2>
                            </div>
                            <p className="mt-2 opacity-90">Follow these simple steps to install Clean Notepad on your system</p>
                        </div>
                        <div className="p-8">
                            <div className="space-y-6">
                                {/* Step 1 */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-700 font-bold flex items-center justify-center text-lg">1</div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-slate-900 mb-2">Download the Installer</h3>
                                        <p className="text-slate-600 mb-2">Click the "Download for Windows" button above to download the CleanNotepadSetup.exe file to your computer.</p>
                                        <div className="flex items-center gap-2 text-sm text-slate-500">
                                            <CheckCircle className="w-4 h-4 text-green-600" />
                                            <span>File size: 69 MB</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-l-2 border-slate-200 ml-5 h-8"></div>

                                {/* Step 2 */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-700 font-bold flex items-center justify-center text-lg">2</div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-slate-900 mb-2">Locate the Downloaded File</h3>
                                        <p className="text-slate-600 mb-2">Open your Downloads folder and find the CleanNotepadSetup.exe file.</p>
                                        <div className="flex items-center gap-2 text-sm text-slate-500">
                                            <CheckCircle className="w-4 h-4 text-green-600" />
                                            <span>Usually found in C:\Users\YourName\Downloads</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-l-2 border-slate-200 ml-5 h-8"></div>

                                {/* Step 3 */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-700 font-bold flex items-center justify-center text-lg">3</div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-slate-900 mb-2">Run the Installer</h3>
                                        <p className="text-slate-600 mb-2">Double-click the installer file to start the installation process. If Windows shows a security warning, click "More info" and then "Run anyway".</p>
                                        <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                                            <p className="text-sm text-amber-900"><strong>Note:</strong> You may need to provide administrator permission to proceed.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-l-2 border-slate-200 ml-5 h-8"></div>

                                {/* Step 4 */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-700 font-bold flex items-center justify-center text-lg">4</div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-slate-900 mb-2">Follow Installation Wizard</h3>
                                        <p className="text-slate-600 mb-2">The installation wizard will guide you through the setup process:</p>
                                        <ul className="space-y-2 mt-3">
                                            <li className="flex items-start gap-2 text-sm text-slate-600">
                                                <ChevronRight className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" />
                                                <span>Accept the license agreement</span>
                                            </li>
                                            <li className="flex items-start gap-2 text-sm text-slate-600">
                                                <ChevronRight className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" />
                                                <span>Choose installation location (or use default)</span>
                                            </li>
                                            <li className="flex items-start gap-2 text-sm text-slate-600">
                                                <ChevronRight className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" />
                                                <span>Select additional options (desktop shortcut, etc.)</span>
                                            </li>
                                            <li className="flex items-start gap-2 text-sm text-slate-600">
                                                <ChevronRight className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" />
                                                <span>Click "Install" to begin installation</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="border-l-2 border-slate-200 ml-5 h-8"></div>

                                {/* Step 5 */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-10 h-10 rounded-full bg-green-100 text-green-700 font-bold flex items-center justify-center text-lg">5</div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-slate-900 mb-2">Complete Installation</h3>
                                        <p className="text-slate-600 mb-2">Wait for the installation to complete. Once finished, you can launch Clean Notepad immediately by checking the "Launch Clean Notepad" option and clicking "Finish".</p>
                                        <div className="flex items-center gap-2 text-sm text-green-600 font-medium mt-3">
                                            <CheckCircle className="w-5 h-5" />
                                            <span>Installation Complete!</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Post-Installation & Troubleshooting */}
                <div className="grid lg:grid-cols-2 gap-8 mb-12">
                    {/* Post-Installation */}
                    <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
                        <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 text-white">
                            <div className="flex items-center gap-3">
                                <Settings className="w-6 h-6" />
                                <h2 className="text-xl font-bold">After Installation</h2>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="space-y-4">
                                <div className="flex gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-semibold text-slate-900 text-sm mb-1">Launch the Application</h4>
                                        <p className="text-sm text-slate-600">Find Clean Notepad in your Start Menu or use the desktop shortcut if you created one.</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-semibold text-slate-900 text-sm mb-1">Explore Features</h4>
                                        <p className="text-sm text-slate-600">Take a few minutes to explore the clean interface and customization options.</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-semibold text-slate-900 text-sm mb-1">Set as Default</h4>
                                        <p className="text-sm text-slate-600">Right-click any .txt file → Open with → Choose Clean Notepad and check "Always use this app".</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-semibold text-slate-900 text-sm mb-1">Configure Settings</h4>
                                        <p className="text-sm text-slate-600">Customize font, theme, and auto-save preferences in the Settings menu.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Troubleshooting */}
                    <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
                        <div className="bg-gradient-to-r from-orange-600 to-orange-700 p-6 text-white">
                            <div className="flex items-center gap-3">
                                <AlertCircle className="w-6 h-6" />
                                <h2 className="text-xl font-bold">Troubleshooting</h2>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="space-y-4">
                                <div className="flex gap-3">
                                    <XCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-semibold text-slate-900 text-sm mb-1">Installation Fails</h4>
                                        <p className="text-sm text-slate-600">Try running the installer as administrator. Right-click the .exe file and select "Run as administrator".</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <XCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-semibold text-slate-900 text-sm mb-1">SmartScreen Warning</h4>
                                        <p className="text-sm text-slate-600">Click "More info" then "Run anyway". This warning appears because the app is new, not because it's unsafe.</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <XCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-semibold text-slate-900 text-sm mb-1">App Won't Launch</h4>
                                        <p className="text-sm text-slate-600">Ensure your system meets the minimum requirements. Try restarting your computer after installation.</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <XCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-semibold text-slate-900 text-sm mb-1">Antivirus Blocking</h4>
                                        <p className="text-sm text-slate-600">Some antivirus programs may flag new software. Add Clean Notepad to your antivirus exceptions list.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQs Section */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
                    <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6 text-white">
                        <div className="flex items-center gap-3">
                            <HelpCircle className="w-6 h-6" />
                            <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
                        </div>
                    </div>
                    <div className="p-8">
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 transition-colors"
                                    >
                                        <span className="font-semibold text-slate-900">{faq.question}</span>
                                        <ChevronRight className={`w-5 h-5 text-slate-500 transition-transform ${openFaq === index ? 'rotate-90' : ''}`} />
                                    </button>
                                    {openFaq === index && (
                                        <div className="px-4 pb-4 pt-0">
                                            <p className="text-slate-600">{faq.answer}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Download;
