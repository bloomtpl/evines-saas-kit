import { AuthLayoutShell } from "@/components/auth/auth-layout-shell";
import { SignInForm } from "@/components/auth/signin-form";

export default function SignInPage() {
  return (
    <AuthLayoutShell
      title="Welcome back"
      description="Enter your email to receive a magic link. No password needed."
    >
      <SignInForm />
    </AuthLayoutShell>
  );
}
