import React from 'react';
import { Quote, Star, CheckCircle2 } from 'lucide-react';

export const SocialProofSection: React.FC = () => {
  return (
    <section
      id="use-cases"
      className="bg-[#EEEAE5] py-16 md:py-20 border-y border-[#E1DCD6]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#00A896] mb-2">
            <Star size={13} className="fill-[#00A896]" />
            TRUSTED BY SUPPLEMENTARY SCHOOL LEADERS
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1D564B]">
            Built with teachers, treasurers &amp; parents in mind
          </h2>
        </div>

        {/* 2 Prominent Side-by-Side Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1 */}
          <div
            id="testimonial-card-1"
            className="bg-white border border-[#E1DCD6] rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
          >
            <div className="mb-6">
              <Quote className="text-[#00A896]/30 mb-4" size={36} />
              <blockquote className="text-lg sm:text-xl font-normal text-[#1D564B] leading-relaxed italic">
                &ldquo;Virtually, a system that understands how madrasahs actually work. The WhatsApp integration is a superb change for parent communication!&rdquo;
              </blockquote>
            </div>

            <div className="pt-6 border-t border-[#E1DCD6] flex items-center justify-between">
              <div>
                <div className="font-semibold text-base text-[#1D564B]">
                  Ustadh Bilal Vance
                </div>
                <div className="text-sm text-[#1D564B]/70">
                  Head Teacher, <span className="text-[#1D564B] font-medium">Madrasah Al-Ansar</span>
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs font-medium text-[#1E562A] bg-[#EBF7EE] border border-[#C3EBD0] px-2.5 py-1 rounded-full">
                <CheckCircle2 size={12} />
                Verified Maktab
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            id="testimonial-card-2"
            className="bg-white border border-[#E1DCD6] rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
          >
            <div className="mb-6">
              <Quote className="text-[#00A896]/30 mb-4" size={36} />
              <blockquote className="text-lg sm:text-xl font-normal text-[#1D564B] leading-relaxed italic">
                &ldquo;We recovered our fee-chasing time significantly. Parents can give their details and look up invoices through the portal seamlessly.&rdquo;
              </blockquote>
            </div>

            <div className="pt-6 border-t border-[#E1DCD6] flex items-center justify-between">
              <div>
                <div className="font-semibold text-base text-[#1D564B]">
                  Fihan Rahman
                </div>
                <div className="text-sm text-[#1D564B]/70">
                  Madrasah Treasurer
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs font-medium text-[#1E562A] bg-[#EBF7EE] border border-[#C3EBD0] px-2.5 py-1 rounded-full">
                <CheckCircle2 size={12} />
                Verified Maktab
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
