import type { Metadata } from "next";
import Sidebar from "../components/Sidebar";

export const metadata: Metadata = {
  title: "SPG Clinical",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-slate-50">
        <div className="flex">
          <Sidebar />
          <main className="ml-64 flex-1 min-h-screen">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
