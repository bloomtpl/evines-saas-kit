import { SuccessDisplay } from "@/components/billing/success-display";
import { Suspense } from "react";

export default function SuccessPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black px-6">
      <Suspense
        fallback={
          <div className="text-white font-mono animate-pulse">
            Verifying Transaction...
          </div>
        }
      >
        <SuccessDisplay />
      </Suspense>
    </main>
  );
}
