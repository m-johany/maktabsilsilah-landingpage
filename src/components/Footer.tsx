import React from 'react';

interface FooterProps {
  onOpenDemo: () => void;
  onOpenPortal: (role: 'parent' | 'staff') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDemo, onOpenPortal }) => {
  return (
    <footer
      id="footer"
      className="bg-[#FBF9F6] border-t border-[#E1DCD6] py-14 text-[#1D564B]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#E1DCD6]/70 items-start">
          
          {/* Left Column: Brand */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-baseline gap-1.5">
              <span className="font-semibold text-[#1D564B] text-2xl tracking-tight">
                Silsila
              </span>
              <span className="text-xs font-semibold text-[#00A896]">
                by Sylergy
              </span>
            </div>
            <p className="text-sm text-[#1D564B]/75 max-w-sm leading-relaxed">
              Modern supplementary school administration, made simple. Designed to keep families, teachers, and madrasahs in harmony.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 text-xs font-medium">
            <div className="space-y-2.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#1D564B]/50 block">
                Platform
              </span>
              <a href="#product" className="block hover:text-[#00A896] transition-colors">
                Attendance Register
              </a>
              <a href="#interactive-showcase" className="block hover:text-[#00A896] transition-colors">
                Fee &amp; Invoice Pay Desk
              </a>
              <a href="#pricing" className="block hover:text-[#00A896] transition-colors">
                Transparent Pricing
              </a>
            </div>

            <div className="space-y-2.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#1D564B]/50 block">
                Portals
              </span>
              <button
                onClick={() => onOpenPortal('staff')}
                className="block text-left hover:text-[#00A896] transition-colors cursor-pointer"
              >
                Staff Login
              </button>
              <button
                onClick={() => onOpenPortal('parent')}
                className="block text-left hover:text-[#00A896] transition-colors cursor-pointer"
              >
                Parent Magic Link
              </button>
              <button
                onClick={onOpenDemo}
                className="block text-left text-[#00A896] font-semibold hover:underline cursor-pointer"
              >
                Register Madrasah
              </button>
            </div>
          </div>

          {/* Contact / Help */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#1D564B]/50 block">
              Support
            </span>
            <p className="text-[#1D564B]/75">
              Need assistance setting up your school?
            </p>
            <a
              href="mailto:hello@silsila.app"
              className="inline-block font-semibold text-[#00A896] hover:underline"
            >
              hello@silsila.app
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#1D564B]/70">
          <div>
            Built with <span className="text-[#00A896]">💚</span> by Sylergy. &copy; 2026 Silsila. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <span className="hover:text-[#00A896] transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-[#00A896] transition-colors cursor-pointer">
              Terms of Service
            </span>
            <span className="hover:text-[#00A896] transition-colors cursor-pointer">
              GDPR Compliance
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
