import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, PhoneCall } from 'lucide-react';

interface FinalCtaSectionProps {
  onOpenDemo: () => void;
  onContactOnboarding: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({
  onOpenDemo,
  onContactOnboarding,
}) => {
  return (
    <section
      id="cta-banner"
      className="bg-[#1D564B] text-white py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Subtle radial decorative background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#00A896_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00A896]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00A896]/20 border border-[#00A896]/40 text-[#00A896] text-xs font-semibold">
          <Sparkles size={14} />
          <span>START YOUR CALMER TERM TODAY</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-semibold text-white tracking-tight leading-tight">
          Ready to reduce the chasing?
        </h2>

        <p className="text-base sm:text-xl text-white/80 max-w-2xl mx-auto font-normal leading-relaxed">
          Join other madrasahs who are freeing up time, improving family communication, and securing fees.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            id="banner-cta-book-demo"
            onClick={onOpenDemo}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold bg-[#00A896] text-white hover:bg-[#009383] shadow-lg hover:shadow-xl active:scale-[0.98] transition-all cursor-pointer"
          >
            Book a 15-min demo
          </button>

          <button
            id="banner-cta-contact-onboarding"
            onClick={onContactOnboarding}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold border-[1.5px] border-white/60 text-white hover:bg-white/10 active:scale-[0.98] transition-all cursor-pointer"
          >
            <PhoneCall size={18} />
            <span>Contact Onboarding</span>
          </button>
        </div>

        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-white/65">
          <span className="flex items-center gap-1.5">
            <ShieldCheck size={14} className="text-[#00A896]" /> Setup completed in under 48 hours
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck size={14} className="text-[#00A896]" /> Free Excel / Spreadsheet import
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck size={14} className="text-[#00A896]" /> Cancel anytime without fees
          </span>
        </div>

      </div>
    </section>
  );
};
