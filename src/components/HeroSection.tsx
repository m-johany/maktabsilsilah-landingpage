import React, { useState } from 'react';
import {
  Check,
  ArrowRight,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertCircle,
  Users,
  CreditCard,
  Calendar,
  MessageSquare,
  Sparkles,
  Send
} from 'lucide-react';

interface HeroSectionProps {
  onOpenDemo: () => void;
  onOpenParentPortal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenDemo,
  onOpenParentPortal,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'fees' | 'attendance'>('all');
  const [whatsappSent, setWhatsappSent] = useState<string | null>(null);

  const handleSendReminder = (id: string, name: string) => {
    setWhatsappSent(name);
    setTimeout(() => setWhatsappSent(null), 3000);
  };

  return (
    <section
      id="product"
      className="relative pt-6 pb-20 md:py-24 lg:py-28 overflow-hidden"
    >
      {/* Subtle background ambient decor */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#00A896]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#1D564B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column (Text & Action) */}
          <div className="lg:col-span-6 space-y-8">
            {/* Category Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF7EE] border border-[#C3EBD0]">
              <span className="w-2 h-2 rounded-full bg-[#00A896] animate-pulse" />
              <span className="text-xs font-bold tracking-wider text-[#00A896] uppercase">
                FOR MADRASAHS &amp; MAKTABS
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold text-[#1D564B] leading-[1.15] tracking-tight">
              Attendance and fees, finally under control.
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-[#1D564B]/80 font-normal leading-relaxed max-w-xl">
              Reduce admin time, collect fees faster, and give every family a reliable portal—budget gently by WhatsApp.
            </p>

            {/* Inline Bullet List */}
            <ul className="space-y-3.5 pt-1 text-base text-[#1D564B]/90">
              <li className="flex items-center gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#EBF7EE] border border-[#C3EBD0] flex items-center justify-center text-[#1E562A]">
                  <Check size={13} strokeWidth={3} />
                </span>
                <span>Proofing registry in minutes, not hours</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#EBF7EE] border border-[#C3EBD0] flex items-center justify-center text-[#1E562A]">
                  <Check size={13} strokeWidth={3} />
                </span>
                <span>Verifiably faster with fewer follow-ups</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#EBF7EE] border border-[#C3EBD0] flex items-center justify-center text-[#1E562A]">
                  <Check size={13} strokeWidth={3} />
                </span>
                <span>Partners with standard WhatsApp and emails</span>
              </li>
            </ul>

            {/* CTA Block */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                id="hero-cta-book-demo"
                onClick={onOpenDemo}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-base font-semibold bg-[#00A896] text-white hover:bg-[#009383] shadow-md hover:shadow-lg active:scale-[0.98] transition-all cursor-pointer text-center"
              >
                Book a 15-min demo
              </button>

              <button
                id="hero-cta-see-parent-portal"
                onClick={onOpenParentPortal}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-medium text-[#1D564B] hover:bg-[#EEEAE5]/80 transition-colors group cursor-pointer"
              >
                <span>See the parent portal</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-[#00A896]" />
              </button>
            </div>

            {/* Micro reassurance label */}
            <div className="flex items-center gap-4 text-xs text-[#1D564B]/70 pt-2">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-[#00A896]" /> No lock-in contracts
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-[#00A896]" /> Free data onboarding
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-[#00A896]" /> UK &amp; Global support
              </span>
            </div>
          </div>

          {/* Right Column (Interactive Dashboard Preview) */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Decorative back badge */}
              <div className="absolute -top-3 -right-3 sm:right-6 bg-[#1D564B] text-white text-xs font-medium px-3 py-1 rounded-full shadow-sm z-20 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00A896] animate-ping" />
                Live Maktab Sync
              </div>

              {/* Main Container Card */}
              <div
                id="hero-mockup-dashboard"
                className="bg-white border border-[#E1DCD6] rounded-2xl shadow-xl overflow-hidden transition-all duration-300"
              >
                {/* Dashboard Header Bar */}
                <div className="px-5 py-4 bg-[#FBF9F6] border-b border-[#E1DCD6] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-[#00A896]" />
                    <span className="text-sm font-semibold text-[#1D564B]">
                      Dashboard — Monday, 11 Nov 2024
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center text-xs font-semibold px-2 py-0.5 rounded-full bg-[#EBF7EE] text-[#1E562A] border border-[#C3EBD0]">
                      Active Term 1
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6 space-y-6">
                  {/* Stats Row */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    
                    {/* Stat 1: Attendance Rate */}
                    <div className="p-3 bg-[#FBF9F6] rounded-xl border border-[#E1DCD6]/80 flex flex-col justify-between">
                      <span className="text-xs font-medium text-[#1D564B]/70">Attendance</span>
                      <div className="flex items-baseline justify-between mt-1">
                        <span className="text-xl font-bold text-[#1D564B]">94%</span>
                        <span className="inline-flex items-center text-[11px] font-semibold text-[#1E562A] bg-[#EBF7EE] px-1.5 py-0.5 rounded">
                          <TrendingUp size={11} className="mr-0.5" /> +2%
                        </span>
                      </div>
                    </div>

                    {/* Stat 2: Fees Collected */}
                    <div className="p-3 bg-[#FBF9F6] rounded-xl border border-[#E1DCD6]/80 flex flex-col justify-between">
                      <span className="text-xs font-medium text-[#1D564B]/70">Fees Collected</span>
                      <div>
                        <span className="text-xl font-bold text-[#1D564B]">£6,280</span>
                        <div className="w-full bg-[#E1DCD6] h-1.5 rounded-full mt-1.5 overflow-hidden">
                          <div className="bg-[#00A896] h-1.5 rounded-full w-[85%]" />
                        </div>
                      </div>
                    </div>

                    {/* Stat 3: Unpaid Invoices */}
                    <div className="p-3 bg-[#FDF2F2] rounded-xl border border-[#FAD2D2] flex flex-col justify-between">
                      <span className="text-xs font-medium text-[#9C2A2B]">Unpaid Invoices</span>
                      <div className="flex items-baseline justify-between mt-1">
                        <span className="text-xl font-bold text-[#D9383A]">£410</span>
                        <span className="text-[10px] font-semibold text-[#9C2A2B] uppercase">3 left</span>
                      </div>
                    </div>

                    {/* Stat 4: Total Pupils */}
                    <div className="p-3 bg-[#FBF9F6] rounded-xl border border-[#E1DCD6]/80 flex flex-col justify-between">
                      <span className="text-xs font-medium text-[#1D564B]/70">Total Pupils</span>
                      <div className="flex items-baseline justify-between mt-1">
                        <span className="text-xl font-bold text-[#1D564B]">121</span>
                        <Users size={14} className="text-[#1D564B]/60" />
                      </div>
                    </div>

                  </div>

                  {/* WhatsApp Quick Action Alert Banner */}
                  {whatsappSent && (
                    <div className="p-3 bg-[#EBF7EE] border border-[#C3EBD0] rounded-xl flex items-center justify-between text-xs text-[#1E562A] animate-in fade-in">
                      <span className="flex items-center gap-1.5 font-medium">
                        <CheckCircle2 size={15} /> WhatsApp payment reminder dispatched to {whatsappSent}
                      </span>
                      <span className="text-[11px] opacity-75">Delivered</span>
                    </div>
                  )}

                  {/* Recent Activity Section */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1D564B]/75 flex items-center gap-1.5">
                        <Clock size={13} />
                        Recent Live Activity
                      </h4>
                      <span className="text-[11px] text-[#00A896] font-medium">
                        Auto-syncing
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      {/* Activity 1 */}
                      <div className="p-2.5 bg-[#FBF9F6] hover:bg-[#EEEAE5]/50 rounded-xl border border-[#E1DCD6]/60 flex items-center justify-between transition-colors">
                        <div className="flex items-center gap-2.5">
                          <span className="w-7 h-7 rounded-full bg-[#EBF7EE] text-[#1E562A] flex items-center justify-center font-bold text-xs">
                            P
                          </span>
                          <div>
                            <p className="text-xs font-semibold text-[#1D564B]">
                              Zahra Rahman attended <span className="font-normal text-[#1D564B]/70">Year 3 - Qur&apos;an</span>
                            </p>
                            <span className="text-[10px] text-[#1D564B]/60">10 mins ago</span>
                          </div>
                        </div>
                        <span className="text-[11px] font-medium text-[#1E562A] bg-[#EBF7EE] px-2 py-0.5 rounded-full border border-[#C3EBD0]">
                          Present
                        </span>
                      </div>

                      {/* Activity 2 */}
                      <div className="p-2.5 bg-[#FBF9F6] hover:bg-[#EEEAE5]/50 rounded-xl border border-[#E1DCD6]/60 flex items-center justify-between transition-colors">
                        <div className="flex items-center gap-2.5">
                          <span className="w-7 h-7 rounded-full bg-[#FFF8EC] text-[#8A5E1A] flex items-center justify-center font-bold text-xs">
                            L
                          </span>
                          <div>
                            <p className="text-xs font-semibold text-[#1D564B]">
                              Faisal Ahmed marked Late for <span className="font-normal text-[#1D564B]/70">Year 1</span>
                            </p>
                            <span className="text-[10px] text-[#1D564B]/60">24 mins ago</span>
                          </div>
                        </div>
                        <span className="text-[11px] font-medium text-[#8A5E1A] bg-[#FFF8EC] px-2 py-0.5 rounded-full border border-[#FFE3B3]">
                          Late (+12m)
                        </span>
                      </div>

                      {/* Activity 3 */}
                      <div className="p-2.5 bg-[#FBF9F6] hover:bg-[#EEEAE5]/50 rounded-xl border border-[#E1DCD6]/60 flex items-center justify-between transition-colors">
                        <div className="flex items-center gap-2.5">
                          <span className="w-7 h-7 rounded-full bg-[#EBF7EE] text-[#1E562A] flex items-center justify-center font-bold text-xs">
                            £
                          </span>
                          <div>
                            <p className="text-xs font-semibold text-[#1D564B]">
                              Fees paid for Adam Rahman <span className="font-bold text-[#1E562A]">(£45.00)</span>
                            </p>
                            <span className="text-[10px] text-[#1D564B]/60">via WhatsApp Link • 1 hour ago</span>
                          </div>
                        </div>
                        <span className="text-[11px] font-medium text-[#1E562A] bg-[#EBF7EE] px-2 py-0.5 rounded-full border border-[#C3EBD0]">
                          Paid
                        </span>
                      </div>

                      {/* Activity 4 */}
                      <div className="p-2.5 bg-[#FBF9F6] hover:bg-[#EEEAE5]/50 rounded-xl border border-[#E1DCD6]/60 flex items-center justify-between transition-colors">
                        <div className="flex items-center gap-2.5">
                          <span className="w-7 h-7 rounded-full bg-[#1D564B]/10 text-[#1D564B] flex items-center justify-center font-bold text-xs">
                            <Sparkles size={13} />
                          </span>
                          <div>
                            <p className="text-xs font-semibold text-[#1D564B]">
                              Monthly automated invoices generated
                            </p>
                            <span className="text-[10px] text-[#1D564B]/60">121 invoices sent via SMS / WhatsApp</span>
                          </div>
                        </div>
                        <button
                          onClick={() => handleSendReminder('all', 'pending parents')}
                          className="text-[11px] font-semibold text-[#00A896] hover:text-[#009383] bg-white px-2.5 py-1 rounded-md border border-[#E1DCD6] hover:border-[#00A896] transition-all flex items-center gap-1 cursor-pointer"
                        >
                          <Send size={10} /> Chase 3 Unpaid
                        </button>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Dashboard Bottom Status */}
                <div className="px-5 py-3 bg-[#EEEAE5]/40 border-t border-[#E1DCD6] flex items-center justify-between text-xs text-[#1D564B]/75">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#1E562A]" />
                    Register locked by Head Teacher (U. Bilal)
                  </span>
                  <span className="font-semibold text-[#00A896] hover:underline cursor-pointer" onClick={onOpenParentPortal}>
                    Open full register →
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
