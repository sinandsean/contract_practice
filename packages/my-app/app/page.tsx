"use client";
import MainView from "@/app/components/views/MainView";
import { DAPP_PROVIDER_CONFIG } from "@/app/constants/config";
import queryClient from "@/app/utils/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { DAppProvider } from "@usedapp/core";

export default function Home() {
  return (
    <DAppProvider config={DAPP_PROVIDER_CONFIG}>
      <QueryClientProvider client={queryClient}>
        <main className="relative flex-col min-h-screen">
          <MainView />
        </main>
      </QueryClientProvider>
    </DAppProvider>
  );
}
