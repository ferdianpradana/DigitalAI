export interface NewsItem {
  id: number;
  title: string;
  text: string;
  url: string;
  image: string;
  publish_date: string;
}

export interface Article {
  offset: number;
  number: number;
  available: number;
  news: NewsItem[];
}