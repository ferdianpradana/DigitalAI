"use client";
import { fetchTwo } from "../services/dua";
import { useEffect, useState } from "react";
import { Article, NewsItem } from "../types/dua";
import Card from "../components/card";
import Search from "../components/search";
import Paginations from "../components/pagination";

export default function Content2() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<NewsItem[]>([]);
  const [page, setPage] = useState(1);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setPage(1); // reset ke halaman pertama kalau search baru
  };

  useEffect(() => {
    fetchTwo(page, searchTerm)
      .then((res) => {
        console.log("res:", res);
        setResults(res.news || []);
      })
      .catch(console.error);
  }, [page, searchTerm]);

  return (
    <>
      <div className="w-full h-auto pb-10">
        <h1 className="text-2xl font-bold text-center py-5">Latest News</h1>
        <p className="text-center pb-7 text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad placeat
          aliquam quidem consequuntur! Autem aut deleniti cum illum repudiandae
          nesciunt. Aut earum fugit distinctio atque accusamus, labore odio
          aliquid similique! Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Delectus soluta suscipit itaque, esse culpa commodi distinctio
          recusandae illo eum accusamus? Est, dolore. Velit dolore soluta ab
          accusantium maiores hic possimus?
        </p>
        <div className="w-full flex justify-center">
          <Search onSearch={handleSearch} />
        </div>
        <ul className="grid grid-cols-0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 w-full">
          {results.map((item) => (
            <li className="h-auto min-w-80" key={item.id}>
              <Card
                title={item.title}
                url={item.url}
                image={item.image}
                publish_date={item.publish_date}
              />
            </li>
          ))}
        </ul>
        <div className="pt-10">
          <Paginations page={page} onPageChange={setPage} />
        </div>
      </div>
    </>
  );
}
