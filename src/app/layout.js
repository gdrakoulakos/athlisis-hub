import "./globals.css";
import { Providers } from "@/app/providers";
import { Suspense } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { DM_Sans } from "next/font/google";

const fonts = DM_Sans({
  weight: ["300"], // you can adjust weights
  subsets: ["latin"], // specify subsets
  display: "swap", // optional, improves font loading
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fonts.className}>
        <Providers>
          <Header />
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
