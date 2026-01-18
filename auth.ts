import { htmlTemplate, sendWelcomeEmail } from "@/lib/mail";
import prisma from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import ResendProvider from "next-auth/providers/resend";
import { Resend } from "resend";

const resend = new Resend(process.env.AUTH_RESEND_KEY);

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      id: "demo",
      async authorize() {
        const randomId = Math.random().toString(36).substring(7);

        const demoUser = await prisma.user.create({
          data: {
            email: `demo-${randomId}@example.com`,
            name: `Guest ${randomId}`,
            plan: "FREE",
            image: `https://api.dicebear.com/7.x/avataaars/svg?seed=${randomId}`,
          },
        });
        return demoUser;
      },
    }),
    ResendProvider({
      apiKey: process.env.AUTH_RESEND_KEY,
      from: process.env.EMAIL_FROM,
      async sendVerificationRequest({ identifier: email, url, provider }) {
        const { host } = new URL(url);

        const fromEmail =
          provider.from || process.env.EMAIL_FROM || "onboarding@resend.dev";

        try {
          const { error } = await resend.emails.send({
            from: fromEmail,
            to: email,
            subject: `Sign in to ${host}`,
            html: htmlTemplate({ url, host }),
            text: `Sign in to ${host}\n${url}\n\n`,
          });

          if (error) throw new Error(error.message);
        } catch (error) {
          console.error("ERREUR_ENVOI_MAGIC_LINK", error);
          throw new Error("Could not send magic link");
        }
      },
    }),
    Google,
    GitHub,
  ],
  events: {
    async createUser({ user }) {
      if (user.email) {
        try {
          await sendWelcomeEmail(user.email, user.name ?? undefined);
        } catch (error) {
          console.error("❌ Erreur envoi email bienvenue:", error);
        }
      }
    },
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id as string;
        token.plan = user.plan as string | undefined;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.plan = token.plan;
      }
      return session;
    },
  },
});
