"use client";

import { useState, useEffect, useRef } from "react";
import { askLegalAI } from "@/lib/openai";

export default function Dashboard() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isListening, setIsListening] = useState(false);

  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && "webkitSpeechRecognition" in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = "en-US";

      recognition.onstart = () => setIsListening(true);
      recognition.onend = () => setIsListening(false);
      recognition.onerror = (e: any) => {
        console.error(e);
        setIsListening(false);
      };
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setQuestion((prev) => prev + " " + transcript);
      };

      recognitionRef.current = recognition;
    }
  }, []);

  const startListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.start();
    }
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setAnswer("");
    setError("");

    if (!question.trim()) {
      setError("Please enter a legal question.");
      setLoading(false);
      return;
    }

    try {
      const res = await askLegalAI(question);
      console.log("AI response:", res); // <-- add this
      setAnswer(res);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-10">
      <div className="max-w-2xl w-full bg-zinc-900 p-6 rounded-2xl shadow-lg border border-zinc-700">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">
          AI Legal Advisor
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            className="w-full p-4 bg-zinc-800 text-white border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-zinc-400"
            rows={5}
            placeholder="Type or speak your legal question..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <div className="flex justify-between items-center gap-4">
            <button
              type="button"
              onClick={startListening}
              className={`flex-1 bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg transition duration-200 ${
                isListening ? "animate-pulse" : ""
              }`}
            >
              {isListening ? "Listening..." : "🎙 Speak"}
            </button>
            <button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200"
              disabled={loading}
            >
              {loading ? "Thinking..." : "Submit"}
            </button>
          </div>
        </form>

        {error && <div className="mt-4 text-red-500 font-medium">{error}</div>}

        {answer && (
          <div className="mt-6 p-5 bg-zinc-800 text-zinc-200 border border-zinc-700 rounded-xl">
            <h3 className="font-semibold text-lg mb-2 text-white">
              AI Response:
            </h3>
            <p className="whitespace-pre-line leading-relaxed">{answer}</p>
          </div>
        )}
      </div>
    </div>
  );
}
