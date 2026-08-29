import React, { useState } from 'react';
import {
  Check,
  CheckCircle2,
  Clock,
  AlertCircle,
  Send,
  Download,
  Calendar,
  CreditCard,
  Smartphone,
  ChevronRight,
  Sparkles,
  ArrowRight,
  ShieldAlert
} from 'lucide-react';

interface AttendanceRecord {
  id: string;
  name: string;
  yearGroup: string;
  mon: 'P' | 'A' | 'L';
  tue: 'P' | 'A' | 'L';
  wed: 'P' | 'A' | 'L';
  thu: 'P' | 'A' | 'L';
  fri: 'P' | 'A' | 'L';
}

interface InvoiceRecord {
  id: string;
  student: string;
  parent: string;
  amount: number;
  dueDate: string;
  status: 'Paid' | 'Pending' | 'Overdue';
  phone: string;
}

export const InteractiveShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'staff' | 'admin' | 'parent'>('staff');
  const [submittedRegister, setSubmittedRegister] = useState(false);
  const [registerLocked, setRegisterLocked] = useState(false);

  // Tab 1: Attendance State
  const [attendanceList, setAttendanceList] = useState<AttendanceRecord[]>([
    { id: '1', name: 'Adam Rahman', yearGroup: 'Year 2 (Qur\'an)', mon: 'P', tue: 'P', wed: 'L', thu: 'P', fri: 'P' },
    { id: '2', name: 'Zahra Rahman', yearGroup: 'Year 3 (Hifdh)', mon: 'P', tue: 'A', wed: 'P', thu: 'P', fri: 'P' },
    { id: '3', name: 'Faisal Ahmed', yearGroup: 'Year 1 (Qaida)', mon: 'P', tue: 'P', wed: 'P', thu: 'L', fri: 'P' },
    { id: '4', name: 'Maryam Siddiq', yearGroup: 'Year 4 (Tajweed)', mon: 'P', tue: 'P', wed: 'P', thu: 'P', fri: 'P' },
  ]);

  // Tab 2: Invoice Pay Desk State
  const [invoices, setInvoices] = useState<InvoiceRecord[]>([
    { id: 'inv-1', student: 'Adam Rahman', parent: 'Tariq Rahman', amount: 45.00, dueDate: '15 Nov 2024', status: 'Paid', phone: '+44 7700 900123' },
    { id: 'inv-2', student: 'Zahra Rahman', parent: 'Tariq Rahman', amount: 45.00, dueDate: '15 Nov 2024', status: 'Pending', phone: '+44 7700 900123' },
    { id: 'inv-3', student: 'Faisal Ahmed', parent: 'Hamza Ahmed', amount: 45.00, dueDate: '01 Nov 2024', status: 'Overdue', phone: '+44 7700 900456' },
    { id: 'inv-4', student: 'Maryam Siddiq', parent: 'Farooq Siddiq', amount: 90.00, dueDate: '15 Nov 2024', status: 'Paid', phone: '+44 7700 900789' },
  ]);
  const [whatsappToast, setWhatsappToast] = useState<string | null>(null);

  // Tab 3: Parent Portal State
  const [parentInvoicePaid, setParentInvoicePaid] = useState(false);

  const cycleStatus = (status: 'P' | 'A' | 'L'): 'P' | 'A' | 'L' => {
    if (status === 'P') return 'L';
    if (status === 'L') return 'A';
    return 'P';
  };

  const handleToggleDay = (studentId: string, day: 'mon' | 'tue' | 'wed' | 'thu' | 'fri') => {
    if (registerLocked) return;
    setAttendanceList(prev =>
      prev.map(st => {
        if (st.id === studentId) {
          return { ...st, [day]: cycleStatus(st[day]) };
        }
        return st;
      })
    );
  };

  const handleSubmitRegister = () => {
    setSubmittedRegister(true);
    setRegisterLocked(true);
    setTimeout(() => {
      setSubmittedRegister(false);
    }, 4000);
  };

  const handleSendWhatsApp = (inv: InvoiceRecord) => {
    setWhatsappToast(`WhatsApp payment link sent to ${inv.parent} (${inv.phone})`);
    setTimeout(() => setWhatsappToast(null), 3500);
  };

  const handleMarkPaid = (id: string) => {
    setInvoices(prev =>
      prev.map(item => (item.id === id ? { ...item, status: 'Paid' } : item))
    );
  };

  return (
    <section
      id="interactive-showcase"
      className="bg-[#1D564B] text-white py-24 lg:py-32 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#00A896]">
            IN ACTION
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.25rem] font-semibold text-white tracking-tight">
            See it in action
          </h2>
          <p className="text-base sm:text-lg text-white/80 font-normal leading-relaxed">
            Three perspectives, one system. Admin, teachers, and parents—each get exactly what they need.
          </p>
        </div>

        {/* Horizontal Perspective Tabs */}
        <div className="flex justify-center mb-12">
          <div
            id="perspective-tab-bar"
            className="bg-[#16433a] p-1.5 rounded-xl border border-[#256f61]/80 inline-flex flex-wrap gap-1 shadow-inner max-w-full"
          >
            <button
              id="tab-btn-staff"
              onClick={() => setActiveTab('staff')}
              className={`px-4 sm:px-6 py-2.5 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'staff'
                  ? 'bg-[#00A896] text-white shadow-md'
                  : 'text-white/70 hover:text-white hover:bg-[#1D564B]'
              }`}
            >
              Tab 1: Staff - Take Attendance
            </button>
            <button
              id="tab-btn-admin"
              onClick={() => setActiveTab('admin')}
              className={`px-4 sm:px-6 py-2.5 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'admin'
                  ? 'bg-[#00A896] text-white shadow-md'
                  : 'text-white/70 hover:text-white hover:bg-[#1D564B]'
              }`}
            >
              Tab 2: Admin - Invoice + Pay Desk
            </button>
            <button
              id="tab-btn-parent"
              onClick={() => setActiveTab('parent')}
              className={`px-4 sm:px-6 py-2.5 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'parent'
                  ? 'bg-[#00A896] text-white shadow-md'
                  : 'text-white/70 hover:text-white hover:bg-[#1D564B]'
              }`}
            >
              Tab 3: Parent View - Fee Portal
            </button>
          </div>
        </div>

        {/* Dynamic Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (Perspective copy) */}
          <div className="lg:col-span-5 space-y-6">
            {activeTab === 'staff' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00A896]/20 border border-[#00A896]/40 text-[#00A896] text-xs font-semibold">
                  <span>TEACHER &amp; USTAADH WORKFLOW</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                  Mark attendance in seconds
                </h3>
                <p className="text-white/80 text-base leading-relaxed">
                  Designed for speed in the classroom. No bulky paperwork or delayed tallying—teachers record attendance on phone, tablet, or laptop in under 60 seconds.
                </p>

                <ul className="space-y-3.5 pt-2 text-white/90 text-sm sm:text-base">
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#EBF7EE] text-[#1E562A] flex items-center justify-center font-bold text-xs">
                      ✓
                    </span>
                    <span>See pupil class history instantly</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#EBF7EE] text-[#1E562A] flex items-center justify-center font-bold text-xs">
                      ✓
                    </span>
                    <span>Tap once to toggle present, absent, or late</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#EBF7EE] text-[#1E562A] flex items-center justify-center font-bold text-xs">
                      ✓
                    </span>
                    <span>Submit with one tap — register is automatically locked and shared with admin</span>
                  </li>
                </ul>

                <div className="p-4 bg-[#16433a] rounded-xl border border-[#256f61]/60 text-xs text-white/70 flex items-center justify-between">
                  <span>💡 Tip: Click on any P / A / L badge to toggle status.</span>
                  {registerLocked && (
                    <button
                      onClick={() => setRegisterLocked(false)}
                      className="text-[#00A896] font-semibold underline cursor-pointer"
                    >
                      Unlock grid
                    </button>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'admin' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00A896]/20 border border-[#00A896]/40 text-[#00A896] text-xs font-semibold">
                  <span>ADMINISTRATOR &amp; TREASURER</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                  Zero-stress Invoicing &amp; Pay Desk
                </h3>
                <p className="text-white/80 text-base leading-relaxed">
                  Eliminate awkward fee conversations. Send clean WhatsApp payment links that parents can settle in two taps from their mobile phones.
                </p>

                <ul className="space-y-3.5 pt-2 text-white/90 text-sm sm:text-base">
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#EBF7EE] text-[#1E562A] flex items-center justify-center font-bold text-xs">
                      ✓
                    </span>
                    <span>1-click WhatsApp payment links sent with friendly templates</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#EBF7EE] text-[#1E562A] flex items-center justify-center font-bold text-xs">
                      ✓
                    </span>
                    <span>Log cash, bank transfers, or card settlements in real-time</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#EBF7EE] text-[#1E562A] flex items-center justify-center font-bold text-xs">
                      ✓
                    </span>
                    <span>Automatic digital receipts generated and stored for accounting</span>
                  </li>
                </ul>

                <div className="p-4 bg-[#16433a] rounded-xl border border-[#256f61]/60 text-xs text-white/70">
                  <span>💡 Overdue invoices highlight in red with pre-drafted gentle reminder texts.</span>
                </div>
              </div>
            )}

            {activeTab === 'parent' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00A896]/20 border border-[#00A896]/40 text-[#00A896] text-xs font-semibold">
                  <span>FAMILY &amp; GUARDIAN VIEW</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                  A transparent portal for families
                </h3>
                <p className="text-white/80 text-base leading-relaxed">
                  Parents don&apos;t need to remember passwords. One secure magic link lets them view attendance records, upcoming events, and invoices at any time.
                </p>

                <ul className="space-y-3.5 pt-2 text-white/90 text-sm sm:text-base">
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#EBF7EE] text-[#1E562A] flex items-center justify-center font-bold text-xs">
                      ✓
                    </span>
                    <span>Passwordless magic links sent directly to registered parent mobile</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#EBF7EE] text-[#1E562A] flex items-center justify-center font-bold text-xs">
                      ✓
                    </span>
                    <span>Instant attendance summary and term progression tracker</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#EBF7EE] text-[#1E562A] flex items-center justify-center font-bold text-xs">
                      ✓
                    </span>
                    <span>Direct online payment receipt downloaded with 1 tap</span>
                  </li>
                </ul>

                <div className="p-4 bg-[#16433a] rounded-xl border border-[#256f61]/60 text-xs text-white/70">
                  <span>💡 Parents can see exact dates their child was Present, Late, or Absent.</span>
                </div>
              </div>
            )}
          </div>

          {/* Right Column (Simulated Interactive Component Mockup) */}
          <div className="lg:col-span-7">
            
            {/* TAB 1 MOCKUP: Dense Table (Weekly Attendance Grid) */}
            {activeTab === 'staff' && (
              <div
                id="mockup-attendance-table-container"
                className="bg-white text-[#1D564B] rounded-2xl border border-[#E1DCD6] shadow-2xl overflow-hidden animate-in fade-in"
              >
                {/* Table Header Controls */}
                <div className="px-6 py-4 bg-[#FBF9F6] border-b border-[#E1DCD6] flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h4 className="font-semibold text-base text-[#1D564B] flex items-center gap-2">
                      <span>Year 2 &amp; 3 — Daily Qur&apos;an Register</span>
                      <span className="text-xs font-normal text-[#1D564B]/60">(Week 11)</span>
                    </h4>
                    <p className="text-xs text-[#1D564B]/70">Tap any badge to toggle: <span className="font-bold text-[#1E562A]">P (Present)</span>, <span className="font-bold text-[#8A5E1A]">L (Late)</span>, <span className="font-bold text-[#9C2A2B]">A (Absent)</span></p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                      registerLocked ? 'bg-[#EBF7EE] text-[#1E562A] border border-[#C3EBD0]' : 'bg-[#FFF8EC] text-[#8A5E1A] border border-[#FFE3B3]'
                    }`}>
                      {registerLocked ? '🔒 Register Locked' : '✏️ Editing Active'}
                    </span>
                  </div>
                </div>

                {/* Dense Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm border-collapse">
                    <thead>
                      <tr className="bg-[#EEEAE5]/50 border-b border-[#E1DCD6] text-xs font-semibold text-[#1D564B]/80">
                        <th className="py-3 px-4 sm:px-6">Pupil Name</th>
                        <th className="py-3 px-2 text-center">Mon</th>
                        <th className="py-3 px-2 text-center">Tue</th>
                        <th className="py-3 px-2 text-center">Wed</th>
                        <th className="py-3 px-2 text-center">Thu</th>
                        <th className="py-3 px-2 text-center">Fri</th>
                        <th className="py-3 px-4 text-right">Rate</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E1DCD6]/60">
                      {attendanceList.map(student => {
                        const days = [student.mon, student.tue, student.wed, student.thu, student.fri];
                        const presentCount = days.filter(d => d === 'P').length;
                        const lateCount = days.filter(d => d === 'L').length;
                        const score = Math.round(((presentCount + lateCount * 0.7) / 5) * 100);

                        return (
                          <tr key={student.id} className="hover:bg-[#FBF9F6] transition-colors">
                            <td className="py-3.5 px-4 sm:px-6">
                              <div className="font-medium text-[#1D564B]">{student.name}</div>
                              <div className="text-xs text-[#1D564B]/60">{student.yearGroup}</div>
                            </td>

                            {(['mon', 'tue', 'wed', 'thu', 'fri'] as const).map(day => {
                              const val = student[day];
                              return (
                                <td key={day} className="py-3.5 px-2 text-center">
                                  <button
                                    onClick={() => handleToggleDay(student.id, day)}
                                    title="Click to toggle status"
                                    className={`w-7 h-7 rounded-full inline-flex items-center justify-center font-bold text-xs transition-transform active:scale-90 cursor-pointer ${
                                      val === 'P'
                                        ? 'bg-[#EBF7EE] text-[#1E562A] border border-[#C3EBD0]'
                                        : val === 'A'
                                        ? 'bg-[#FDF2F2] text-[#9C2A2B] border border-[#FAD2D2]'
                                        : 'bg-[#FFF8EC] text-[#8A5E1A] border border-[#FFE3B3]'
                                    }`}
                                  >
                                    {val}
                                  </button>
                                </td>
                              );
                            })}

                            <td className="py-3.5 px-4 text-right">
                              <span className="font-semibold text-xs text-[#1D564B]">{score}%</span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {/* Submission footer */}
                <div className="p-4 sm:p-6 bg-[#FBF9F6] border-t border-[#E1DCD6] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-[#1D564B]/75 text-center sm:text-left">
                    {submittedRegister ? (
                      <span className="text-[#1E562A] font-semibold flex items-center gap-1.5">
                        <CheckCircle2 size={16} /> Attendance recorded &amp; synced to Head Teacher!
                      </span>
                    ) : (
                      <span>4 of 4 pupil registers recorded for today</span>
                    )}
                  </div>

                  <button
                    id="btn-submit-attendance-register"
                    onClick={handleSubmitRegister}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold bg-[#00A896] text-white hover:bg-[#009383] shadow-sm active:scale-[0.98] transition-all cursor-pointer"
                  >
                    Submit Attendance Register
                  </button>
                </div>
              </div>
            )}

            {/* TAB 2 MOCKUP: Admin Pay Desk */}
            {activeTab === 'admin' && (
              <div
                id="mockup-admin-invoice-desk"
                className="bg-white text-[#1D564B] rounded-2xl border border-[#E1DCD6] shadow-2xl overflow-hidden animate-in fade-in"
              >
                {/* Header */}
                <div className="px-6 py-4 bg-[#FBF9F6] border-b border-[#E1DCD6] flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h4 className="font-semibold text-base text-[#1D564B]">
                      Invoice &amp; Fee Pay Desk
                    </h4>
                    <p className="text-xs text-[#1D564B]/70">Term 1 — Monthly Madrasah Dues</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#EBF7EE] text-[#1E562A] border border-[#C3EBD0]">
                      £6,280 / £6,690 Collected
                    </span>
                  </div>
                </div>

                {whatsappToast && (
                  <div className="px-6 py-2.5 bg-[#EBF7EE] text-[#1E562A] text-xs font-medium border-b border-[#C3EBD0] flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Send size={13} /> {whatsappToast}
                    </span>
                    <span className="text-[10px]">Just now</span>
                  </div>
                )}

                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm border-collapse">
                    <thead>
                      <tr className="bg-[#EEEAE5]/50 border-b border-[#E1DCD6] text-xs font-semibold text-[#1D564B]/80">
                        <th className="py-3 px-4 sm:px-6">Pupil / Guardian</th>
                        <th className="py-3 px-3">Amount</th>
                        <th className="py-3 px-3">Status</th>
                        <th className="py-3 px-4 text-right">Quick Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E1DCD6]/60">
                      {invoices.map(inv => (
                        <tr key={inv.id} className="hover:bg-[#FBF9F6] transition-colors">
                          <td className="py-3.5 px-4 sm:px-6">
                            <div className="font-medium text-[#1D564B]">{inv.student}</div>
                            <div className="text-xs text-[#1D564B]/60">Parent: {inv.parent}</div>
                          </td>
                          <td className="py-3.5 px-3 font-semibold text-[#1D564B]">
                            £{inv.amount.toFixed(2)}
                          </td>
                          <td className="py-3.5 px-3">
                            {inv.status === 'Paid' && (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#EBF7EE] border border-[#C3EBD0] text-[#1E562A]">
                                Paid
                              </span>
                            )}
                            {inv.status === 'Pending' && (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#FFF8EC] border border-[#FFE3B3] text-[#8A5E1A]">
                                Pending
                              </span>
                            )}
                            {inv.status === 'Overdue' && (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#FDF2F2] border border-[#FAD2D2] text-[#9C2A2B]">
                                Overdue
                              </span>
                            )}
                          </td>
                          <td className="py-3.5 px-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              {inv.status !== 'Paid' ? (
                                <>
                                  <button
                                    onClick={() => handleSendWhatsApp(inv)}
                                    className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-[#00A896] text-white hover:bg-[#009383] transition-all flex items-center gap-1 cursor-pointer"
                                  >
                                    <Send size={11} /> WhatsApp Link
                                  </button>
                                  <button
                                    onClick={() => handleMarkPaid(inv.id)}
                                    className="px-2 py-1 text-xs font-medium rounded-lg bg-[#EEEAE5] text-[#1D564B] hover:bg-[#E5E0DA] transition-all cursor-pointer"
                                  >
                                    Mark Paid
                                  </button>
                                </>
                              ) : (
                                <span className="text-xs text-[#1E562A] flex items-center gap-1 font-medium">
                                  <CheckCircle2 size={13} /> Receipt #8129
                                </span>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="p-4 bg-[#FBF9F6] border-t border-[#E1DCD6] flex items-center justify-between text-xs text-[#1D564B]/80">
                  <span>Automated WhatsApp reminders scheduled for overdue parents on 1st of month.</span>
                  <button className="text-[#00A896] font-semibold hover:underline">
                    Download CSV Audit →
                  </button>
                </div>
              </div>
            )}

            {/* TAB 3 MOCKUP: Parent View - Fee Portal */}
            {activeTab === 'parent' && (
              <div
                id="mockup-parent-fee-portal"
                className="bg-white text-[#1D564B] rounded-2xl border border-[#E1DCD6] shadow-2xl overflow-hidden p-6 sm:p-8 space-y-6 animate-in fade-in"
              >
                {/* Family Profile Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E1DCD6]">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-[#1D564B] text-white flex items-center justify-center font-bold text-base">
                      TR
                    </div>
                    <div>
                      <h4 className="font-semibold text-base text-[#1D564B]">
                        Tariq Rahman
                      </h4>
                      <p className="text-xs text-[#1D564B]/70">Family Portal • 2 Children Enrolled</p>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-[#1E562A] bg-[#EBF7EE] border border-[#C3EBD0] px-2.5 py-1 rounded-full">
                    Magic Link Verified
                  </span>
                </div>

                {/* Child 1: Zahra Rahman */}
                <div className="p-4 bg-[#FBF9F6] rounded-xl border border-[#E1DCD6] space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-semibold text-sm text-[#1D564B]">Zahra Rahman</span>
                      <span className="text-xs text-[#1D564B]/60 ml-2">Year 3 — Qur&apos;an &amp; Islamic Studies</span>
                    </div>
                    <span className="text-xs font-semibold text-[#1E562A] bg-[#EBF7EE] px-2 py-0.5 rounded">
                      96% Attendance
                    </span>
                  </div>

                  {/* Attendance visual dots */}
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-[#1D564B]/70">Last 5 Sessions:</span>
                    <span className="w-5 h-5 rounded-full bg-[#EBF7EE] text-[#1E562A] flex items-center justify-center font-bold text-[10px]">P</span>
                    <span className="w-5 h-5 rounded-full bg-[#EBF7EE] text-[#1E562A] flex items-center justify-center font-bold text-[10px]">P</span>
                    <span className="w-5 h-5 rounded-full bg-[#FDF2F2] text-[#9C2A2B] flex items-center justify-center font-bold text-[10px]">A</span>
                    <span className="w-5 h-5 rounded-full bg-[#EBF7EE] text-[#1E562A] flex items-center justify-center font-bold text-[10px]">P</span>
                    <span className="w-5 h-5 rounded-full bg-[#EBF7EE] text-[#1E562A] flex items-center justify-center font-bold text-[10px]">P</span>
                  </div>

                  {/* Pending Invoice Box */}
                  <div className="p-3 bg-white rounded-lg border border-[#E1DCD6] flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <div className="text-xs font-semibold text-[#1D564B]">
                        November 2024 Tuition Fee
                      </div>
                      <div className="text-[11px] text-[#1D564B]/60">Due by 15 Nov 2024</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-base font-bold text-[#1D564B]">£45.00</span>
                      {parentInvoicePaid ? (
                        <span className="text-xs font-semibold text-[#1E562A] bg-[#EBF7EE] border border-[#C3EBD0] px-3 py-1 rounded-lg">
                          ✓ Paid via Card
                        </span>
                      ) : (
                        <button
                          onClick={() => setParentInvoicePaid(true)}
                          className="px-3 py-1.5 bg-[#00A896] hover:bg-[#009383] text-white text-xs font-semibold rounded-lg shadow-xs transition-all cursor-pointer flex items-center gap-1"
                        >
                          <CreditCard size={12} /> Pay Now (£45.00)
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Child 2: Adam Rahman */}
                <div className="p-4 bg-[#FBF9F6] rounded-xl border border-[#E1DCD6] flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-sm text-[#1D564B]">Adam Rahman</span>
                    <span className="text-xs text-[#1D564B]/60 ml-2">Year 2 (Qaida)</span>
                    <div className="text-xs text-[#1E562A] mt-0.5">Fees fully settled for Term 1</div>
                  </div>
                  <span className="text-xs font-semibold text-[#1E562A] bg-[#EBF7EE] border border-[#C3EBD0] px-2.5 py-1 rounded-full">
                    Paid (£45.00)
                  </span>
                </div>

              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
