import { Star, Zap, Bug, Shield, Calendar, Tag } from 'lucide-react';

const versions = [
    {
        version: "2.4.0",
        date: "January 2026",
        sections: [
            {
                title: "New Features",
                icon: Star,
                iconColor: "text-amber-500",
                bgColor: "bg-amber-100",
                items: [
                    "Added SMTP connection analytics for better visibility into delivery performance",
                    "Introduced rate limit controls per API key",
                    "New email queue monitoring dashboard"
                ]
            },
            {
                title: "Improvements",
                icon: Zap,
                iconColor: "text-blue-500",
                bgColor: "bg-blue-100",
                items: [
                    "Improved email delivery speed under high-load conditions",
                    "Optimized SMTP authentication flow for faster handshakes",
                    "Enhanced UI responsiveness across the dashboard"
                ]
            },
            {
                title: "Bug Fixes",
                icon: Bug,
                iconColor: "text-red-500",
                bgColor: "bg-red-100",
                items: [
                    "Fixed intermittent SMTP timeout issues on long-lived connections",
                    "Resolved incorrect status reporting for deferred emails",
                    "Minor UI fixes in activity logs and filters"
                ]
            }
        ]
    },
    {
        version: "2.3.2",
        date: "December 2025",
        sections: [
            {
                title: "Bug Fixes",
                icon: Bug,
                iconColor: "text-red-500",
                bgColor: "bg-red-100",
                items: [
                    "Fixed DKIM validation issue affecting specific domains",
                    "Corrected inaccurate bounce classification for temporary failures",
                    "Improved error messaging for invalid SMTP credentials"
                ]
            }
        ]
    },
    {
        version: "2.3.0",
        date: "November 2025",
        sections: [
            {
                title: "New Features",
                icon: Star,
                iconColor: "text-amber-500",
                bgColor: "bg-amber-100",
                items: [
                    "Added SPF & DKIM configuration assistant",
                    "Introduced webhook support for delivery events",
                    "New email testing sandbox for developers"
                ]
            },
            {
                title: "Improvements",
                icon: Zap,
                iconColor: "text-blue-500",
                bgColor: "bg-blue-100",
                items: [
                    "Improved bounce and complaint tracking accuracy",
                    "Reduced SMTP retry delays for transient failures",
                    "Enhanced logging for troubleshooting delivery issues"
                ]
            }
        ]
    },
    {
        version: "2.2.0",
        date: "September 2025",
        sections: [
            {
                title: "New Features",
                icon: Star,
                iconColor: "text-amber-500",
                bgColor: "bg-amber-100",
                items: [
                    "Role-based access control for team accounts",
                    "Customizable SMTP ports and encryption settings",
                    "API key regeneration with audit logs"
                ]
            },
            {
                title: "Bug Fixes",
                icon: Bug,
                iconColor: "text-red-500",
                bgColor: "bg-red-100",
                items: [
                    "Fixed issue where large attachments caused delivery failures",
                    "Corrected timezone inconsistencies in delivery reports"
                ]
            },
            {
                title: "Security Updates",
                icon: Shield,
                iconColor: "text-emerald-500",
                bgColor: "bg-emerald-100",
                items: [
                    "Regular security patches and dependency upgrades",
                    "Improved protection against brute-force authentication attempts",
                    "Updated TLS cipher support to align with industry best practices"
                ]
            }
        ]
    }
];

const Changelog = () => {
    return (
        <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Changelog</h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Stay up to date with the latest improvements, fixes, and new features added to our SMTP platform.
                    </p>
                </div>

                <div className="space-y-12">
                    {versions.map((version, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                            <div className="bg-slate-50 px-8 py-6 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="bg-primary-100 p-2 rounded-lg">
                                        <Tag className="w-5 h-5 text-primary-600" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-900">Version {version.version}</h2>
                                </div>
                                <div className="flex items-center gap-2 text-slate-500 bg-white px-3 py-1.5 rounded-full border border-slate-200 text-sm font-medium">
                                    <Calendar className="w-4 h-4" />
                                    {version.date}
                                </div>
                            </div>

                            <div className="p-8 space-y-8">
                                {version.sections.map((section, sectionIndex) => (
                                    <div key={sectionIndex}>
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className={`p-1.5 rounded-md ${section.bgColor}`}>
                                                <section.icon className={`w-4 h-4 ${section.iconColor}`} />
                                            </div>
                                            <h3 className="text-lg font-semibold text-slate-900">{section.title}</h3>
                                        </div>
                                        <ul className="space-y-3 pl-9">
                                            {section.items.map((item, itemIndex) => (
                                                <li key={itemIndex} className="text-slate-600 flex items-start gap-2 relative">
                                                    <span className="absolute left-[-1.5rem] top-2.5 w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Changelog;
