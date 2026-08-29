/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SocialProofSection } from './components/SocialProofSection';
import { ProblemSolutionSection } from './components/ProblemSolutionSection';
import { FeaturesSection } from './components/FeaturesSection';
import { InteractiveShowcase } from './components/InteractiveShowcase';
import { MetricsSection } from './components/MetricsSection';
import { PricingSection } from './components/PricingSection';
import { MissionSection } from './components/MissionSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { PortalModal } from './components/PortalModal';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>('Standard');
  const [isPortalModalOpen, setIsPortalModalOpen] = useState(false);
  const [portalRole, setPortalRole] = useState<'parent' | 'staff'>('parent');

  const handleOpenDemo = (prefilledPlan?: string) => {
    if (prefilledPlan) {
      setSelectedPlan(prefilledPlan);
    }
    setIsDemoModalOpen(true);
  };

  const handleOpenPortal = (role: 'parent' | 'staff') => {
    setPortalRole(role);
    setIsPortalModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FBF9F6] text-[#1D564B] flex flex-col selection:bg-[#00A896] selection:text-white">
      {/* Section 1: Navigation Header (Sticky) */}
      <Navbar
        onOpenDemo={handleOpenDemo}
        onOpenPortal={handleOpenPortal}
      />

      <main className="flex-grow">
        {/* Section 2: Hero Fold (Value Proposition & Interactive Mock Dashboard) */}
        <HeroSection
          onOpenDemo={() => handleOpenDemo()}
          onOpenParentPortal={() => handleOpenPortal('parent')}
        />

        {/* Section 3: Social Proof / Testimonials Band */}
        <SocialProofSection />

        {/* Section 4: Problem vs. Solution ("From Chaos to Calm") */}
        <ProblemSolutionSection />

        {/* Section 5: "Built for how madrasahs work" (The Feature Grid) */}
        <FeaturesSection />

        {/* Section 6: Interactive Showcase ("See it in action") */}
        <InteractiveShowcase />

        {/* Section 7: Proof & Quantitative Metrics ("Fee chasing, cut by 70%") */}
        <MetricsSection />

        {/* Section 8: "Simple, transparent pricing" */}
        <PricingSection
          onSelectPlan={(plan) => handleOpenDemo(plan)}
        />

        {/* Section 9: "A chain unbroken" (Philosophy & Mission) */}
        <MissionSection
          onContact={() => handleOpenDemo('Onboarding Support')}
        />

        {/* Section 10: Final CTA Banner */}
        <FinalCtaSection
          onOpenDemo={() => handleOpenDemo()}
          onContactOnboarding={() => handleOpenDemo('Onboarding')}
        />
      </main>

      {/* Section 11: Page Footer */}
      <Footer
        onOpenDemo={() => handleOpenDemo()}
        onOpenPortal={handleOpenPortal}
      />

      {/* Interactive Modals */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        prefilledPlan={selectedPlan}
      />

      <PortalModal
        isOpen={isPortalModalOpen}
        onClose={() => setIsPortalModalOpen(false)}
        initialRole={portalRole}
      />
    </div>
  );
}
