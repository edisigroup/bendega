import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Menu } from "./components/menu";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"], // Specify the weights you plan to use
});

export const metadata: Metadata = {
  title: "Bendega Bali",
  description: "| Edisi Group",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Menu />
        {children}
      </body>
    </html>
  );
}
