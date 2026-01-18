import Logo from "@/components/ui/logo";
import { AuthTestimonial } from "./auth-testimonial";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

export function AuthLayoutShell({
  children,
  title,
  description,
}: AuthLayoutProps) {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2 bg-black">
      <div className="relative hidden lg:flex flex-col justify-between p-12 overflow-hidden border-r border-zinc-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(40,40,40,1)_0%,rgba(0,0,0,1)_100%)]" />
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        </div>

        <div className="relative z-10">
          <Logo />
        </div>

        <div className="relative z-10">
          <AuthTestimonial
            quote="Evines is exactly what we needed to scale our infrastructure without the headache."
            author="Marcus Thorne"
            role="CTO at ShipIt"
          />
        </div>
      </div>

      <div className="flex items-center justify-center p-8 md:p-12">
        <div className="w-full max-w-[400px] space-y-8">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-4xl font-bold tracking-tighter text-white">
              {title}
              <span className="text-zinc-700">.</span>
            </h1>
            <p className="text-zinc-500 text-sm">{description}</p>
          </div>

          {children}

          <p className="text-center text-xs text-zinc-600 leading-relaxed">
            By clicking continue, you agree to our{" "}
            <a
              href="/terms"
              className="underline underline-offset-4 hover:text-zinc-300"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="/privacy"
              className="underline underline-offset-4 hover:text-zinc-300"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
