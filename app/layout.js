import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title:
    "SICE Computer Institute - Rairangpur | Quality Computer Education Since 2011",
  description:
    "Shibam Institute of Computer Education (SICE) provides quality computer education in Rairangpur. Offering courses in CCA, DCA, PGDCA, APGDCA, and various programming languages.",
  keywords:
    "SICE, computer education, Rairangpur, computer institute, programming courses, DCA, PGDCA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
