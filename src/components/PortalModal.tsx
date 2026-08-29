import React, { useState } from 'react';
import { X, Smartphone, KeyRound, ArrowRight, CheckCircle2, ShieldCheck, Mail } from 'lucide-react';

interface PortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRole: 'parent' | 'staff';
}

export const PortalModal: React.FC<PortalModalProps> = ({
  isOpen,
  onClose,
  initialRole = 'parent',
}) => {
  const [role, setRole] = useState<'parent' | 'staff'>(initialRole);
  const [phoneOrEmail, setPhoneOrEmail] = useState('');
  const [linkSent, setLinkSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLinkSent(true);
  };

  return (
    <div
      id="portal-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in"
      onClick={onClose}
    >
      <div
        id="portal-modal-dialog"
        className="bg-white border border-[#E1DCD6] rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative text-[#1D564B] animate-in zoom-in-95"
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

        {/* Role Toggle */}
        <div className="flex bg-[#FBF9F6] p-1 rounded-xl border border-[#E1DCD6] mb-6">
          <button
            onClick={() => {
              setRole('parent');
              setLinkSent(false);
            }}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              role === 'parent'
                ? 'bg-[#00A896] text-white shadow-xs'
                : 'text-[#1D564B]/70 hover:text-[#1D564B]'
            }`}
          >
            Family Portal (Magic Link)
          </button>
          <button
            onClick={() => {
              setRole('staff');
              setLinkSent(false);
            }}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              role === 'staff'
                ? 'bg-[#1D564B] text-white shadow-xs'
                : 'text-[#1D564B]/70 hover:text-[#1D564B]'
            }`}
          >
            Staff &amp; Teacher Login
          </button>
        </div>

        {linkSent ? (
          <div className="text-center py-6 space-y-4 animate-in fade-in">
            <div className="w-14 h-14 rounded-full bg-[#EBF7EE] text-[#00A896] mx-auto flex items-center justify-center border border-[#C3EBD0]">
              <CheckCircle2 size={30} />
            </div>
            <h4 className="text-xl font-semibold text-[#1D564B]">
              {role === 'parent' ? 'Magic Link Dispatched!' : 'Staff Verification Code Sent'}
            </h4>
            <p className="text-xs text-[#1D564B]/80 leading-relaxed max-w-xs mx-auto">
              We&apos;ve sent a one-time secure link to <span className="font-semibold">{phoneOrEmail || 'your registered contact'}</span>. Click the link on your phone to open your Maktab dashboard instantly.
            </p>
            <div className="p-3 bg-[#FBF9F6] rounded-xl border border-[#E1DCD6] text-xs text-[#1E562A] font-medium">
              🔒 No password needed. Zero friction.
            </div>
            <button
              onClick={() => {
                setLinkSent(false);
                onClose();
              }}
              className="w-full py-2.5 rounded-xl bg-[#00A896] text-white font-semibold text-sm hover:bg-[#009383] transition-all cursor-pointer"
            >
              Close &amp; Check Phone
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-[#1D564B]">
                {role === 'parent' ? 'Access Family Portal' : 'Staff Secure Access'}
              </h3>
              <p className="text-xs text-[#1D564B]/75 mt-1">
                {role === 'parent'
                  ? 'Enter your mobile number or email registered with your school to receive an instant access link.'
                  : 'Enter your teacher / admin credentials or request a fast magic sign-in code.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#1D564B] mb-1">
                  {role === 'parent' ? 'Registered WhatsApp / Mobile Number' : 'Staff Email or Phone'}
                </label>
                <input
                  type="text"
                  required
                  placeholder={role === 'parent' ? 'e.g. 07700 900123' : 'e.g. ustaadh@alansar.org'}
                  value={phoneOrEmail}
                  onChange={e => setPhoneOrEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#FBF9F6] border border-[#E1DCD6] focus:border-[#00A896] rounded-xl text-sm focus:outline-none transition-colors"
                />
              </div>

              {role === 'staff' && (
                <div>
                  <label className="block text-xs font-semibold text-[#1D564B] mb-1">
                    Madrasah Pin / Access Code
                  </label>
                  <input
                    type="password"
                    placeholder="••••••"
                    className="w-full px-3.5 py-2.5 bg-[#FBF9F6] border border-[#E1DCD6] focus:border-[#00A896] rounded-xl text-sm focus:outline-none transition-colors"
                  />
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 px-6 rounded-xl font-semibold bg-[#00A896] hover:bg-[#009383] text-white transition-all shadow-sm active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 text-sm"
              >
                <span>{role === 'parent' ? 'Send Passwordless Magic Link' : 'Log into Staff Register'}</span>
                <ArrowRight size={15} />
              </button>
            </form>

            <div className="pt-2 text-center text-[11px] text-[#1D564B]/60">
              Need help registering your school?{' '}
              <button
                onClick={() => {
                  onClose();
                  // trigger demo
                }}
                className="text-[#00A896] font-semibold underline"
              >
                Book a demo
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
