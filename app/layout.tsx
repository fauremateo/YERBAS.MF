import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mayorista de Yerba Mate | YERBAS.MF",
  description:
    "Venta mayorista de yerba mate. Canarias, Rey Verde, Baldo, Sara y muchas más. Envíos a todo el país.",
  keywords: [
    "yerba mate mayorista",
    "venta de yerba mate por mayor",
    "yerba mate Santa Fe",
    "distribuidor de yerba mate",
    "Canarias yerba mate",
    "Rey Verde yerba mate",
  ],
  openGraph: {
    title: "Mayorista de Yerba Mate | YERBAS.MF",
    description:
      "Venta mayorista de yerba mate. Canarias, Rey Verde, Baldo, Sara y muchas más. Envíos a todo el país.",
    type: "website",
    locale: "es_AR",
    images: ["/images/logo.png"],
  },
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${poppins.variable} font-sans bg-cream text-forest-dark antialiased`}>
        {children}
      </body>
    </html>
  );
}
