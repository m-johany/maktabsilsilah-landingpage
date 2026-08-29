import React from 'react';
import { Quote, TrendingDown, Clock, ShieldCheck, Award, ThumbsUp } from 'lucide-react';

export const MetricsSection: React.FC = () => {
  const testimonials = [
    {
      id: 'pilot-1',
      quote:
        'The attendance register is so quick now. It takes us under a minute to check in all the students.',
      author: 'Teacher, Year 3',
      role: 'Primary Maktab Instructor',
      tag: 'Speed & Simplicity',
    },
    {
      id: 'pilot-2',
      quote:
        'Prior to this, we spent hours chasing invoices manually. The WhatsApp links make paying effortless for parents.',
      author: 'Administrator',
      role: 'Al-Kauthar Academy',
      tag: 'Fee Collection',
    },
    {
      id: 'pilot-3',
      quote:
        'I love being able to see everything on the portal—attendance, schedules, and my invoices. No more mystery.',
      author: 'Parent, Year 1 Pupil',
      role: 'Supplementary School Family',
      tag: 'Parent Experience',
    },
  ];

  return (
    <section
      id="metrics"
      className="bg-[#FBF9F6] py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#00A896]">
            EARLY RESULTS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.25rem] font-semibold text-[#1D564B] tracking-tight">
            Fee chasing, cut by 70%
          </h2>
          <p className="text-base sm:text-lg text-[#1D564B]/80 font-normal leading-relaxed">
            Early pilots show a significant drop in administrative hours and immediate boosts to fee collection compliance.
          </p>
        </div>

        {/* Quantitative Highlights Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          <div className="bg-white p-6 rounded-2xl border border-[#E1DCD6] text-center space-y-2">
            <div className="text-3xl sm:text-4xl font-bold text-[#00A896]">70%</div>
            <div className="text-xs sm:text-sm font-medium text-[#1D564B]">Less Admin Chasing</div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-[#E1DCD6] text-center space-y-2">
            <div className="text-3xl sm:text-4xl font-bold text-[#1D564B]">&lt;60s</div>
            <div className="text-xs sm:text-sm font-medium text-[#1D564B]">Daily Register Time</div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-[#E1DCD6] text-center space-y-2">
            <div className="text-3xl sm:text-4xl font-bold text-[#00A896]">98%</div>
            <div className="text-xs sm:text-sm font-medium text-[#1D564B]">On-Time Fee Settlement</div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-[#E1DCD6] text-center space-y-2">
            <div className="text-3xl sm:text-4xl font-bold text-[#1D564B]">0</div>
            <div className="text-xs sm:text-sm font-medium text-[#1D564B]">Lost Paper Sheets</div>
          </div>
        </div>

        {/* Grid of Supporting Pilot Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={t.id}
              id={`pilot-testimonial-${idx + 1}`}
              className="bg-white border border-[#E1DCD6] rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Quote className="text-[#00A896]/30" size={28} />
                  <span className="text-[11px] font-semibold text-[#00A896] bg-[#EBF7EE] border border-[#C3EBD0] px-2.5 py-0.5 rounded-full">
                    {t.tag}
                  </span>
                </div>
                <p className="text-base text-[#1D564B] leading-relaxed italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#E1DCD6]/70">
                <div className="font-semibold text-sm text-[#1D564B]">
                  {t.author}
                </div>
                <div className="text-xs text-[#1D564B]/70">
                  {t.role}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
