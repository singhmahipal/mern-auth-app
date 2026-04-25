import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { user } = useAuth();

  const features = [
    {
      title: "Secure Authentication",
      desc: "Industry-standard JWT tokens with bcrypt password hashing keep your data safe.",
      icon: "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z",
    },
    {
      title: "MERN Stack",
      desc: "Built with MongoDB, Express.js, React, and Node.js — the most popular JS ecosystem.",
      icon: "M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008V18m-12 0h.008v.008H9.75V18",
    },
    {
      title: "Lightning Fast",
      desc: "Optimized with Vite for instant HMR and blazing-fast production builds.",
      icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
    },
    {
      title: "Protected Routes",
      desc: "Only authenticated users can access private resources and dashboards.",
      icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
    },
    {
      title: "Cloud Ready",
      desc: "Deploy anywhere — Vercel, Netlify, Render, or Railway with MongoDB Atlas.",
      icon: "M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z",
    },
    {
      title: "Responsive Design",
      desc: "Beautiful on every device — mobile, tablet, and ultra-wide desktop monitors.",
      icon: "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        </div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)", backgroundSize: "60px 60px" }}></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-light text-xs font-medium text-primary-300 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Production-Ready MERN Stack App
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
            <span className="text-white">Secure Auth,</span><br />
            <span className="gradient-text">Beautifully Crafted</span>
          </h1>

          <p className="text-lg sm:text-xl text-dark-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            A modern authentication system built with MongoDB, Express, React &amp; Node.js. Sign up, log in, and manage your account — all in one elegant platform.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {user ? (
              <Link to="/dashboard" className="group px-8 py-3.5 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500 transition-all duration-300 shadow-xl shadow-primary-500/25 hover:shadow-primary-500/40 hover:-translate-y-0.5">
                Go to Dashboard <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            ) : (
              <>
                <Link to="/signup" className="group px-8 py-3.5 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500 transition-all duration-300 shadow-xl shadow-primary-500/25 hover:shadow-primary-500/40 hover:-translate-y-0.5">
                  Get Started Free <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                <Link to="/login" className="px-8 py-3.5 rounded-xl text-base font-semibold text-dark-300 glass hover:text-white transition-all duration-300">
                  Sign In
                </Link>
              </>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-14">
            {["React", "Node.js", "MongoDB", "Express", "JWT", "Tailwind CSS"].map((t) => (
              <span key={t} className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-dark-400 bg-dark-800/50 border border-dark-700/50 hover:border-primary-500/30 hover:text-primary-300 transition-all duration-300 cursor-default">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Everything You Need</h2>
            <p className="text-dark-400 text-lg max-w-xl mx-auto">Built with modern technologies and best practices.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <div key={i} className="group p-6 rounded-2xl glass-light hover:bg-dark-800/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-500/5">
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-400 mb-4 group-hover:bg-primary-500/20 transition-all">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d={f.icon} /></svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-dark-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="p-10 rounded-3xl glass relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary-500/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-dark-400 mb-8">Create your free account in seconds. No credit card required.</p>
              {!user && (
                <Link to="/signup" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500 transition-all duration-300 shadow-xl shadow-primary-500/25">
                  Create Free Account →
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-dark-800/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-dark-500 text-sm">© {new Date().getFullYear()} AuthVault. Built with the MERN Stack.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
