import React, { useState } from 'react';
import { X, CheckCircle2, Send, Calendar, Clock, School, User, Phone, Sparkles } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledPlan?: string;
}

export const DemoModal: React.FC<DemoModalProps> = ({
  isOpen,
  onClose,
  prefilledPlan = 'Standard',
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    schoolName: '',
    role: 'Head Teacher',
    phone: '',
    email: '',
    pupilsCount: '50-150',
    plan: prefilledPlan,
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      id="demo-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in"
      onClick={onClose}
    >
      <div
        id="demo-modal-dialog"
        className="bg-white border border-[#E1DCD6] rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative text-[#1D564B] max-h-[90vh] overflow-y-auto animate-in zoom-in-95"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#1D564B]/60 hover:text-[#1D564B] hover:bg-[#EEEAE5] transition-colors"
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-5 animate-in fade-in">
            <div className="w-16 h-16 rounded-full bg-[#EBF7EE] text-[#00A896] mx-auto flex items-center justify-center border border-[#C3EBD0]">
              <CheckCircle2 size={36} />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-[#1D564B]">
                Demo Requested!
              </h3>
              <p className="text-sm text-[#1D564B]/80 leading-relaxed max-w-sm mx-auto">
                JazakAllah Khair <span className="font-semibold">{formData.name || 'Ustadh'}</span>. Our onboarding coordinator will send a WhatsApp invite and calendar link for <span className="font-semibold">{formData.schoolName || 'your Madrasah'}</span> shortly.
              </p>
            </div>

            <div className="p-4 bg-[#FBF9F6] border border-[#E1DCD6] rounded-xl text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-[#1D564B]/70">Selected Plan:</span>
                <span className="font-semibold text-[#00A896]">{formData.plan}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#1D564B]/70">Est. Pupil Capacity:</span>
                <span className="font-semibold">{formData.pupilsCount} students</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#1D564B]/70">WhatsApp Contact:</span>
                <span className="font-semibold">{formData.phone || '+44 (UK / Global)'}</span>
              </div>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="w-full py-3 rounded-xl bg-[#00A896] hover:bg-[#009383] text-white font-semibold transition-all cursor-pointer shadow-xs"
            >
              Done &amp; Return to Page
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#00A896] mb-1">
                <Sparkles size={13} />
                15-Minute Live Walkthrough
              </div>
              <h3 className="text-2xl font-semibold text-[#1D564B]">
                Book a 15-min Silsila Demo
              </h3>
              <p className="text-xs sm:text-sm text-[#1D564B]/75 mt-1">
                See how easy registers, fees, and WhatsApp reminders can be for your madrasah.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#1D564B] mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ustadh Bilal Vance"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#FBF9F6] border border-[#E1DCD6] focus:border-[#00A896] rounded-xl text-sm focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#1D564B] mb-1">
                    Madrasah / Maktab Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Madrasah Al-Ansar"
                    value={formData.schoolName}
                    onChange={e => setFormData({ ...formData, schoolName: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FBF9F6] border border-[#E1DCD6] focus:border-[#00A896] rounded-xl text-sm focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1D564B] mb-1">
                    Your Primary Role
                  </label>
                  <select
                    value={formData.role}
                    onChange={e => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FBF9F6] border border-[#E1DCD6] focus:border-[#00A896] rounded-xl text-sm focus:outline-none transition-colors"
                  >
                    <option value="Head Teacher">Head Teacher / Principal</option>
                    <option value="Administrator">Administrator / Secretary</option>
                    <option value="Treasurer">Madrasah Treasurer / Trustee</option>
                    <option value="Teacher">Teacher / Ustaadh</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#1D564B] mb-1">
                    WhatsApp Mobile Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 07700 900123"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FBF9F6] border border-[#E1DCD6] focus:border-[#00A896] rounded-xl text-sm focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1D564B] mb-1">
                    Number of Pupils
                  </label>
                  <select
                    value={formData.pupilsCount}
                    onChange={e => setFormData({ ...formData, pupilsCount: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FBF9F6] border border-[#E1DCD6] focus:border-[#00A896] rounded-xl text-sm focus:outline-none transition-colors"
                  >
                    <option value="Under 50">Under 50 pupils (Starter)</option>
                    <option value="50-150">50 – 150 pupils (Standard)</option>
                    <option value="150-300">150 – 300 pupils (Pro)</option>
                    <option value="300+">300+ pupils (Multi-campus)</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-semibold bg-[#00A896] hover:bg-[#009383] text-white transition-all shadow-md active:scale-[0.98] text-center cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  <span>Confirm 15-Minute Demo Request</span>
                </button>
                <p className="text-[11px] text-[#1D564B]/60 text-center mt-2">
                  No credit card required • Friendly 1-on-1 walkthrough
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
