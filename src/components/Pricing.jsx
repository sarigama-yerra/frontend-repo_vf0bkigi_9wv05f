import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$9',
    period: '/mo',
    highlight: false,
    features: ['50 orders/mo', 'Basic scheduling', 'Email support'],
  },
  {
    name: 'Growth',
    price: '$29',
    period: '/mo',
    highlight: true,
    features: ['500 orders/mo', 'Route optimization', 'Priority support'],
  },
  {
    name: 'Scale',
    price: '$79',
    period: '/mo',
    highlight: false,
    features: ['Unlimited orders', 'Advanced analytics', 'SLA support'],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-600">Start small and scale with your business. Cancel anytime.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className={`rounded-2xl border p-6 shadow-sm transition ${t.highlight ? 'border-blue-300 bg-white shadow-blue-100' : 'border-slate-200 bg-white'}`}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold text-slate-900">{t.name}</h3>
                {t.highlight && (
                  <span className="rounded-full bg-blue-600/10 px-3 py-1 text-xs font-medium text-blue-700">Popular</span>
                )}
              </div>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-4xl font-extrabold text-slate-900">{t.price}</span>
                <span className="text-slate-500">{t.period}</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-slate-700">
                    <Check size={16} className="text-green-600" /> {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full rounded-lg px-4 py-2 text-sm font-semibold shadow ${t.highlight ? 'bg-gradient-to-tr from-blue-600 to-cyan-400 text-white shadow-blue-600/20' : 'border border-slate-300 text-slate-700 hover:bg-slate-50'}`}>
                Choose {t.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
