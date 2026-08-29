import React from 'react';
import {
  CalendarCheck2,
  Users2,
  ReceiptText,
  MessageCircle,
  Smartphone,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

interface FeaturesSectionProps {
  onSelectFeature?: (featureId: string) => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = () => {
  const features = [
    {
      id: 'attendance',
      icon: CalendarCheck2,
      title: 'Fast Attendance Register',
      description:
        'Pupil registers completed in under a minute, optimized for fast mobile or desktop clicking.',
      badge: '< 60 seconds',
    },
    {
      id: 'stats',
      icon: Users2,
      title: 'Interactive Core Stats',
      description:
        'Access parent details, emergency contact numbers, medical notes, and classroom schedules instantly.',
      badge: 'Instant lookup',
    },
    {
      id: 'invoicing',
      icon: ReceiptText,
      title: 'Invoicing and Analysis',
      description:
        'Generate clean receipts, track physical cash vs bank transfers, and see exactly who has paid at a glance.',
      badge: 'Auto reconciliation',
    },
    {
      id: 'whatsapp',
      icon: MessageCircle,
      title: 'WhatsApp & SMS Links',
      description:
        'Deliver direct payment links straight to parent phones, drastically lowering late-payment frequency.',
      badge: '98% open rate',
    },
    {
      id: 'portal',
      icon: Smartphone,
      title: 'Parent Portal',
      description:
        'Passwordless login links let parents track attendance charts, pay fees, and view active announcements on their own.',
      badge: 'Zero friction',
    },
    {
      id: 'audit',
      icon: ShieldCheck,
      title: 'Audit Trails & Reports',
      description:
        'Every invoice adjustment, fee collection, or attendance status change is timestamped and ready to export.',
      badge: 'Full GDPR ready',
    },
  ];

  return (
    <section
      id="features"
      className="bg-[#FBF9F6] py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 space-y-4">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#00A896]">
            THE TOOLKIT
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.25rem] font-semibold text-[#1D564B] tracking-tight">
            Built for how madrasahs work
          </h2>
          <p className="text-base sm:text-lg text-[#1D564B]/80 font-normal leading-relaxed">
            Every feature is shaped around a real workflow—one that turns a daily administrative headache into a beautiful, quiet routine.
          </p>
        </div>

        {/* 3-column, 2-row grid of Feature Cards (Hoverable) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                id={`feature-card-${item.id}`}
                className="silsila-feature-card p-8 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#EBF7EE] border border-[#C3EBD0] text-[#1D564B] flex items-center justify-center group-hover:bg-[#00A896] group-hover:text-white group-hover:border-[#00A896] transition-colors duration-200">
                      <Icon size={22} />
                    </div>
                    <span className="text-[11px] font-semibold text-[#1D564B]/70 bg-[#EEEAE5] px-2.5 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-[#1D564B] mb-3 group-hover:text-[#00A896] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#1D564B]/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E1DCD6]/60 flex items-center text-xs font-semibold text-[#1D564B] group-hover:text-[#00A896] transition-colors">
                  <span>Explore workflow</span>
                  <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
