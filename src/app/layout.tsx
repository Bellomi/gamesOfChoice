import './globals.css'
import type { Metadata } from 'next'
import { Outfit } from "next/font/google";
import { Header } from "./components/Header";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GameSphere",
  description: "Find and save your games",
  keywords: ["games", "jogo", "favourites"],
  openGraph: {
    images: [`${process.env.PROJECT_URL}/preview.png`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
