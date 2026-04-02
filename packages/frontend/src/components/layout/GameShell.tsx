import type { ReactNode } from "react";
import { TopBar } from "./TopBar";

export function GameShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <TopBar />
      <main className="flex flex-1 items-center justify-center p-6">
        {children}
      </main>
    </div>
  );
}
