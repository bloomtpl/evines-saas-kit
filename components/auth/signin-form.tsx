"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Mail } from "lucide-react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SiGithub, SiGoogle } from "react-icons/si";

export function SignInForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState<string | null>(null);
  const [demoLoading, setDemoLoading] = useState(false);

  const handleEmailSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;

    try {
      const result = await signIn("resend", {
        email,
        callbackUrl: "/dashboard",
        redirect: false,
      });

      if (result?.ok) {
        router.push("/verify-request");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialSignIn = async (provider: string) => {
    setSocialLoading(provider);
    try {
      await signIn(provider, { callbackUrl: "/dashboard" });
    } catch (error) {
      console.error(error);
    } finally {
      setSocialLoading(null);
    }
  };

  const handleDemoSignIn = async () => {
    setDemoLoading(true);
    try {
      await signIn("demo", { callbackUrl: "/dashboard" });
    } catch (error) {
      console.error(error);
    } finally {
      setDemoLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <Button
        onClick={handleDemoSignIn}
        disabled={demoLoading || !!socialLoading || isLoading}
        className="relative group w-full h-14 bg-zinc-900 border border-zinc-800 hover:border-violet-500/50 rounded-xl text-zinc-400 hover:text-white transition-all duration-300 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        {demoLoading ? (
          <Loader2 className="h-4 w-4 animate-spin text-violet-500" />
        ) : (
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-widest">
              Explore Live Demo
            </span>
            <div className="px-2 py-0.5 bg-violet-500 rounded text-[10px] font-bold text-white uppercase tracking-tighter">
              Instant
            </div>
          </div>
        )}
      </Button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-zinc-900" />
        </div>
        <div className="relative flex justify-center text-[10px] uppercase tracking-widest text-zinc-600">
          <span className="bg-black px-4 font-mono">
            Or use your own account
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button
          variant="outline"
          className="bg-zinc-900/50 border-zinc-800 hover:bg-zinc-800 h-12 rounded-xl text-white font-bold"
          onClick={() => handleSocialSignIn("github")}
          disabled={!!socialLoading || demoLoading}
        >
          {socialLoading === "github" ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <>
              <SiGithub className="mr-2 h-4 w-4" />
              GitHub
            </>
          )}
        </Button>
        <Button
          variant="outline"
          className="bg-zinc-900/50 border-zinc-800 hover:bg-zinc-800 h-12 rounded-xl text-white font-bold"
          onClick={() => handleSocialSignIn("google")}
          disabled={!!socialLoading || demoLoading}
        >
          {socialLoading === "google" ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <>
              <SiGoogle className="mr-2 h-4 w-4" />
              Google
            </>
          )}
        </Button>
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-zinc-900" />
        </div>
      </div>

      <form onSubmit={handleEmailSignIn} className="space-y-4">
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
          <Input
            name="email"
            placeholder="name@company.com"
            type="email"
            required
            className="bg-zinc-900/50 border-zinc-800 text-white h-12 pl-11 focus:ring-zinc-700 focus:border-zinc-700 rounded-xl"
          />
        </div>

        <Button
          type="submit"
          disabled={isLoading || !!socialLoading || demoLoading}
          className="w-full h-12 bg-white text-black hover:bg-zinc-200 rounded-xl font-bold transition-all"
        >
          {isLoading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            "Send Magic Link"
          )}
        </Button>
      </form>
    </div>
  );
}
