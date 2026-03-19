import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon, DumbbellIcon } from 'lucide-react';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
  {
    name: 'Home',
    href: '#home'
  },
  {
    name: 'About',
    href: '#about'
  },
  {
    name: 'Services',
    href: '#services'
  },
  {
    name: 'Plans',
    href: '#plans'
  },
  {
    name: 'Trainers',
    href: '#trainers'
  },
  {
    name: 'Contact',
    href: '#contact'
  }];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-neutral-950/95 backdrop-blur-md py-4 shadow-lg shadow-black/50' : 'bg-transparent py-6'}`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <DumbbellIcon className="w-8 h-8 text-orange-500 transition-transform group-hover:rotate-12" />
            <span className="font-black text-2xl tracking-tighter uppercase text-white">
              Forge<span className="text-orange-500">Fitness</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold uppercase tracking-wider text-neutral-300 hover:text-orange-500 transition-colors">
              
                {link.name}
              </a>
            )}
            <a
              href="#plans"
              className="bg-orange-600 hover:bg-orange-500 text-white px-6 py-2.5 rounded-full font-bold uppercase tracking-wide text-sm transition-colors">
              
              Join Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-neutral-300 hover:text-white p-2"
              aria-label="Toggle menu">
              
              {isMobileMenuOpen ?
              <XIcon className="w-6 h-6" /> :

              <MenuIcon className="w-6 h-6" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen &&
      <div className="md:hidden absolute top-full left-0 w-full bg-neutral-950 border-t border-neutral-900 shadow-2xl">
          <div className="flex flex-col px-4 py-6 gap-4">
            {navLinks.map((link) =>
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-lg font-bold uppercase tracking-wider text-neutral-300 hover:text-orange-500 transition-colors py-2">
            
                {link.name}
              </a>
          )}
            <a
            href="#plans"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-orange-600 text-white text-center px-6 py-3 rounded-lg font-bold uppercase tracking-wide mt-4">
            
              Join Now
            </a>
          </div>
        </div>
      }
    </nav>);

}