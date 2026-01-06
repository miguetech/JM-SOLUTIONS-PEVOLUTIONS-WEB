import React, { useEffect, useState } from 'react';

const Account: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const userData = localStorage.getItem('user');

    if (isLoggedIn === 'true' && userData) {
      setUser(JSON.parse(userData));
    } else {
      window.location.href = '/login';
    }
    setLoading(false);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    window.location.href = '/';
  };

  if (loading) return null;
  if (!user) return null;

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h2 className="text-4xl font-black text-white uppercase tracking-tighter italic">
          My <span className="text-brand-accent">Account</span>
        </h2>
        <div className="h-1.5 w-24 bg-brand-accent rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="lg:col-span-1 space-y-6">
          <div className="glass-card p-8 flex flex-col items-center text-center gap-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-brand-accent/20 to-transparent"></div>
            
            <div className="relative">
              <div className="w-32 h-32 rounded-3xl bg-brand-bg border-4 border-brand-accent/30 p-1">
                <div className="w-full h-full rounded-[20px] overflow-hidden bg-brand-accent/10 flex items-center justify-center">
                  <svg className="w-16 h-16 text-brand-accent/40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-xl bg-green-500 border-4 border-brand-bg flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
              </div>
            </div>

            <div className="space-y-1">
              <h3 className="text-2xl font-black text-white uppercase tracking-tight">{user.username}</h3>
              <p className="text-sm font-medium text-gray-500">{user.email}</p>
            </div>

            <div className="w-full pt-6 border-t border-white/5 grid grid-cols-2 gap-4 text-[10px] font-black uppercase tracking-widest text-gray-500">
              <div className="flex flex-col gap-1">
                <span className="text-brand-accent text-lg">Trainer</span>
                <span>Type</span>
              </div>
              <div className="flex flex-col gap-1 border-l border-white/5">
                <span className="text-white text-lg">Jan 2026</span>
                <span>Joined</span>
              </div>
            </div>
          </div>

          <button 
            onClick={handleLogout}
            className="w-full py-4 glass-card border-red-500/30 text-red-500 font-black uppercase tracking-widest text-sm hover:bg-red-500/10 hover:border-red-500/50 transition-all flex items-center justify-center gap-3"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Logout session
          </button>
        </div>

        {/* Dashboard Sections */}
        <div className="lg:col-span-2 space-y-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: 'Total Playing', value: '12h 45m', color: 'text-blue-400' },
              { label: 'Pokémon Caught', value: '1,240', color: 'text-brand-pokemon-gold' },
              { label: 'World Ranking', value: '#4,520', color: 'text-brand-accent' }
            ].map((stat, i) => (
              <div key={i} className="glass-card p-6 border-none bg-white/[0.02]">
                <span className={`text-2xl font-black block mb-1 ${stat.color}`}>{stat.value}</span>
                <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest leading-none">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Recent Activity */}
          <div className="space-y-4">
            <h4 className="text-lg font-black text-white uppercase italic tracking-wider flex items-center gap-3">
              <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
              Recent Activity
            </h4>
            <div className="space-y-3">
              {[
                { action: 'Caught a Shiny Charizard', date: '2 hours ago', icon: '🔥' },
                { action: 'Reached Level 85', date: '5 hours ago', icon: '⚡' },
                { action: 'Traded with MistyTrainer', date: '1 day ago', icon: '🔄' }
              ].map((activity, i) => (
                <div key={i} className="glass-card p-4 flex items-center justify-between group hover:bg-white/[0.03] transition-colors">
                  <div className="flex items-center gap-4">
                    <span className="text-xl">{activity.icon}</span>
                    <span className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors">{activity.action}</span>
                  </div>
                  <span className="text-[10px] font-bold text-gray-500 uppercase">{activity.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Settings / Security Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass-card p-6 space-y-4 hover:border-brand-accent/30 transition-all cursor-pointer group">
              <div className="w-10 h-10 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h5 className="font-black text-white uppercase text-sm tracking-wide">Security</h5>
                <p className="text-xs text-gray-500 mt-1">Change password and active sessions</p>
              </div>
            </div>
            <div className="glass-card p-6 space-y-4 hover:border-purple-500/30 transition-all cursor-pointer group">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h5 className="font-black text-white uppercase text-sm tracking-wide">Notifications</h5>
                <p className="text-xs text-gray-500 mt-1">Configure email alerts and mentions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
