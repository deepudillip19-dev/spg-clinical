'use client';
import React from 'react';
import { LayoutDashboard, Users, Calendar, ArrowUpRight } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-2">
        <LayoutDashboard className="text-indigo-600" /> Clinic Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Stats Card 1 */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
              <Users size={20} />
            </div>
            <span className="text-emerald-500 text-xs font-bold flex items-center bg-emerald-50 px-2 py-0.5 rounded-full">
              +12% <ArrowUpRight size={12} />
            </span>
          </div>
          <h3 className="text-slate-500 text-sm font-medium">Total Patients</h3>
          <p className="text-2xl font-bold text-slate-800">1,284</p>
        </div>

        {/* Stats Card 2 */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
              <Calendar size={20} />
            </div>
          </div>
          <h3 className="text-slate-500 text-sm font-medium">Today's Appointments</h3>
          <p className="text-2xl font-bold text-slate-800">14</p>
        </div>

        {/* Stats Card 3 */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="p-2 bg-orange-50 rounded-lg text-orange-600 w-fit mb-4">
            <Users size={20} />
          </div>
          <h3 className="text-slate-500 text-sm font-medium">New Enquiries</h3>
          <p className="text-2xl font-bold text-slate-800">5</p>
        </div>
      </div>
      
      <div className="mt-8 p-12 border-2 border-dashed border-slate-200 rounded-3xl text-center">
        <p className="text-slate-400 font-medium">Dashboard charts and activity feed will appear here.</p>
      </div>
    </div>
  );
}
