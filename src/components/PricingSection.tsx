import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface PricingSectionProps {
  onSelectPlan: (planName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      target: 'For small, newly established weekend schools',
      priceMonthly: 29,
      priceAnnual: 24,
      features: [
        'Up to 50 active students',
        'Daily attendance register',
        'Basic reporting & exports',
        'Standard email support',
        'Cloud backups daily',
      ],
      ctaText: 'Book a 15-min demo →',
      featured: false,
    },
    {
      id: 'standard',
      name: 'Standard',
      badge: 'Most Popular',
      target: 'For growing supplementary schools & maktabs',
      priceMonthly: 49,
      priceAnnual: 39,
      features: [
        'Up to 150 active students',
        'Advanced attendance registry',
        'Automated invoicing & tracking',
        'WhatsApp/SMS direct payment links',
        'Basic family dashboard & portal',
        'Priority email/phone support',
      ],
      ctaText: 'Book a 15-min demo →',
      featured: true,
    },
    {
      id: 'pro',
      name: 'Pro',
      target: 'For large schools and established Madrasah networks',
      priceMonthly: 99,
      priceAnnual: 79,
      features: [
        'Unlimited active students',
        'Everything in Standard',
        'Automated invoice reminders',
        'Multi-site campus support',
        'Custom integrations & CSV imports',
        'Dedicated onboarding account manager',
      ],
      ctaText: 'Book a 15-min demo →',
      featured: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="bg-[#EEEAE5] py-24 lg:py-32 border-y border-[#E1DCD6]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#00A896]">
            PRICING
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.25rem] font-semibold text-[#1D564B] tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="text-base sm:text-lg text-[#1D564B]/80 font-normal leading-relaxed">
            Pick the plan that fits your school. Prices are simple—book a demo and we&apos;ll tailor it for your custom numbers.
          </p>

          {/* Billing toggle */}
          <div className="pt-4 flex items-center justify-center gap-3 text-sm">
            <span className={`font-medium ${billingCycle === 'monthly' ? 'text-[#1D564B]' : 'text-[#1D564B]/60'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className="w-12 h-6 rounded-full bg-[#1D564B] p-0.5 transition-colors relative cursor-pointer"
              aria-label="Toggle billing frequency"
            >
              <div
                className={`w-5 h-5 rounded-full bg-[#00A896] transition-transform ${
                  billingCycle === 'annual' ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`font-medium flex items-center gap-1.5 ${billingCycle === 'annual' ? 'text-[#1D564B]' : 'text-[#1D564B]/60'}`}>
              Annual
              <span className="text-xs bg-[#EBF7EE] text-[#1E562A] border border-[#C3EBD0] px-2 py-0.5 rounded-full font-semibold">
                2 months free
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map(plan => {
            const price = billingCycle === 'monthly' ? plan.priceMonthly : plan.priceAnnual;
            return (
              <div
                key={plan.id}
                id={`pricing-card-${plan.id}`}
                className={`bg-white rounded-2xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-200 ${
                  plan.featured
                    ? 'border-t-4 border-t-[#00A896] border-x border-b border-[#E1DCD6] shadow-xl relative scale-100 lg:-translate-y-2'
                    : 'border border-[#E1DCD6] shadow-sm hover:shadow-md'
                }`}
              >
                {/* Featured Badge */}
                {plan.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#00A896] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-[#1D564B]">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-[#1D564B]/70 mt-1 min-h-[32px]">
                      {plan.target}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-8 pb-6 border-b border-[#E1DCD6]">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-bold text-[#1D564B]">
                        £{price}
                      </span>
                      <span className="text-sm font-normal text-[#1D564B]/70">
                        / month
                      </span>
                    </div>
                    <span className="text-xs text-[#1D564B]/60 mt-1 block">
                      {billingCycle === 'annual' ? 'Billed annually' : 'Billed month-to-month'}
                    </span>
                  </div>

                  {/* Feature List */}
                  <div className="space-y-4 mb-8">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1D564B]/60">
                      What&apos;s included
                    </span>
                    <ul className="space-y-3">
                      {plan.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-[#1D564B]/85">
                          <span className="flex-shrink-0 w-4 h-4 rounded-full bg-[#EBF7EE] text-[#1E562A] flex items-center justify-center text-[10px] font-bold mt-0.5">
                            <Check size={11} strokeWidth={3} />
                          </span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <div>
                  {plan.featured ? (
                    <button
                      id={`pricing-cta-${plan.id}`}
                      onClick={() => onSelectPlan(plan.name)}
                      className="w-full py-3.5 px-6 rounded-xl font-semibold bg-[#00A896] text-white hover:bg-[#009383] shadow-sm transition-all active:scale-[0.98] text-center cursor-pointer"
                    >
                      {plan.ctaText}
                    </button>
                  ) : (
                    <button
                      id={`pricing-cta-${plan.id}`}
                      onClick={() => onSelectPlan(plan.name)}
                      className="w-full py-3.5 px-6 rounded-xl font-semibold border-[1.5px] border-[#1D564B] text-[#1D564B] hover:bg-[#1D564B] hover:text-white transition-all active:scale-[0.98] text-center cursor-pointer"
                    >
                      {plan.ctaText}
                    </button>
                  )}
                  <span className="block text-center text-[11px] text-[#1D564B]/60 mt-2">
                    Free data migration assistance included
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom enterprise note */}
        <div className="mt-12 text-center text-sm text-[#1D564B]/80 max-w-xl mx-auto">
          Need a multi-campus deployment for 500+ pupils?{' '}
          <button
            onClick={() => onSelectPlan('Enterprise Network')}
            className="text-[#00A896] font-semibold underline hover:text-[#009383] cursor-pointer"
          >
            Contact us for custom madrasah federation pricing.
          </button>
        </div>

      </div>
    </section>
  );
};
