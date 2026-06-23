'use client';
import React, { useState } from 'react';
import { User, Key, Phone, Save, ShieldCheck } from 'lucide-react';

export default function MyAccount({ currentUser }: any) {
  const [name, setName] = useState(currentUser?.name || "");
  const [phone, setPhone] = useState(currentUser?.phone || "9840XXXXXX");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    setMsg("Processing Security Update...");
    // Simulate API Call
    setTimeout(() => setMsg("Account & Security Settings Updated Successfully!"), 1500);
  };

  return (
    <div className="p-8 max-w-2xl mx-auto space-y-6">
      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-indigo-600 rounded-2xl text-white">
            <User size={24} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-800">Profile Settings</h2>
            <p className="text-slate-500 text-xs uppercase font-bold tracking-wider">{currentUser?.role} Account</p>
          </div>
        </div>

        <form onSubmit={handleUpdate} className="space-y-5">
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-400 ml-1">FULL NAME</label>
            <input 
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-400 ml-1">MOBILE NUMBER (FOR OTP)</label>
            <div className="relative">
              <Phone size={16} className="absolute left-4 top-4 text-slate-400" />
              <input 
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl" 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-400 ml-1">NEW PASSWORD</label>
            <div className="relative">
              <Key size={16} className="absolute left-4 top-4 text-slate-400" />
              <input 
                type="password"
                placeholder="Leave blank to keep current"
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
            </div>
          </div>

          {msg && <p className="text-emerald-600 text-xs font-bold text-center bg-emerald-50 py-2 rounded-lg">{msg}</p>}

          <button type="submit" className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition">
            <Save size={18} /> Save Profile Changes
          </button>
        </form>
      </div>
    </div>
  );
}
