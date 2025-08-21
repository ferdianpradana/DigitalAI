"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "../../components/ui/pagination";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

interface PaginationsProps {
  page: number;                        // ← terima page dari parent
  onPageChange: (page: number) => void; 
}
export default function Paginations({ page, onPageChange }: PaginationsProps) {
  const previous = page > 1 ? page - 1 : null;
  const next = page + 1;
  return (
    <Pagination>
      <PaginationContent>
        {/* Previous */}
        <PaginationItem>
          <button
            className="px-3 py-1 rounded-md  text-sm hover:bg-gray-100"
            onClick={() => previous && onPageChange(previous)}
            disabled={!previous}
          >
            < IoIosArrowBack style={{scale: "1.7"}}/>
          </button>
        </PaginationItem>

        {/* Current Page */}
        <PaginationItem>
          <PaginationLink>{page}</PaginationLink>
        </PaginationItem>

        {/* Ellipsis */}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>

        {/* Next */}
        <PaginationItem>
          <button
            className="px-3 py-1 rounded-md  text-sm hover:bg-gray-100"
            onClick={() => onPageChange(next)}
          >
            <IoIosArrowForward style={{scale: "1.7"}}/>
          </button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
