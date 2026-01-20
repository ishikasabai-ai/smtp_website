import { Book, Terminal, Settings, AlertCircle, Key, FileText, Code } from 'lucide-react';
import { useState } from 'react';

const Documentation = () => {
    const [activeSection, setActiveSection] = useState('getting-started');

    const sections = [
        { id: 'getting-started', title: 'Getting Started', icon: Book },
        { id: 'smtp-config', title: 'SMTP Configuration', icon: Settings },
        { id: 'api-access', title: 'API Access', icon: Key },
        { id: 'libraries', title: 'Libraries & SDKs', icon: Code },
        { id: 'webhooks', title: 'Webhooks', icon: Terminal },
        { id: 'response-codes', title: 'Response Codes', icon: FileText },
        { id: 'troubleshooting', title: 'Troubleshooting', icon: AlertCircle },
    ];

    return (
        <div className="pt-20 bg-slate-50 min-h-screen">
            <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 gap-8">

                {/* Sidebar */}
                <aside className="lg:w-64 flex-shrink-0">
                    <nav className="sticky top-24 space-y-1">
                        <div className="pb-4 mb-4 border-b border-slate-200">
                            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider px-3">Documentation</h2>
                        </div>
                        {sections.map(section => (
                            <button
                                key={section.id}
                                onClick={() => setActiveSection(section.id)}
                                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${activeSection === section.id
                                    ? 'bg-primary-50 text-primary-700'
                                    : 'text-slate-600 hover:bg-slate-100'
                                    }`}
                            >
                                <section.icon className={`h-4 w-4 mr-3 ${activeSection === section.id ? 'text-primary-500' : 'text-slate-400'
                                    }`} />
                                {section.title}
                            </button>
                        ))}
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="flex-1 bg-white rounded-2xl shadow-sm border border-slate-200 p-8 lg:p-12 mb-12">

                    {activeSection === 'getting-started' && (
                        <div>
                            <h1 className="text-3xl font-bold text-slate-900 mb-6">Getting Started with SMTP Pro</h1>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Welcome to the SMTP Pro developer documentation. We provide a reliable, developer-friendly email infrastructure that scales with your business.
                            </p>

                            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r mb-8">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <Book className="h-5 w-5 text-blue-500" />
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm text-blue-700">
                                            <strong>New here?</strong> create a free account to get your first API Key and Sandbox credentials.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-xl font-bold text-slate-900 mb-4">Core Concepts</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="border border-slate-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-slate-800 mb-2">SMTP Relay</h3>
                                    <p className="text-slate-600 text-sm">Standard protocol for sending emails from any application, printer, or IoT device.</p>
                                </div>
                                <div className="border border-slate-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-slate-800 mb-2">Web API</h3>
                                    <p className="text-slate-600 text-sm">HTTP REST API for ensuring maximum deliverability and tracking events.</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeSection === 'smtp-config' && (
                        <div>
                            <h1 className="text-3xl font-bold text-slate-900 mb-6">SMTP Configuration</h1>
                            <p className="text-slate-600 mb-8">
                                Use these settings to configure your email client or application to send via SMTP Pro.
                            </p>

                            <div className="overflow-hidden border border-slate-200 rounded-xl mb-8">
                                <table className="min-w-full divide-y divide-slate-200">
                                    <tbody className="divide-y divide-slate-200 bg-white">
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-slate-500 bg-slate-50 w-1/3">Host Server</td>
                                            <td className="px-6 py-4 text-sm font-mono text-slate-900 select-all">smtp.smtppro.com</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-slate-500 bg-slate-50">Secure Port (TLS)</td>
                                            <td className="px-6 py-4 text-sm font-mono text-slate-900">587 <span className="text-slate-400 text-xs ml-2">(Recommended)</span></td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-slate-500 bg-slate-50">SSL Port</td>
                                            <td className="px-6 py-4 text-sm font-mono text-slate-900">465</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-slate-500 bg-slate-50">Username</td>
                                            <td className="px-6 py-4 text-sm font-mono text-slate-900">apikey</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-medium text-slate-500 bg-slate-50">Password</td>
                                            <td className="px-6 py-4 text-sm font-mono text-slate-900">Your API Key</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3 className="text-lg font-bold text-slate-900 mb-4">Example: Nodemailer (Node.js)</h3>
                            <pre className="bg-slate-900 text-slate-300 p-4 rounded-xl text-sm overflow-x-auto">
                                <code>{`let transporter = nodemailer.createTransport({
  host: "smtp.smtppro.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "apikey",
    pass: "YOUR_API_KEY"
  }
});`}</code>
                            </pre>
                        </div>
                    )}

                    {activeSection === 'api-access' && (
                        <div>
                            <h1 className="text-3xl font-bold text-slate-900 mb-6">API Access</h1>
                            <p className="text-slate-600 mb-6">
                                The SMTP Pro API is built on REST principles. We enforce HTTPS in every request to improve data security, integrity, and privacy.
                            </p>

                            <h3 className="text-lg font-bold text-slate-900 mb-3">Authentication</h3>
                            <p className="text-slate-600 mb-4">Authenticate your API requests using your API keys.</p>
                            <div className="bg-slate-900 text-slate-300 p-4 rounded-lg mb-8 font-mono text-sm">
                                Authorization: Bearer sg.1234567890.abcdefghijklmn
                            </div>

                            <h3 className="text-lg font-bold text-slate-900 mb-3">Rate Limits</h3>
                            <ul className="list-disc list-inside text-slate-600 space-y-2 mb-8">
                                <li>Free Tier: 100 requests / day</li>
                                <li>Professional: 50,000 requests / hour</li>
                                <li>Enterprise: Unlimited</li>
                            </ul>
                        </div>
                    )}

                    {activeSection === 'libraries' && (
                        <div>
                            <h1 className="text-3xl font-bold text-slate-900 mb-6">Libraries & SDKs</h1>
                            <p className="text-slate-600 mb-8">
                                We maintain official libraries for popular programming languages to make integration easier.
                            </p>

                            <div className="grid gap-6">
                                <div className="border border-slate-200 rounded-xl p-6">
                                    <div className="flex items-center mb-4">
                                        <div className="bg-green-100 p-2 rounded-lg mr-4">
                                            <span className="font-bold text-green-700">Node.js</span>
                                        </div>
                                        <div className="font-mono text-sm bg-slate-100 px-3 py-1 rounded text-slate-600">npm install smtppro-client</div>
                                    </div>
                                    <p className="text-sm text-slate-600">Official Node.js client for sending emails and managing webhooks.</p>
                                </div>

                                <div className="border border-slate-200 rounded-xl p-6">
                                    <div className="flex items-center mb-4">
                                        <div className="bg-blue-100 p-2 rounded-lg mr-4">
                                            <span className="font-bold text-blue-700">Python</span>
                                        </div>
                                        <div className="font-mono text-sm bg-slate-100 px-3 py-1 rounded text-slate-600">pip install smtppro</div>
                                    </div>
                                    <p className="text-sm text-slate-600">Python SDK compatible with Django, Flask, and FastAPI.</p>
                                </div>

                                <div className="border border-slate-200 rounded-xl p-6">
                                    <div className="flex items-center mb-4">
                                        <div className="bg-purple-100 p-2 rounded-lg mr-4">
                                            <span className="font-bold text-purple-700">PHP</span>
                                        </div>
                                        <div className="font-mono text-sm bg-slate-100 px-3 py-1 rounded text-slate-600">composer require smtppro/sdk</div>
                                    </div>
                                    <p className="text-sm text-slate-600">PHP client with PSR-7 support and Laravel integration.</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeSection === 'response-codes' && (
                        <div>
                            <h1 className="text-3xl font-bold text-slate-900 mb-6">Response Codes</h1>
                            <p className="text-slate-600 mb-8">
                                Understanding the status codes returned by our API and SMTP server.
                            </p>

                            <h3 className="text-xl font-bold text-slate-900 mb-4">SMTP Response Codes</h3>
                            <div className="overflow-hidden border border-slate-200 rounded-xl mb-12">
                                <table className="min-w-full divide-y divide-slate-200">
                                    <thead className="bg-slate-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Code</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Meaning</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200 bg-white">
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-mono font-bold text-green-600">250</td>
                                            <td className="px-6 py-4 text-sm text-slate-600">Requested mail action OK, completed.</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-mono font-bold text-yellow-600">421</td>
                                            <td className="px-6 py-4 text-sm text-slate-600">Service not available, closing transmission channel.</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-mono font-bold text-red-600">550</td>
                                            <td className="px-6 py-4 text-sm text-slate-600">Requested action not taken: mailbox unavailable (e.g., mail not found on server).</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-mono font-bold text-red-600">553</td>
                                            <td className="px-6 py-4 text-sm text-slate-600">Requested action not taken: mailbox name not allowed (e.g., sender address rejected).</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-4">HTTP API Status Codes</h3>
                            <div className="overflow-hidden border border-slate-200 rounded-xl">
                                <table className="min-w-full divide-y divide-slate-200">
                                    <thead className="bg-slate-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Code</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Meaning</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200 bg-white">
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-mono font-bold text-green-600">200 OK</td>
                                            <td className="px-6 py-4 text-sm text-slate-600">Request was successful.</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-mono font-bold text-yellow-600">401 Unauthorized</td>
                                            <td className="px-6 py-4 text-sm text-slate-600">API Key is missing or invalid.</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-mono font-bold text-yellow-600">429 Too Many Requests</td>
                                            <td className="px-6 py-4 text-sm text-slate-600">You have exceeded your rate limit.</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-mono font-bold text-red-600">500 Server Error</td>
                                            <td className="px-6 py-4 text-sm text-slate-600">Something went wrong on our end.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {activeSection === 'webhooks' && (
                        <div>
                            <h1 className="text-3xl font-bold text-slate-900 mb-6">Webhooks</h1>
                            <p className="text-slate-600 mb-6">
                                Subscribe to email events to track your delivery performance in real-time.
                            </p>
                            <div className="grid gap-4">
                                {[
                                    { event: 'delivered', desc: 'Message successfully delivered to the recipient server.' },
                                    { event: 'bounce', desc: 'Recipient server rejected the message permanentyl.' },
                                    { event: 'open', desc: 'Recipient opened the email (requires HTML).' },
                                    { event: 'click', desc: 'Recipient clicked a link in the email.' }
                                ].map(hook => (
                                    <div key={hook.event} className="border border-slate-200 p-4 rounded-lg flex items-start">
                                        <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 font-mono text-xs rounded mr-3">
                                            {hook.event}
                                        </span>
                                        <span className="text-slate-600 text-sm">{hook.desc}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeSection === 'troubleshooting' && (
                        <div>
                            <h1 className="text-3xl font-bold text-slate-900 mb-6">Troubleshooting</h1>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">Connection Timeout</h3>
                                    <p className="text-slate-600 text-sm">
                                        Ensure your firewall allows outbound connections on ports 587 or 2525.
                                        Some cloud providers (like AWS EC2) block port 25 by default.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">550 Authentication Failed</h3>
                                    <p className="text-slate-600 text-sm">
                                        Double check your API Key. Ensure you are using the string 'apikey' as the username, and your actual key as the password.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">TLS Handshake Error</h3>
                                    <p className="text-slate-600 text-sm">
                                        Your client might be trying to use SSLv3 which is disabled. Force TLS 1.2 or higher.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                </main>
            </div>
        </div>
    );
};

export default Documentation;
