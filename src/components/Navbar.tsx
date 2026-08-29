import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenDemo: (prefilledPlan?: string) => void;
  onOpenPortal: (role: 'parent' | 'staff') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo, onOpenPortal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="navbar"
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-[#FBF9F6]/90 backdrop-blur-md border-b border-[#E1DCD6] shadow-xs'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo (Left) */}
          <a
            href="#"
            id="brand-logo-link"
            className="flex items-baseline gap-1.5 text-decoration-none group"
          >
            <span className="font-semibold text-[#1D564B] text-2xl tracking-tight">
              Silsila
            </span>
            <span className="text-xs font-semibold text-[#00A896] tracking-wide">
              by Sylergy
            </span>
          </a>

          {/* Nav Links (Center) - Desktop */}
          <nav
            id="desktop-nav-links"
            className="hidden md:flex items-center space-x-1 lg:space-x-3 text-sm font-medium text-[#1D564B]/85"
          >
            <a
              href="#product"
              id="nav-link-product"
              className="px-3 py-2 rounded-lg hover:text-[#00A896] hover:bg-[#EEEAE5]/60 transition-colors"
            >
              Product
            </a>
            <a
              href="#use-cases"
              id="nav-link-use-cases"
              className="px-3 py-2 rounded-lg hover:text-[#00A896] hover:bg-[#EEEAE5]/60 transition-colors"
            >
              Use Cases
            </a>
            <a
              href="#pricing"
              id="nav-link-pricing"
              className="px-3 py-2 rounded-lg hover:text-[#00A896] hover:bg-[#EEEAE5]/60 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#mission"
              id="nav-link-about"
              className="px-3 py-2 rounded-lg hover:text-[#00A896] hover:bg-[#EEEAE5]/60 transition-colors"
            >
              About
            </a>

            <div className="h-4 w-px bg-[#E1DCD6] mx-1" />

            <button
              id="nav-btn-staff-login"
              onClick={() => onOpenPortal('staff')}
              className="px-3 py-2 rounded-lg text-[#1D564B] hover:text-[#00A896] hover:bg-[#EEEAE5]/60 transition-colors text-sm font-medium cursor-pointer"
            >
              Staff Login
            </button>
            <button
              id="nav-btn-parent-login"
              onClick={() => onOpenPortal('parent')}
              className="px-3 py-2 rounded-lg text-[#1D564B] hover:text-[#00A896] hover:bg-[#EEEAE5]/60 transition-colors text-sm font-medium cursor-pointer"
            >
              Parent Login
            </button>
          </nav>

          {/* CTA & Actions (Right) */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              id="nav-btn-register-school"
              onClick={() => onOpenDemo('register')}
              className="hidden lg:inline-flex text-sm font-medium text-[#1D564B] hover:text-[#00A896] px-3 py-2 transition-colors cursor-pointer"
            >
              Register school
            </button>
            <button
              id="nav-cta-book-demo"
              onClick={() => onOpenDemo()}
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-semibold bg-[#00A896] text-white hover:bg-[#009383] shadow-xs active:scale-[0.98] transition-all cursor-pointer"
            >
              Book a 15-min demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#1D564B] hover:bg-[#EEEAE5] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-dropdown"
          className="md:hidden bg-[#FBF9F6] border-b border-[#E1DCD6] px-4 pt-2 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2"
        >
          <a
            href="#product"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-md text-base font-medium text-[#1D564B] hover:bg-[#EEEAE5]"
          >
            Product
          </a>
          <a
            href="#use-cases"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-md text-base font-medium text-[#1D564B] hover:bg-[#EEEAE5]"
          >
            Use Cases
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-md text-base font-medium text-[#1D564B] hover:bg-[#EEEAE5]"
          >
            Pricing
          </a>
          <a
            href="#mission"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-md text-base font-medium text-[#1D564B] hover:bg-[#EEEAE5]"
          >
            About
          </a>

          <div className="pt-2 border-t border-[#E1DCD6] space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPortal('staff');
              }}
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-[#1D564B] hover:bg-[#EEEAE5]"
            >
              Staff Login
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPortal('parent');
              }}
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-[#1D564B] hover:bg-[#EEEAE5]"
            >
              Parent Login
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo('register');
              }}
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-[#00A896] hover:bg-[#EEEAE5]"
            >
              Register school
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full mt-2 py-3 rounded-lg text-center font-semibold bg-[#00A896] text-white hover:bg-[#009383] shadow-xs cursor-pointer"
            >
              Book a 15-min demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
