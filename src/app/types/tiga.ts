export interface Resultt {
  uuid: string;
  title: string;
  description: string;
  keywords: string;
  snippet: string;
  url: string;
  image_url: string;
  language: string;
  published_at: string;
  source: string;
  categories: string[];
  relevance_score: number | null;
}

export interface ArticleResponse {
  meta: {
    found: number;
    returned: number;
    limit: number;
    page: number;
  };
  data: Resultt[];
}
