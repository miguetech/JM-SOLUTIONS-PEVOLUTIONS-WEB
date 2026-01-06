import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setCurrentPath(window.location.pathname);
    setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');

    const handleNavigation = () => {
      setCurrentPath(window.location.pathname);
      setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    };

    document.addEventListener('astro:after-navigation', handleNavigation);
    return () => document.removeEventListener('astro:after-navigation', handleNavigation);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Downloads', href: '/downloads' },
    { name: 'Forum', href: '/forum' },
    { name: 'Community', href: '/community' },
    { name: isLoggedIn ? 'Dashboard' : 'Login', href: isLoggedIn ? '/account' : '/login' },
  ];

  const getLinkClasses = (href: string) => {
    const isActive = currentPath === href || (href !== '/' && currentPath.startsWith(href));
    return `nav-link font-medium ${isActive ? 'border-b-2 border-brand-accent pb-1' : ''}`;
  };

  const getMobileLinkClasses = (href: string) => {
    const isActive = currentPath === href || (href !== '/' && currentPath.startsWith(href));
    return `block nav-link text-lg font-medium ${isActive ? 'text-brand-accent' : ''}`;
  };

  return (
    <nav className="sticky top-0 z-50 w-full px-6 py-4 bg-brand-bg/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          {/* Mobile Logo: PE Pokeball */}
          <div className="md:hidden pokeball-container">
            <div className="pokeball-center-line"></div>
            <div className="pokeball-button"></div>
            <span className="pokeball-initials">PE</span>
          </div>
          
          {/* Desktop Logo: Uploaded Image */}
          <a href="/" className="flex items-center gap-2">
            <img 
              src="/images/logo.png" 
              alt="PEvolutions Logo" 
              className="h-10 w-auto hidden md:block"
            />
            {/* Mobile Fallback text if logo doesn't fit or alongside icon */}
            <span className="text-xl font-bold tracking-tighter text-white md:hidden">
              PE<span className="text-brand-accent">volutions</span>
            </span>
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={getLinkClasses(link.href)}>
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Actions (Search & Mobile Toggle) */}
        <div className="flex items-center gap-4">
          {/* Search - Hidden on Small Mobile */}
          <div className="relative group hidden sm:block">
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-brand-bg border border-white/10 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-brand-accent transition-colors lg:w-64 w-40"
            />
            <svg 
              className="absolute left-3 top-2.5 w-4 h-4 text-gray-400 group-focus-within:text-brand-accent transition-colors" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-bg/95 backdrop-blur-lg border-b border-white/5 py-4 px-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={getMobileLinkClasses(link.href)}>
              {link.name}
            </a>
          ))}
          
          {/* Mobile Search - Only visible on tiny screens where hidden from top */}
          <div className="sm:hidden relative pt-4 border-t border-white/5">
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full bg-brand-bg border border-white/10 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-brand-accent transition-colors"
            />
            <svg 
              className="absolute left-3 bottom-2.5 w-4 h-4 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
