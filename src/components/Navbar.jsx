import { useState } from 'react';
import { Menu, X, User } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 shadow-lg" />
            <span className="text-xl font-semibold tracking-tight text-slate-900">WashWise</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="text-slate-600 hover:text-slate-900 transition">Features</a>
            <a href="#pricing" className="text-slate-600 hover:text-slate-900 transition">Pricing</a>
            <a href="#contact" className="text-slate-600 hover:text-slate-900 transition">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
              <User size={16} /> Log in
            </button>
            <button className="inline-flex items-center rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 hover:opacity-95">
              Get Started
            </button>
          </div>

          <button aria-label="Toggle Menu" onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col gap-2 rounded-xl border border-slate-200 p-3 bg-white">
              <a onClick={() => setOpen(false)} href="#features" className="rounded-md px-3 py-2 text-slate-700 hover:bg-slate-50">Features</a>
              <a onClick={() => setOpen(false)} href="#pricing" className="rounded-md px-3 py-2 text-slate-700 hover:bg-slate-50">Pricing</a>
              <a onClick={() => setOpen(false)} href="#contact" className="rounded-md px-3 py-2 text-slate-700 hover:bg-slate-50">Contact</a>
              <div className="mt-2 flex gap-2">
                <button className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700">Log in</button>
                <button className="flex-1 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 px-3 py-2 text-sm font-semibold text-white">Get Started</button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
