import type { Metadata } from "next";
import { Montserrat, Playfair_Display, Poppins } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

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
  icons: {
    icon: "/images/logo-withsoerai.png",
    shortcut: "/images/logo-withsoerai.png",
    apple: "/images/logo-withsoerai.png",
  },
  openGraph: {
    title: "WITH SOERAI | Woman Illuminating Through Harmony",
    description:
      "WITH SOERAI adalah komunitas pemberdayaan perempuan muda Indonesia Timur melalui capacity building, mentorship, dan kepemimpinan berbasis komunitas.",
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "/images/logo-withsoerai.png",
        width: 370,
        height: 92,
        alt: "WITH SOERAI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WITH SOERAI | Woman Illuminating Through Harmony",
    description:
      "WITH SOERAI adalah komunitas pemberdayaan perempuan muda Indonesia Timur melalui capacity building, mentorship, dan kepemimpinan berbasis komunitas.",
    images: ["/images/logo-withsoerai.png"],
  },
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
      <body className="ambient-backdrop min-h-full">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
