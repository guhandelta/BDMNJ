import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components";
import localFont from '@next/font/local'

const Anurati = localFont({
  src: '../public/fonts/Anurati.otf',
  variable: '--font-anurati',
})

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BDMNJ",
  description: "Busness",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-scroll overflow-y-scroll no-scrollbar ">
        <Header className="z-20 border border-dashed border-black" />
        {children}
      </body>
    </html>
  );
}
