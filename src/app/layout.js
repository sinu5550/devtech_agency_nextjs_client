import { Inter, Fraunces, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollToTop from "../components/layout/ScrollToTop";
import { ThemeProvider } from "../components/ThemeProvider";
import FloatingContact from "@/components/shared/FloatingContact";
import { ReactLenis } from "lenis/react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DevTech Agency — Engineering Digital Products",
  description:
    "DevTech IT Agency engineers high-performance web apps, mobile products, and digital experiences with precision and scale.",
  keywords: [
    "DevTech",
    "IT Agency",
    "Web Development",
    "Next.js",
    "React",
    "Software Architecture",
  ],
  openGraph: {
    title: "DevTech Agency — Engineering Digital Products",
    description:
      "High-performance web apps, mobile products, and digital experiences.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${fraunces.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange={false}
          >
            <ScrollToTop />
            <Navbar />
            <main>{children}</main>
            <Footer />
            {/* <FloatingContact /> */}
          </ThemeProvider>
        </ReactLenis>
      </body>
    </html>
  );
}
