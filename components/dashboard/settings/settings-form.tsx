"use client";

import { updateProfile } from "@/app/actions/update-profile";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Save, User } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function SettingsForm({ defaultName }: { defaultName: string }) {
  const [isPending, setIsPending] = useState(false);

  return (
    <form
      action={async (formData) => {
        setIsPending(true);
        try {
          const result = await updateProfile(formData);
          if (result?.success) {
            toast.success("Profile updated successfully");
          } else if (result?.error) {
            toast.error(result.error);
          }
        } catch {
          toast.error("An unexpected error occurred");
        } finally {
          setIsPending(false);
        }
      }}
      className="space-y-6 max-w-xl"
    >
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-500 ml-1">
            Display Name
          </label>
          <div className="relative group">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-600 group-focus-within:text-white transition-colors" />
            <Input
              name="name"
              defaultValue={defaultName}
              disabled={isPending}
              placeholder="Your name"
              className="bg-zinc-900/50 border-zinc-800 text-white h-12 pl-12 rounded-xl focus:ring-zinc-700 focus:border-zinc-700 transition-all"
            />
          </div>
          <p className="text-[11px] text-zinc-600 ml-1">
            This is how you will appear to other team members.
          </p>
        </div>
      </div>

      <Button
        type="submit"
        disabled={isPending}
        className="bg-white text-black hover:bg-zinc-200 h-11 px-8 rounded-xl font-bold transition-all disabled:opacity-50"
      >
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Saving...
          </>
        ) : (
          <>
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </>
        )}
      </Button>
    </form>
  );
}
