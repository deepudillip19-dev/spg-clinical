'use client';
import React, { useState } from 'react';
import { Users, Search, Plus } from 'lucide-react';

export default function PatientsPage() {
  const [patients] = useState([
    { id: 1, name: "John Doe", condition: "Back Pain", lastVisit: "2024-05-20" },
    { id: 2, name: "Jane Smith", condition: "Shoulder Injury", lastVisit: "2024-05-21" },
  ]);

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Users className="text-indigo-600" /> Patient Directory
        </h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 font-bold">
          <Plus size={18} /> Add Patient
        </button>
      </div>

      <div className="bg-white border rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b">
            <tr>
              <th className="p-4 text-xs font-bold text-slate-500">NAME</th>
              <th className="p-4 text-xs font-bold text-slate-500">CONDITION</th>
              <th className="p-4 text-xs font-bold text-slate-500">LAST VISIT</th>
            </tr>
          </thead>
          <tbody>
            {patients.map(p => (
              <tr key={p.id} className="border-b hover:bg-slate-50 transition">
                <td className="p-4 font-medium">{p.name}</td>
                <td className="p-4 text-slate-600">{p.condition}</td>
                <td className="p-4 text-slate-500">{p.lastVisit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
