import type { Metadata } from "next";
import "@/styles/globals.css";
import { TranslationProvider } from "@/context/TranslationContext";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sarkar Press | Modern Printing Solutions",
  description:
    "Modern commercial, custom, and large-format printing from Sarkar Press with premium quality, fast delivery, and reliable service.",
  keywords:
    "printing press, commercial printing, banner printing, flex printing, custom printing, West Bengal, Patashpur",
  icons: {
    icon: "/Favicon.jpg",
    apple: "/Favicon.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <TranslationProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </TranslationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
