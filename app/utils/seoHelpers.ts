// app/utils/seoHelpers.ts
export async function fetchKeywords(query: string): Promise<string[]> {
  const response = await fetch(
    `https://serpapi.com/search?engine=google_autocomplete&q=${encodeURIComponent(query)}&api_key=${process.env.SERPAPI_KEY}`
  );
  const data = await response.json();
  // SerpApi returns suggestions array
  return data.suggestions?.map((s: any) => s.value) || [];
}

export async function fetchFAQs(query: string): Promise<{ q: string; a: string }[]> {
  const response = await fetch(
    `https://serpapi.com/related-questions?q=${encodeURIComponent(query)}&api_key=${process.env.SERPAPI_KEY}`
  );
  const data = await response.json();
  // Format questions and answers
  return (data.questions || []).map((q: any) => ({
    q: q.question,
    a: q.answer || "Click link for details",
  }));
}
