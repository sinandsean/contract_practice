"use client";
import MainView from "@/app/components/views/MainView";
import { DAPP_PROVIDER_CONFIG } from "@/app/constants/config";
import { DAppProvider } from "@usedapp/core";

export default function Home() {
  return (
    <DAppProvider config={DAPP_PROVIDER_CONFIG}>
      <main className="relative flex-col min-h-screen">
        <MainView />
      </main>
    </DAppProvider>
  );
}
