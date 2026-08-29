import React from 'react';
import { Link2, WifiOff, Mail, HeartHandshake, BookOpen, Sparkles } from 'lucide-react';

interface MissionSectionProps {
  onContact: () => void;
}

export const MissionSection: React.FC<MissionSectionProps> = ({ onContact }) => {
  return (
    <section
      id="mission"
      className="bg-[#FBF9F6] py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 space-y-4">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#00A896]">
            OUR MISSION
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.25rem] font-semibold text-[#1D564B] tracking-tight">
            A chain unbroken
          </h2>
          <p className="text-base sm:text-lg text-[#1D564B]/85 font-normal leading-relaxed">
            <span className="font-semibold italic text-[#00A896]">Silsilah</span> means an unbroken chain—the link between family, teacher, and madrasah. We build tools to strengthen this connection, so teachers can focus on teaching.
          </p>
        </div>

        {/* 3-Column Block */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Column 1: Deep Tradition, Modern Tech */}
          <div
            id="mission-col-1"
            className="bg-white border border-[#E1DCD6] rounded-2xl p-8 sm:p-10 flex flex-col justify-between shadow-xs hover:border-[#00A896] transition-colors"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#EBF7EE] border border-[#C3EBD0] text-[#1D564B] flex items-center justify-center mb-6">
                <BookOpen size={24} />
              </div>
              <h3 className="text-xl font-semibold text-[#1D564B] mb-3">
                Deep Tradition, Modern Tech
              </h3>
              <p className="text-sm text-[#1D564B]/75 leading-relaxed">
                Designed by developers who have run Maktabs, bridging classic Islamic supplementary school dynamics with streamlined web workflows.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#E1DCD6]/60 text-xs font-medium text-[#00A896] flex items-center gap-1.5">
              <Sparkles size={13} /> Built specifically for Maktabs
            </div>
          </div>

          {/* Column 2: Low Connectivity Friendly */}
          <div
            id="mission-col-2"
            className="bg-white border border-[#E1DCD6] rounded-2xl p-8 sm:p-10 flex flex-col justify-between shadow-xs hover:border-[#00A896] transition-colors"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#EBF7EE] border border-[#C3EBD0] text-[#1D564B] flex items-center justify-center mb-6">
                <WifiOff size={24} />
              </div>
              <h3 className="text-xl font-semibold text-[#1D564B] mb-3">
                Low Connectivity Friendly
              </h3>
              <p className="text-sm text-[#1D564B]/75 leading-relaxed">
                Highly optimized client-side code that works gracefully on weak mobile cellular connections or older parent devices.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#E1DCD6]/60 text-xs font-medium text-[#00A896] flex items-center gap-1.5">
              <Link2 size={13} /> Lightweight &amp; fast loading
            </div>
          </div>

          {/* Column 3: Get in Touch */}
          <div
            id="mission-col-3"
            className="bg-white border border-[#E1DCD6] rounded-2xl p-8 sm:p-10 flex flex-col justify-between shadow-xs hover:border-[#00A896] transition-colors"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#EBF7EE] border border-[#C3EBD0] text-[#1D564B] flex items-center justify-center mb-6">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-semibold text-[#1D564B] mb-3">
                Get in Touch
              </h3>
              <p className="text-sm text-[#1D564B]/75 leading-relaxed">
                Dedicated support desk for setup, spreadsheet data migration, and onboarding. Reach out directly at{' '}
                <a
                  href="mailto:hello@silsila.app"
                  className="text-[#00A896] font-semibold hover:underline"
                >
                  hello@silsila.app
                </a>
                .
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#E1DCD6]/60">
              <button
                onClick={onContact}
                className="text-xs font-semibold text-[#1D564B] hover:text-[#00A896] flex items-center gap-1 cursor-pointer"
              >
                <span>Request migration help</span> →
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
