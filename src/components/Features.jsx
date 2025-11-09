import { CheckCircle2, CalendarClock, CreditCard, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: CheckCircle2,
    title: 'Order Tracking',
    desc: 'Create, update, and monitor orders from drop-off to delivery with real-time status.',
  },
  {
    icon: CalendarClock,
    title: 'Smart Scheduling',
    desc: 'Auto-assign pickup and delivery slots, avoid conflicts, and keep customers updated.',
  },
  {
    icon: CreditCard,
    title: 'Integrated Payments',
    desc: 'Accept cards and wallets securely with automated receipts and invoices.',
  },
  {
    icon: BarChart3,
    title: 'Analytics',
    desc: 'See revenue, volume, and turnaround time to optimize your operations.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Everything you need to run your laundry</h2>
          <p className="mt-3 text-slate-600">Powerful tools that stay out of your way so you can focus on delighting customers.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 text-white shadow-lg shadow-blue-600/20">
                <f.icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-1 text-slate-600 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
