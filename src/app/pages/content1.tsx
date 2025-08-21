"use client";
import { fetchOne } from "../services/satu";
import { useEffect, useState } from "react";
import { Result } from "../types/satu";
import Card from "../components/card";
import Paginations from "../components/pagination";
import Search from "../components/search";

export default function Content() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<Result[]>([]);
  const [page, setPage] = useState(1);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setPage(1); // reset ke halaman pertama kalau search baru
  };
useEffect(() => {
  console.log("Fetching with:", { page, searchTerm });
  fetchOne(page, searchTerm || "")
    .then((res) => {
      console.log("Api Result:", res, searchTerm);
      setResults(res?.articles?.results || []);
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
            <li className="h-auto min-w-80" key={item.uri}>
              <Card
                title={item.title}
                url={item.url}
                uri={item.uri}
                image={item.image}
                date={item.date}
                time={item.time}
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
