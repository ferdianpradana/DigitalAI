// News Data IO
import { ArticleResponse } from "../types/tiga";
export async function fetchThre( page: number, search: string ): Promise<ArticleResponse> {
  const ApiKey = process.env.NEXT_PUBLIC_MAILCHIMP_PUBLIC_API_KEY3 as string;
  const keyword = search.trim() === "" ? "artificial intelligence" : search;
  const params = new URLSearchParams({
    api_token: ApiKey,
    language: "en",
    categories: "tech",
    page: page.toString(),
    search: keyword,
  });
  const response = await fetch(
    `https://api.thenewsapi.com/v1/news/all?${params.toString()}`,
    {
      method: "GET",
      headers: {
        "X-ACCESS-KEY": ApiKey,
      },
    }
  );
  if (!response.ok) throw new Error("❌ Error fetching:" + response.status);
  const json = await response.json();
  console.log(json);
  return json;
}
