// @/app/layout.js

import { Archivo, Cormorant_Garamond, Noto_Serif_JP } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "@/styles/reset.css";
import "./globals.scss";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-sans-en",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif-en",
});

const notoSerifJp = Noto_Serif_JP({
  weight: ["400", "600", "900"],
  subsets: ["latin"],
  variable: "--font-serif-ja",
});

export const metadata = {
  title: "Drama Archive | powered by Next.js",
  description: "海外ドラマのレビューをまとめた個人アーカイブ",
};

export default function RootLayout({ children }) {
  return (
    <html 
      lang="ja"
      className={`
        ${archivo.variable}
        ${cormorant.variable}
        ${notoSerifJp.variable}
      `}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}