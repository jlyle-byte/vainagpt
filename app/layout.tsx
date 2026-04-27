import type { Metadata } from "next";
import { Playfair_Display, Lora } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const body = Lora({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vainagpt.com"),
  title: "Arturito — tu pana is here, ask me anything",
  description:
    "Chat with Arturito — tu pana. Your best Venezuelan-American friend, ride or die, gives advice on anything from heartbreak to debugging code. Warm, funny, no judgment.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Arturito — tu pana is here, ask me anything",
    description:
      "Tu pana. Ride or die. Solves everything with a Malta. Ask Arturito anything.",
    images: ["/og.png"],
    type: "website",
    url: "https://vainagpt.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arturito — tu pana is here, ask me anything",
    description:
      "Tu pana. Ride or die. Solves everything with a Malta. Ask Arturito anything.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
