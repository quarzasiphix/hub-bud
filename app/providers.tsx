'use client';

import { ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@/components/ui/tooltip'; // Use path alias
import { Toaster } from '@/components/ui/toaster'; // Use path alias
import { Toaster as Sonner } from '@/components/ui/sonner'; // Use path alias
import { HelmetProvider } from 'react-helmet-async';

export default function Providers({ children }: { children: ReactNode }) {
  // Initialize React Query client here to ensure it's only created once per request on the client
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          {children}
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
} 