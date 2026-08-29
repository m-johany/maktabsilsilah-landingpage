import React from 'react';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export const ProblemSolutionSection: React.FC = () => {
  return (
    <section
      id="problem-solution"
      className="bg-[#1D564B] text-white py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Decorative ambient background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00A896]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 space-y-4">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#00A896]">
            WHAT WE SOLVE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.25rem] font-semibold text-white tracking-tight">
            From chaos to calm
          </h2>
          <p className="text-base sm:text-lg text-white/80 font-normal leading-relaxed">
            Madrasah admin shouldn&apos;t feel overwhelming. Silsila replaces fragmented tools with one simple system—one class at a time.
          </p>
        </div>

        {/* Two-Column Grid: Problem vs Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left Column: The Problem */}
          <div
            id="chaos-problem-container"
            className="bg-[#16433a] border border-[#256f61]/40 rounded-2xl p-8 sm:p-10 space-y-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 pb-6 border-b border-[#256f61]/60">
                <div className="w-8 h-8 rounded-full bg-[#FDF2F2] text-[#D9383A] flex items-center justify-center font-bold text-base">
                  ✕
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">The Old Way: Fragmented Chaos</h3>
                  <p className="text-xs text-white/60">Paper, scattered spreadsheets &amp; manual chasing</p>
                </div>
              </div>

              <div className="space-y-6 pt-6">
                
                {/* Item 1 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-[#FDF2F2]/10 border border-[#D9383A]/30 flex items-center justify-center text-[#D9383A]">
                    <span className="text-xs font-bold">❌</span>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-semibold text-white">
                      Information stored across too many apps
                    </h4>
                    <p className="text-sm text-white/75 leading-relaxed">
                      Paper registers, personal WhatsApp threads, and fragile spreadsheets make tracking a heavy chore.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-[#FDF2F2]/10 border border-[#D9383A]/30 flex items-center justify-center text-[#D9383A]">
                    <span className="text-xs font-bold">❌</span>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-semibold text-white">
                      Fee-chasing is a constant chore
                    </h4>
                    <p className="text-sm text-white/75 leading-relaxed">
                      Unclear balances, missed payment deadlines, and awkward, repeating face-to-face follow-up conversations.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-[#FDF2F2]/10 border border-[#D9383A]/30 flex items-center justify-center text-[#D9383A]">
                    <span className="text-xs font-bold">❌</span>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-semibold text-white">
                      Parent communication feels chaotic
                    </h4>
                    <p className="text-sm text-white/75 leading-relaxed">
                      Crucial school updates get lost in endless community group chats; parents are left in the dark about attendance and pending invoices.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="pt-4 border-t border-[#256f61]/40 text-xs text-white/50 flex items-center justify-between">
              <span>Average admin cost: 8–12 hrs/week</span>
              <span className="text-[#D9383A] font-medium">High friction</span>
            </div>
          </div>

          {/* Right Column: Silsila's Approach */}
          <div
            id="calm-solution-container"
            className="bg-[#123730] border-2 border-[#00A896]/60 rounded-2xl p-8 sm:p-10 space-y-8 shadow-2xl relative flex flex-col justify-between"
          >
            {/* Highlight ribbon */}
            <div className="absolute -top-3.5 right-6 bg-[#00A896] text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
              Silsila Standard
            </div>

            <div>
              <div className="flex items-center gap-3 pb-6 border-b border-[#256f61]/60">
                <div className="w-8 h-8 rounded-full bg-[#EBF7EE] text-[#1E562A] flex items-center justify-center font-bold text-base">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">The Silsila Way: Quiet Clarity</h3>
                  <p className="text-xs text-[#00A896]">One web portal, automated reminders &amp; peace of mind</p>
                </div>
              </div>

              <div className="space-y-6 pt-6">
                
                {/* Item 1 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-[#EBF7EE]/20 border border-[#00A896]/40 flex items-center justify-center text-[#00A896]">
                    <CheckCircle2 size={16} className="text-[#00A896]" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-semibold text-white">
                      One unified, cloud-based platform
                    </h4>
                    <p className="text-sm text-white/85 leading-relaxed">
                      A single, beautiful web application accessible securely from any device, anytime.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-[#EBF7EE]/20 border border-[#00A896]/40 flex items-center justify-center text-[#00A896]">
                    <CheckCircle2 size={16} className="text-[#00A896]" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-semibold text-white">
                      Clear invoices and easy payments
                    </h4>
                    <p className="text-sm text-white/85 leading-relaxed">
                      Automated WhatsApp and SMS payment links with instant, elegant receipt generation.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-[#EBF7EE]/20 border border-[#00A896]/40 flex items-center justify-center text-[#00A896]">
                    <CheckCircle2 size={16} className="text-[#00A896]" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-semibold text-white">
                      A modern web portal for families
                    </h4>
                    <p className="text-sm text-white/85 leading-relaxed">
                      Parents log in with passwordless magic links to view historical attendance records, upcoming schedules, and invoices.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="pt-4 border-t border-[#256f61]/60 text-xs text-[#00A896] flex items-center justify-between font-medium">
              <span>Admin time saved: 70%+</span>
              <span>100% cloud secure</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
