"use client";

import { useRouter } from "next/navigation";
import { Sparkles, Globe, Gavel } from "lucide-react";

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12 flex flex-col items-center justify-center text-center">
      <div className="space-y-6 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-sm text-purple-400 uppercase tracking-widest">
          <Sparkles className="h-4 w-4" />
          AI LEGAL INTELLIGENCE
        </div>

        <h1 className="text-4xl sm:text-2xl md:text-4xl font-extrabold leading-tight">
          Your Legal Co-Pilot. <br className="hidden sm:inline" />
          Understand your rights. Instantly.
          Powered by AI.
        </h1>

        <p className="text-lg sm:text-md text-gray-300">
          Ask questions about your rights, contracts, disputes, business, and more.
          Our AI Advisor gives fast, simple, and accurate legal insights — accessible from anywhere on Earth.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <button
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-4 text-lg font-semibold rounded-lg transition-colors"
            onClick={() => router.push("/ask")}
          >
            Ask a Legal Question
          </button>

          <button
            className="border-gray-700 text-gray-300 hover:bg-gray-800 px-6 py-4 text-lg font-semibold rounded-lg transition-colors"
            onClick={() => router.push("/about")}
          >
            How It Works
          </button>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3 text-sm text-gray-400">
          <div className="flex flex-col items-center">
            <Globe className="h-6 w-6 mb-2" />
            <p>Multi-jurisdictional Support</p>
          </div>
          <div className="flex flex-col items-center">
            <Gavel className="h-6 w-6 mb-2" />
            <p>Human Law + Machine Intelligence</p>
          </div>
          <div className="flex flex-col items-center">
            <Sparkles className="h-6 w-6 mb-2" />
            <p>Always Improving & Learning</p>
          </div>
        </div>

        <p className="mt-12 text-xs text-gray-500">
          ⚠️ This tool provides AI-generated insights and does not constitute legal advice. Please consult a licensed attorney for serious legal matters.
        </p>
      </div>
    </main>
  );
}
