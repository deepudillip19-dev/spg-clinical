'use client';
import React, { useState } from 'react';
import { User, Key, Save, Database, Github, HardDrive, Download } from 'lucide-react';

export default function MyAccount({ currentUser }: any) {
  const [name, setName] = useState(currentUser?.name || "Admin User");
  const [success, setSuccess] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-6 font-sans">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold flex items-center gap-2 mb-6 text-slate-800">
          <User className="text-indigo-600" /> Account Settings
        </h2>
        
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-500 mb-1">FULL NAME</label>
            <input 
              className="w-full p-3 border rounded-xl bg-slate-50" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
          </div>
          <button type="submit" className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700 transition">
            {success ? "Success!" : "Save Changes"}
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
          <HardDrive className="text-indigo-600 mb-2" />
          <h3 className="font-bold text-slate-800">Backup Data</h3>
          <p className="text-xs text-slate-500 mb-4">Download your clinical records as JSON.</p>
          <button className="w-full py-2 bg-white border border-indigo-200 rounded-lg text-xs font-bold flex items-center justify-center gap-2">
            <Download size={14}/> Export Now
          </button>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl text-white">
          <Github className="text-white mb-2" />
          <h3 className="font-bold">GitHub Sync</h3>
          <p className="text-[10px] text-slate-400 font-mono mt-2 break-all">
            https://github.com/deepudillip19-dev/spg-clinical.git
          </p>
        </div>
      </div>
    </div>
  );
}
