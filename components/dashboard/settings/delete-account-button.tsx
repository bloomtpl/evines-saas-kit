"use client";

import { deleteAccount } from "@/app/actions/delete-account";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Loader2, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function DeleteAccountButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await deleteAccount();
      toast.success("Account deleted successfully.");
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while deleting your account.");
      setIsLoading(false);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className="border-rose-900/50 text-rose-500 hover:bg-rose-950/30 hover:text-rose-400 rounded-xl transition-all"
        >
          <Trash2 className="mr-2 h-4 w-4" />
          Delete Account
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent className="bg-zinc-950 border-zinc-900 rounded-3xl">
        <AlertDialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-full bg-rose-500/10 text-rose-500">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <AlertDialogTitle className="text-xl font-bold tracking-tight text-white">
              Are you absolutely sure?
            </AlertDialogTitle>
          </div>
          <AlertDialogDescription className="text-zinc-400 leading-relaxed">
            This action is{" "}
            <span className="text-white font-semibold italic">permanent</span>.
            All your data, projects, and active subscriptions will be wiped from
            our systems forever. There is no way to undo this.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter className="mt-6">
          <AlertDialogCancel className="bg-transparent border-zinc-800 text-zinc-400 hover:bg-zinc-900 hover:text-white rounded-xl">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            className="bg-rose-600 text-white hover:bg-rose-500 rounded-xl font-bold transition-all border-none"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              "Yes, delete everything"
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
