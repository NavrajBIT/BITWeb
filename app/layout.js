import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Beyond Imagination Technologies",
  description:
    "Beyond Imagination Tech: Unleashing innovation through cutting-edge solutions. Explore transformative technologies, blockchain applications, and revolutionary platforms. Join the journey of limitless discovery and innovation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
