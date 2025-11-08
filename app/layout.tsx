import "./globals.css";
import Navbar from "../components/Navbar";
import { Poppins } from "next/font/google";
import { Providers } from "./providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "My Portfolio",
  description: "Personal portfolio website built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* ✅ Gunakan class bg-background & text-foreground dari @theme */}
      <body
        className={`${poppins.className} bg-background text-foreground transition-colors duration-300`}
      >
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
