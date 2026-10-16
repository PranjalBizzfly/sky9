import React from 'react';
import { AlertTriangle, RotateCcw, Home } from 'lucide-react';

/**
 * Top-level React error boundary. Catches unexpected render errors anywhere
 * in the tree and shows a safe, on-brand fallback instead of a blank screen.
 * Technical details are logged to the console for diagnostics; nothing
 * sensitive (stack traces, internals) is shown to the visitor.
 */
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('[ErrorBoundary] Unexpected application error:', error, info?.componentStack);
  }

  handleReload = () => {
    this.setState({ hasError: false });
    window.location.reload();
  };

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-4">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mx-auto">
            <AlertTriangle className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold font-heading tracking-tight text-white">
              Something Went Wrong
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              An unexpected error occurred while loading this page. Please try again, or return to the homepage. If the problem continues, contact Sky9 India admissions for help.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={this.handleReload}
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition duration-300 shadow-lg shadow-emerald-500/25 text-sm cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              Try Again
            </button>
            <a
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900/70 hover:bg-slate-800/80 text-slate-200 hover:text-white border border-slate-700/90 hover:border-emerald-500/50 font-semibold rounded-xl transition duration-300 text-sm"
            >
              <Home className="w-4 h-4" />
              Back to Homepage
            </a>
          </div>
        </div>
      </div>
    );
  }
}
