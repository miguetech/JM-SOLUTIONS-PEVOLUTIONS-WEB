import React from 'react';

interface AuthFormProps {
  type: 'login' | 'register';
}

export const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const isLogin = type === 'login';

  return (
    <div className="glass-card p-8 w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">
        {isLogin ? 'Welcome Back!' : 'Create an Account'}
      </h2>
      
      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">Username</label>
          <input 
            type="text" 
            placeholder="Enter your username"
            className="w-full bg-brand-bg/50 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-brand-accent/50 transition-colors"
          />
        </div>

        {!isLogin && (
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Email Address</label>
            <input 
              type="email" 
              placeholder="example@email.com"
              className="w-full bg-brand-bg/50 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-brand-accent/50 transition-colors"
            />
          </div>
        )}

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">Password</label>
          <input 
            type="password" 
            placeholder="••••••••"
            className="w-full bg-brand-bg/50 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-brand-accent/50 transition-colors"
          />
        </div>

        {!isLogin && (
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Confirm Password</label>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full bg-brand-bg/50 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-brand-accent/50 transition-colors"
            />
          </div>
        )}

        {isLogin && (
          <div className="flex justify-end">
            <a href="#" className="text-xs text-brand-accent hover:underline">Forgot password?</a>
          </div>
        )}

        <button className="w-full btn-primary py-3 flex items-center justify-center gap-2">
          <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
          </svg>
        </button>
      </form>

      <div className="mt-8 pt-6 border-t border-white/5 text-center">
        <p className="text-sm text-gray-400">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <a href={isLogin ? "/register" : "/login"} className="text-brand-accent hover:underline font-medium">
            {isLogin ? 'Sign up now' : 'Log in here'}
          </a>
        </p>
      </div>
    </div>
  );
};
