'use client';

import { useEffect } from "react";
import Link from 'next/link'; // Use Next.js Link

// Metadata can be exported directly from not-found.tsx
// import type { Metadata } from 'next'
// export const metadata: Metadata = {
//   title: 'Strona nie znaleziona | HubBud',
//   description: 'Przepraszamy, nie mogliśmy znaleźć tej strony.',
//   robots: { index: false, follow: false },
// }

export default function NotFound() {
  // Logging the path requires knowing it. In App Router, this isn't directly available
  // in the not-found component easily without involving parent layouts or middleware.
  // For simplicity, let's remove the path-specific logging for now.
  useEffect(() => {
    console.error("404 Error: User attempted to access a non-existent route.");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Helmet is not needed, metadata can be exported */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Nie znaleziono strony</p>
        <Link href="/" className="text-blue-500 hover:text-blue-700 underline">
          Wróć do strony głównej
        </Link>
      </div>
    </div>
  );
} 