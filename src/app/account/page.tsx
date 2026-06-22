'use client';
import MyAccount from '../../components/MyAccount';

export default function AccountPage() {
  const user = { name: "Deepu Dillip", role: "admin" };
  
  return (
    <div className="min-h-screen bg-slate-50 pt-10">
      <MyAccount currentUser={user} />
    </div>
  );
}
