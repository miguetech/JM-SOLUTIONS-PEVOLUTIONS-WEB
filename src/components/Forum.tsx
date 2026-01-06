import React from 'react';

interface Category {
  id: number;
  title: string;
  description: string;
  topics: number;
  posts: number;
  icon: React.ReactNode;
  color: string;
  latestPost?: {
    title: string;
    author: string;
    date: string;
  };
}

const Forum: React.FC = () => {
  const categories: Category[] = [
    {
      id: 1,
      title: 'Announcements',
      description: 'Official news and updates directly from the PEvolutions team.',
      topics: 154,
      posts: 1240,
      color: 'from-blue-500 to-indigo-600',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
      latestPost: {
        title: 'New Region Expansion: Hoenn!',
        author: 'Admin_Sylarnal',
        date: '2 hours ago'
      }
    },
    {
      id: 2,
      title: 'General Discussion',
      description: 'Talk about anything related to the game, Pokémon, and community.',
      topics: 842,
      posts: 15600,
      color: 'from-emerald-500 to-teal-600',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
      latestPost: {
        title: 'Who is your favorite starter?',
        author: 'PokeFan99',
        date: '5 mins ago'
      }
    },
    {
      id: 3,
      title: 'Trade & Market',
      description: 'Buy, sell, or trade your Pokémon with other trainers.',
      topics: 2451,
      posts: 45200,
      color: 'from-amber-400 to-orange-500',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      latestPost: {
        title: 'WTT Shiny Charizard for Mewtwo',
        author: 'MasterTrader',
        date: 'Just now'
      }
    },
    {
      id: 4,
      title: 'Guides & Strategy',
      description: 'Learn the best tactics, builds, and tips from pro players.',
      topics: 423,
      posts: 8900,
      color: 'from-purple-500 to-pink-600',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5S19.832 5.477 21 6.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      latestPost: {
        title: 'Ultimate Fishing Leveling Guide',
        author: 'MistyTrainer',
        date: '1 day ago'
      }
    },
    {
      id: 5,
      title: 'Bugs & Support',
      description: 'Report issues or ask for help with your account.',
      topics: 112,
      posts: 540,
      color: 'from-red-500 to-rose-600',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      latestPost: {
        title: 'Connection Lost on Route 1',
        author: 'Newbie92',
        date: '10 mins ago'
      }
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Page Header */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter italic">
            Trainer <span className="text-brand-accent">Forums</span>
          </h2>
          <div className="h-1.5 w-24 bg-brand-accent rounded-full"></div>
        </div>
        <p className="text-gray-400 max-w-2xl text-lg">
          Join the conversation, trade Pokémon, and stay updated with the latest news from the PEvolutions community.
        </p>
      </div>

      {/* Statistics Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Topics', value: '3,981', icon: '📝' },
          { label: 'Total Posts', value: '68,520', icon: '💬' },
          { label: 'Total Members', value: '12,405', icon: '👥' },
          { label: 'Online Now', value: '452', icon: '🌐' }
        ].map((stat, i) => (
          <div key={i} className="glass-card p-4 flex flex-col items-center justify-center text-center gap-1 group hover:scale-105 transition-transform duration-300">
            <span className="text-2xl mb-1">{stat.icon}</span>
            <span className="text-xl font-black text-white tracking-widest">{stat.value}</span>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Categories List */}
      <div className="space-y-4">
        {categories.map((cat) => (
          <div 
            key={cat.id} 
            className="group relative overflow-hidden glass-card hover:border-brand-accent/30 transition-all duration-500 cursor-pointer"
          >
            {/* Hover Background Glow */}
            <div className={`absolute inset-0 bg-gradient-to-r ${cat.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}></div>
            
            <div className="flex flex-col lg:flex-row items-stretch min-h-[100px]">
              {/* Category Icon & Info */}
              <div className="flex-1 p-6 flex items-start gap-6">
                <div className={`shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  {cat.icon}
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-accent transition-colors">{cat.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed max-w-xl">{cat.description}</p>
                </div>
              </div>

              {/* Stats Columns */}
              <div className="hidden lg:flex items-center px-8 border-x border-white/5 bg-white/[0.02]">
                <div className="flex gap-8">
                  <div className="flex flex-col items-center min-w-[70px]">
                    <span className="text-lg font-black text-white">{cat.topics}</span>
                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Topics</span>
                  </div>
                  <div className="flex flex-col items-center min-w-[70px]">
                    <span className="text-lg font-black text-white">{cat.posts > 1000 ? `${(cat.posts/1000).toFixed(1)}k` : cat.posts}</span>
                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Posts</span>
                  </div>
                </div>
              </div>

              {/* Latest Post Section */}
              <div className="lg:w-72 p-6 flex flex-col justify-center bg-white/[0.01]">
                {cat.latestPost ? (
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-black text-brand-accent uppercase tracking-widest">Latest Activity</span>
                    <span className="text-sm font-bold text-gray-200 line-clamp-1 group-hover:text-white transition-colors">{cat.latestPost.title}</span>
                    <div className="flex items-center gap-2 text-[11px] text-gray-500">
                      <span>by <span className="text-gray-300 font-bold">{cat.latestPost.author}</span></span>
                      <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
                      <span>{cat.latestPost.date}</span>
                    </div>
                  </div>
                ) : (
                  <span className="text-xs text-gray-600 italic">No posts yet</span>
                )}
              </div>
            </div>

            {/* Accent Line */}
            <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${cat.color} opacity-40 group-hover:opacity-100 transition-opacity`}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forum;
