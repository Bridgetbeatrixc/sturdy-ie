import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Jason Sturdy | Data Governance & Regulatory Compliance Advisor",
  description:
    "Portfolio of Jason Sturdy, specialising in data governance, regulatory compliance, and secure data collaboration environments across highly regulated industries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased bg-[radial-gradient(circle_at_center,rgba(197,240,24,0.2),transparent_70%)] bg-neutral-950 text-zinc-100`}
      >
        <div className="flex min-h-screen justify-center">
          {children}
        </div>
      </body>
    </html>
  );
}
