import type { Metadata } from "next";
import "@fontsource/geist/400.css";
import "@fontsource/geist/700.css";
import "@fontsource/geist-mono/400.css";
import "@fontsource/geist-mono/700.css";
import "./globals.css";
import AuthButton from "@/components/AuthButton";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "RPTracker",
  description: "Remedial Performance Tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-[Geist]">
        <Providers>
          <div className="absolute top-4 right-4 z-50">
            <AuthButton />
          </div>
          {children}
        </Providers>
      </body>
    </html>
  );
}
