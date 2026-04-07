import type { Metadata } from "next";
import { Montserrat, Playfair_Display, Poppins } from "next/font/google";
import AOSProvider from "@/components/AOSProvider";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";
import "aos/dist/aos.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "WITH SOERAI | Woman Illuminating Through Harmony",
    template: "%s | WITH SOERAI",
  },
  description:
    "WITH SOERAI adalah komunitas pemberdayaan perempuan muda Indonesia Timur melalui capacity building, mentorship, dan kepemimpinan berbasis komunitas.",
  keywords: [
    "WITH SOERAI",
    "women empowerment",
    "Indonesia Timur",
    "mentorship perempuan",
    "komunitas perempuan muda",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${poppins.variable} ${montserrat.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="ambient-backdrop min-h-full overflow-x-clip">
        <LanguageProvider>
          <AOSProvider />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
