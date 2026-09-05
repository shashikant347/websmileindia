import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center relative">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--accent-blue)]/10 rounded-full blur-3xl pointer-events-none" />
    <div className="text-center relative z-10 px-4">
      <div className="text-[120px] md:text-[180px] font-black leading-none gradient-text mb-4">404</div>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Page Not Found</h1>
      <p className="text-slate-400 text-lg mb-8 max-w-md mx-auto">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <div className="flex gap-4 justify-center flex-wrap">
        <Link to="/" className="btn-primary">
          <Home size={18} /> Go Home
        </Link>
        <button onClick={() => window.history.back()} className="btn-outline">
          <ArrowLeft size={18} /> Go Back
        </button>
      </div>
    </div>
  </div>
);

export default NotFound;
