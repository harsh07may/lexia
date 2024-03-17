import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import "@/styles/globals.css";

const nunito = Nunito({ subsets: ["latin"] });

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lexia | Language Learning ",
  description: "Learn Languages easily.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
