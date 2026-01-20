import { Briefcase, MapPin } from 'lucide-react';

const Careers = () => {
    const jobs = [
        { title: "Senior Backend Engineer", dept: "Engineering", loc: "Remote (US)", type: "Full-time" },
        { title: "DevOps Specialist", dept: "Infrastructure", loc: "San Francisco, CA", type: "Full-time" },
        { title: "Technical Support Engineer", dept: "Support", loc: "Remote (EU)", type: "Full-time" },
        { title: "Product Marketing Manager", dept: "Marketing", loc: "New York, NY", type: "Full-time" },
    ];

    return (
        <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Join Our Team</h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">We're building the future of email infrastructure. Come solve complex problems with a passionate global team.</p>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                    {jobs.map((job, i) => (
                        <div key={i} className="p-6 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div>
                                <h3 className="text-lg font-bold text-slate-900">{job.title}</h3>
                                <div className="flex items-center text-sm text-slate-500 mt-1 gap-4">
                                    <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {job.dept}</span>
                                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.loc}</span>
                                </div>
                            </div>
                            <div>
                                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold uppercase tracking-wide">{job.type}</span>
                            </div>
                            <button className="text-primary-600 font-semibold hover:text-primary-700">Apply Now &rarr;</button>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Careers;
