"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What exactly do I get when I purchase?",
    answer:
      "You get full access to the source code of the boilerplate, including the Next.js frontend, Stripe billing logic, Auth.js setup, Prisma schema, and all premium UI components. You also get life-time updates and access to our private Discord.",
  },
  {
    question: "Is it a one-time payment or a subscription?",
    answer:
      "The template is a one-time purchase. Once you buy it, you own it forever. No recurring fees, no hidden costs. You can use it for unlimited personal and commercial projects.",
  },
  {
    question: "Which technologies are used?",
    answer:
      "We use the latest industry standards: Next.js 16 (App Router), Tailwind CSS 4.0, Prisma ORM, PostgreSQL, Stripe for payments, and Auth.js (NextAuth) for secure authentication.",
  },
  {
    question: "Do you offer support if I get stuck?",
    answer:
      "Absolutely. You'll get access to our dedicated Discord community where you can ask questions. We also provide comprehensive documentation covering every aspect of the setup.",
  },
  {
    question: "Can I use this for my clients' projects?",
    answer:
      "Yes! The license allows you to build and host websites for your clients. You can build as many SaaS products as you want with a single license.",
  },
  {
    question: "Is there a refund policy?",
    answer:
      "Due to the digital nature of the product (access to source code), we generally don't offer refunds. However, if you have any issues, we'll do everything we can to help you resolve them.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2 text-zinc-500 font-mono text-xs tracking-[0.3em] uppercase">
              <span className="w-8 h-[1px] bg-zinc-800" />
              Support
            </div>
            <h2 className="text-5xl font-bold tracking-tighter leading-none">
              Common <br />
              <span className="text-zinc-700 italic font-medium NOT-italic">
                Questions.
              </span>
            </h2>
            <p className="text-zinc-500 text-sm max-w-sm leading-relaxed">
              Can&apos;t find the answer you&apos;re looking for? Reach out to
              our team via
              <span className="text-white font-bold ml-1 cursor-pointer hover:underline underline-offset-4 transition-all italic">
                Discord support.
              </span>
            </p>
            <div className="pt-8">
              <div className="p-6 rounded-2xl border border-zinc-900 bg-zinc-950/50 flex items-start gap-4">
                <HelpCircle className="w-5 h-5 text-zinc-600 mt-1" />
                <div>
                  <h3 className="text-sm font-bold">Need more help?</h3>
                  <p className="text-xs text-zinc-600 mt-1 font-medium italic">
                    Response time: &lt; 12 hours
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="w-full space-y-2">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-zinc-900 px-2 hover:bg-zinc-950/50 transition-colors rounded-xl"
                >
                  <AccordionTrigger className="text-left py-6 hover:no-underline font-bold tracking-tight text-zinc-200 hover:text-white transition-all">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-500 leading-relaxed text-sm pb-6 italic">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
