
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Providers from "./providers"; // Import the client component provider wrapper
import "../src/index.css"; // Import global styles (adjust path if index.css is moved)

const inter = Inter({ subsets: ["latin"] });

// Define metadataBase - Change this to your production URL
const siteUrl = process.env.NODE_ENV === 'production' 
  ? 'https://alpinald.site' // Replace with your actual production domain
  : 'http://localhost:3000';

// Metadata from index.html
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Alpinald - Profesjonalna firma budowlana w Łodzi | Kompleksowe usługi budowlane",
  description: "Alpinald - profesjonalna firma budowlana w Łodzi oferująca kompleksowe usługi budowlane, wykończenia wnętrz i instalacje. Obsługa budowlana dla inwestorów i deweloperów w Łodzi i województwie łódzkim.",
  keywords: "Alpinald, firma budowlana Łódź, usługi budowlane Łódź, wykończenia wnętrz Łódź, deweloper Łódź, instalacje, budownictwo Łódź",
  authors: [{ name: "Hubert Baleja" }],
  openGraph: {
    type: "website",
    url: "/", // Use relative URL, metadataBase will prefix it
    title: "Alpinald - Profesjonalna firma budowlana w Łodzi",
    description: "Kompleksowe usługi budowlane, wykończenia wnętrz i instalacje dla inwestorów i deweloperów w Łodzi i województwie łódzkim.",
    images: "/og-image.png", // Use relative URL, metadataBase will prefix it
  },
  twitter: {
    card: "summary_large_image",
    // url: "/", // Twitter often prefers absolute URLs, but metadataBase might handle it
    title: "Alpinald - Profesjonalna firma budowlana w Łodzi",
    description: "Kompleksowe usługi budowlane, wykończenia wnętrz i instalacje dla inwestorów i deweloperów w Łodzi i województwie łódzkim.",
    images: ["/og-image.png"], // Use relative URL, metadataBase will prefix it
  },
  // icons: '/favicon.ico' // Next.js handles favicon.ico in /app automatically
};

// Optional: Define viewport settings if needed
// export const viewport: Viewport = {
//   width: 'device-width',
//   initialScale: 1,
//   maximumScale: 1,
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl"> {/* Ensure no whitespace between <html> and <body> */}
      <body className={inter.className}>
         <Providers>{children}</Providers>
      </body>
    </html>
  );
}
