'use client';
import MyAccount from '../components/MyAccount';

export default function Home() {
  const user = { name: "Deepu Dillip", role: "admin" };
  return (
    <main className="min-h-screen bg-slate-50 pt-10">
      <MyAccount currentUser={user} />
    </main>
  );
}
