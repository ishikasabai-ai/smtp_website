import { Construction } from 'lucide-react';
import { Link } from 'react-router-dom';

const Resources = ({ title }) => {
    return (
        <div className="pt-32 pb-20 bg-slate-50 min-h-screen flex items-center justify-center">
            <div className="text-center px-4">
                <div className="bg-slate-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Construction className="w-12 h-12 text-slate-400" />
                </div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">{title || "Coming Soon"}</h1>
                <p className="text-slate-600 mb-8 max-w-md mx-auto">This resource is currently under development. Check back later for updates or browse our other pages.</p>
                <Link to="/" className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                    Return Home
                </Link>
            </div>
        </div>
    );
};

export default Resources;
