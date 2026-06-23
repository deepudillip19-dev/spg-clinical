'use client';
import React, { useState } from 'react';
import { 
  ShieldCheck, Clock, CheckCircle, MessageSquare, 
  Star, ExternalLink, Send, Lock, User
} from 'lucide-react';

export default function ClinicalDashboard() {
  const [role, setRole] = useState<'public' | 'staff' | 'admin'>('public');
  const [appointments, setAppointments] = useState<any[]>([
    { time: '09:00', name: 'Karthik', phone: '9840123456', status: 'pending' },
    { time: '10:30', name: 'Saravanan', phone: '9840112233', status: 'confirmed' }
  ]);

  // Mock Testimonials (Staff Added)
  const testimonials = [
    { name: "Anitha R.", comment: "Excellent physio session for my neck pain. Highly recommend Sangeetha Genics!", rating: 5 },
    { name: "Vijay Kumar", comment: "The 30-min focused sessions are very effective. Recovered in 2 weeks.", rating: 5 }
  ];

  const handleConfirmSMS = (time: string) => {
    setAppointments(appointments.map(a => 
      a.time === time ? { ...a, status: 'confirmed' } : a
    ));
    alert(`SMS Sent to Patient: "Your appointment at ${time} with Sangeetha Physio Genics is CONFIRMED."`);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      {/* Header & Role Switcher (For Demo) */}
      <header className="flex justify-between items-center mb-10 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Sangeetha Physio Genics</h1>
          <p className="text-slate-400 text-sm font-medium uppercase tracking-widest">Clinic Status: Live</p>
        </div>
        <div className="flex gap-2 bg-slate-100 p-1 rounded-xl">
           {['public', 'staff', 'admin'].map(r => (
             <button key={r} onClick={() => setRole(r as any)} className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition ${role === r ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-500'}`}>{r}</button>
           ))}
        </div>
      </header>

      {/* Appointment Grid */}
      <section className="mb-12">
        <h2 className="text-lg font-bold mb-6 flex items-center gap-2"><Clock className="text-indigo-600"/> Today's Schedule (30m Slots)</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {appointments.map((apt) => (
            <div key={apt.time} className="bg-white p-6 rounded-3xl border border-slate-200 relative overflow-hidden group">
              <div className="flex justify-between items-start mb-4">
                <span className="text-lg font-black text-slate-800">{apt.time}</span>
                <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase ${apt.status === 'confirmed' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                  {apt.status}
                </span>
              </div>
              
              {/* Privacy Shield */}
              {role === 'public' ? (
                 <div className="flex items-center gap-2 text-slate-400 text-sm font-medium"><Lock size={14}/> Reserved Slot</div>
              ) : (
                <div className="space-y-1">
                  <p className="font-bold text-slate-700 flex items-center gap-2"><User size={14}/> {apt.name}</p>
                  <p className="text-xs text-slate-500">{apt.phone}</p>
                  
                  {/* Staff Confirmation Trigger */}
                  {apt.status === 'pending' && (
                    <button 
                      onClick={() => handleConfirmSMS(apt.time)}
                      className="mt-4 w-full py-2 bg-indigo-600 text-white text-[10px] font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-indigo-700"
                    >
                      <Send size={12}/> Confirm & Send SMS
                    </button>
                  )}
                </div>
              )}
              
              {/* Admin Special: Delete Button */}
              {role === 'admin' && (
                <button className="absolute -right-20 group-hover:right-2 top-2 p-2 bg-red-50 text-red-500 rounded-full transition-all">Delete</button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Google Reviews & Testimonials Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
        {/* Google Reviews Sync Block */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200">
           <div className="flex justify-between items-center mb-6">
             <h3 className="font-bold text-slate-800 flex items-center gap-2"><Star className="text-amber-500" fill="currentColor" /> Google Reviews</h3>
             <a href="https://www.google.com/maps/place/Sangeetha+physio+genics" target="_blank" className="text-indigo-600 text-xs font-bold flex items-center gap-1">View All <ExternalLink size={12}/></a>
           </div>
           <div className="space-y-4">
              <div className="text-4xl font-black text-slate-800">4.9 <span className="text-sm text-slate-400 font-normal">/ 5.0</span></div>
              <div className="flex gap-1 text-amber-500"><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/></div>
              <p className="text-xs text-slate-500 leading-relaxed italic">"Syncing automatically with Sangeetha Physio Genics, Chennai (Google Maps API)..."</p>
           </div>
        </div>

        {/* Staff Testimonials */}
        <div className="bg-indigo-600 p-8 rounded-3xl text-white shadow-xl shadow-indigo-200">
           <h3 className="font-bold mb-6 flex items-center gap-2"><MessageSquare size={18}/> Patient Success Stories</h3>
           <div className="space-y-6">
              {testimonials.map((t, i) => (
                <div key={i} className="border-b border-indigo-500 pb-4 last:border-0">
                  <p className="text-sm font-medium mb-2">"{t.comment}"</p>
                  <p className="text-[10px] font-bold text-indigo-200 uppercase tracking-widest">— {t.name}</p>
                </div>
              ))}
           </div>
           {role === 'admin' && (
             <button className="mt-4 text-[10px] font-bold bg-white text-indigo-600 px-3 py-1 rounded-full uppercase">+ Add Testimonial</button>
           )}
        </div>
      </section>
    </div>
  );
}
