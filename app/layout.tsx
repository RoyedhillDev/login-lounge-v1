import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Login Lounge",
  description: "Auth starter with Next.js + Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Add your font links in <head> via next/font or manual link if you want */}
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
