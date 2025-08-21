"use client";
import { fetchOne } from "../services/satu";
import { fetchTwo } from "../services/dua";
import { fetchThre } from "../services/tiga";
import { useEffect, useState } from "react";
import { Result } from "../types/satu";
import { NewsItem } from "../types/dua";
import { Resultt } from "../types/tiga";
import Card from "../components/card";
import Paginations from "../components/pagination";
import Search from "../components/search";

export default function Content() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<Result[]>([]);
  const [results2, setResults2] = useState<NewsItem[]>([]);
  const [results3, setResults3] = useState<Resultt[]>([]);
  const [page, setPage] = useState(1);
  const [errors, setErrors] = useState<string[]>([]);
  const [errors2, setErrors2] = useState<string[]>([]);
  const [errors3, setErrors3] = useState<string[]>([]);
  const newErrors: string[] = [];
  const newErrors2: string[] = [];
  const newErrors3: string[] = [];

  useEffect(() => {
    const fetchData = async () => {
      try {
        // fetchOne
        try {
          const res = await fetchOne(page, searchTerm);
          setResults(res?.articles?.results || []);
        } catch (err: any) {
          newErrors.push("❌ Error fetchOne: " + err.message + "");
        }

        // fetchTwo
        try {
          const ress = await fetchTwo(page, searchTerm);
          console.log("fetchTwo:", ress);
          setResults2(ress?.news || []);
        } catch (err: any) {
          newErrors2.push("❌ Error fetchTwo: " + err.message);
        }

        // fetchThre
        try {
          const resss = await fetchThre(page, searchTerm);
          setResults3(resss?.data || []);
        } catch (err: any) {
          newErrors3.push("❌ Error fetchThre: " + err.message);
        }
      } catch (err: any) {
        newErrors.push("❌ Unexpected error: " + err.message);
      }

      // update state error
      setErrors(newErrors);
      setErrors2(newErrors2);
      setErrors3(newErrors3)
    };

    fetchData();
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
          <Search
            onSearch={(term) => {
              setSearchTerm(term);
              setPage(1); // reset ke page 1 saat search baru
            }}
          />
        </div>
        <div className="w-full flex ">
          <div className="text-5xl font-bold  py-5 w-full text-center flex flex-col">
            <p className="">
              Public API 1
            </p>
            <p className="text-2xl text-red-800">{errors}</p>
          </div>
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
        <div className="w-full flex ">
          <div className="text-5xl font-bold  py-5 w-full text-center flex flex-col">
            <p className="">
              Public API 2
            </p>
            <p className="text-2xl text-red-800">{errors2}</p>
          </div>
        </div>
        <ul className="pt-10 grid grid-cols-0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 w-full">
          {results2.map((item) => (
            <li className="h-auto min-w-80" key={item.url}>
              <Card
                title={item.title}
                url={item.url}
                image={item.image}
                publish_date={item.publish_date}
              />
            </li>
          ))}
        </ul>
        <div className="w-full flex ">
          <div className="text-5xl font-bold  py-5 w-full text-center flex flex-col">
            <p className="">
              Public API 3
            </p>
            <p className="text-2xl text-red-800">{errors3}</p>
          </div>
        </div>
        <ul className="pt-10 grid grid-cols-0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 w-full">
          {results3.map((item) => (
            <li className="h-auto min-w-80" key={item.url}>
              <Card
                title={item.title}
                url={item.url}
                image={item.image_url}
                publish_date={item.published_at}
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
