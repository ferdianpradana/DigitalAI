// newsapi
import { Article } from "../types/satu";
export async function fetchOne(page: number, search: string): Promise<Article> {
  const keyword = search.trim() === "" ? "artificial intelligence" : search;
  const body = {
    action: "getArticles",
    keyword,
    keywordLoc:"title",
    isDuplicateFilter: "skipDuplicates",
    sourceLocationUri: [
      "http://en.wikipedia.org/wiki/United_States",
      "http://en.wikipedia.org/wiki/Canada",
      "http://en.wikipedia.org/wiki/United_Kingdom",
    ],
    ignoreSourceGroupUri: "paywall/paywalled_sources",
    articlesPage: page,
    articlesCount: 10,
    articlesSortBy: "date",
    articlesSortByAsc: false,
    dataType: ["news", "pr"],
    forceMaxDataTimeWindow: 31,
    resultType: "articles",
    apiKey: process.env.NEXT_PUBLIC_MAILCHIMP_PUBLIC_API_KEY,
  };
  const response = await fetch(
    "https://eventregistry.org/api/v1/article/getArticles",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );
  if (!response.ok) throw new Error("❌ Error fetching:" + response.status);
  const json = await response.json();
  console.log(json); 
  return json; 
}

