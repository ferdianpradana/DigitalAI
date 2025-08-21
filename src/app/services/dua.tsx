// World News Api
import { Article } from "../types/dua";

export async function fetchTwo(page: number, search: string): Promise<Article> {
  const ApiKey = process.env.NEXT_PUBLIC_MAILCHIMP_PUBLIC_API_KEY2 as string;

  const keyword = search.trim() === "" ? "artificial intelligence" : search;

  const params = new URLSearchParams({
    text: keyword,
    language: "en",
    "earliest-publish-date": "2025-08-10",
    "text-match-indexes": "title",
    offset: String((page - 1) * 10), // biar pagination kepake
    number: "10"
  });

  const response = await fetch(
    `https://api.worldnewsapi.com/search-news?${params.toString()}`,
    {
      method: "GET",
      headers: {
        "x-api-key": ApiKey,
      },
    }
  );

  if (!response.ok) {
    let errorMsg = `Network error: ${response.status}`;
    try {
      const errData = await response.json();
      errorMsg = errData.message || errData.error || errorMsg;
    } catch {
    }
    throw new Error(errorMsg);
  }

  const json = await response.json();
  console.log(json);
  return json;
}
