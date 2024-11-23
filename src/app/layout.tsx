import type { Metadata } from "next";
import "./globals.css";

import { Nunito_Sans } from "next/font/google";

const mainFont = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mikey's Website",
  description: "Mikey's Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mainFont.className} antialiased`}>{children}</body>
    </html>
  );
}
