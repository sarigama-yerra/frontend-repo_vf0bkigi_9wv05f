import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[620px] w-full">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/6m7nOeK7wHf8w2xJ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        {/* gradient overlays should not block interaction with Spline */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3 py-1 text-xs font-medium text-blue-700 shadow-sm">
              <Rocket size={14} /> Launch your laundry SaaS in days
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Smart Online Laundry Management
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Streamline orders, scheduling, and payments with a modern, cloud-first platform designed for laundries of any size.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#pricing" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 hover:opacity-95">
                Get Started
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                See Features
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
