// lib/openai.ts

export async function askLegalAI(prompt: string): Promise<string> {
  const res = await fetch('/api/ask', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prompt }),
  });

  const data = await res.json();

  if (!res.ok || !data.answer) {
    throw new Error(data.error || 'Unknown error');
  }

  return data.answer;
}
