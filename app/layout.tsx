import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gaurav | Backend Developer & Software Engineer",
  description:
    "Portfolio of Gaurav — Backend Developer and Software Engineer specializing in scalable systems, APIs, and modern web applications.",
  openGraph: {
    title: "Gaurav | Backend Developer & Software Engineer",
    description:
      "Hi, I'm Gaurav — a Software Engineer with a passion for building scalable systems, robust APIs, and modern web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="noise-overlay" />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
