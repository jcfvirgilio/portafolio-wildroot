import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WILDROOT — A living digital world",
  description:
    "Una experiencia web conceptual inspirada en mundos naturales: arte digital, interacción y desarrollo frontend.",
  openGraph: {
    title: "WILDROOT — A living digital world",
    description: "Una experiencia inmersiva creada como ejercicio de portafolio frontend.",
    type: "website",
    images: ["/images/hero-landscape.webp"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#30362f",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
