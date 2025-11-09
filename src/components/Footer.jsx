export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} WashWise. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-slate-600">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="mailto:hello@washwise.app" className="hover:text-slate-900">hello@washwise.app</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
