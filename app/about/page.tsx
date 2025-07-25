"use client";

// import { Separator } from "@/components/ui/separator";
import { Gavel, ShieldCheck, Brain, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12 flex flex-col items-center text-center">
      {/* an absolute button to go back to the home page */}
      <div className="absolute top-10 left-4">
        <a href="/" className="text-purple-400 hover:underline">
          ← Back to Home
        </a>
      </div>
      <div className="max-w-4xl space-y-8">
        <h1 className="text-4xl sm:text-5xl font-bold">About the AI Legal Advisor</h1>
        <p className="text-gray-300 text-lg">
          We’re building a world where legal knowledge is accessible, understandable, and affordable — for everyone, everywhere.
        </p>

        {/* <Separator className="bg-gray-700" /> */}
        <section className="space-y-6 text-left">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <Gavel className="w-6 h-6 text-purple-400" />
            Our Mission
          </h2>
          <p className="text-gray-400">
            We aim to democratize legal knowledge by leveraging AI to provide fast, accurate, and accessible legal insights. Our goal is to empower individuals and businesses with the information they need to navigate legal challenges confidently.
          </p>
        </section>

        <section className="space-y-6 text-left">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <Brain className="w-6 h-6 text-purple-400" />
            How It Works
          </h2>
          <p className="text-gray-400">
            This platform uses cutting-edge AI to understand your legal questions and respond with insights that reflect global legal concepts. It’s designed to be fast, secure, and helpful — whether you're a student, founder, freelancer, tenant, or professional.
          </p>
          <p className="text-gray-400">
            While it’s not a replacement for legal counsel, it can explain legal terms, analyze situations, and point you in the right direction.
          </p>
        </section>

        <section className="space-y-6 text-left mt-12">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <Globe className="w-6 h-6 text-purple-400" />
            Built for a Global Audience
          </h2>
          <p className="text-gray-400">
            We believe that access to legal understanding shouldn't depend on location, income, or background. Our goal is to support users in multiple jurisdictions, languages, and regions — while constantly improving our knowledge base.
          </p>
        </section>

        <section className="space-y-6 text-left mt-12">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-purple-400" />
            Privacy & Safety
          </h2>
          <p className="text-gray-400">
            We don’t store your legal queries unless you opt in. Our system is built with security and discretion in mind — because legal matters are personal, and your data should stay that way.
          </p>
        </section>

        <section className="space-y-4 text-sm text-gray-500 mt-16 border-t border-gray-800 pt-8">
          <h3 className="font-medium text-gray-400">Disclaimer</h3>
          <p>
            This AI advisor is an experimental tool. It does not provide official legal advice and is not a substitute for consultation with a licensed attorney in your region.
          </p>
          <p>
            Always verify any advice or interpretation of law through a legal professional.
          </p>
        </section>
      </div>
    </main>
  );
}
