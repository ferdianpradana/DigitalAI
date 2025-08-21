import { useState } from "react";

interface SearchProps {
  onSearch: (term: string) => void;
}

export default function Search({ onSearch }: SearchProps) {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      console.log("Search triggered:", inputValue);
      onSearch(inputValue);
    }
  };

  return (
    <>
      <label className="flex items-center gap-2 bg-white rounded-full px-3 pr-0 py-2  w-3/4 border-2 mb-10 ">
        <svg
          className="h-[2em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          type="search"
          required
          placeholder="Search"
          className="w-full"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </label>
    </>
  );
}
