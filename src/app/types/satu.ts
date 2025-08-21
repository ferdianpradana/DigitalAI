export interface Result {
  uri: string;
  lang: string;
  isDuplicate: boolean;
  date: string;
  time: string;
  title: string;
  body: string;
  url: string;
  image: string;
}

export interface Article {
  articles: {
    page: number;
    pages: number;
    results: Result[];
  };
}
