import Link from "next/link";
import { FC } from "react";
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import Image from "next/image";

interface CardProps {
  title?: string;
  url: string;
  uri?: string;
  image?: string;
  date?: string;
  time?: string;
  publish_date?: string;
  pubDate?: string;
}

const About: FC<CardProps> = ({
  title,
  date,
  image,
  time,
  url,
  publish_date,
  pubDate,
}) => {
  return (
    <div className="min-h-full  max-w-full shadow-lg shadow-indigo-900/100 border-0 bg-white border-blue-950 rounded-2xl p-4 flex flex-col justify-between content-center items-center">
      <div className="w-full">
        <div className="flex justify-center">
          <Image
            src={image && image.trim() !== "" ? image : "/img404.svg"}
            alt="Picture"
            width={350}
            height={0}
            sizes="100vw"
            className="rounded-2xl"
            style={{ height: "auto" }}
          />
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <div className="flex justify-between w-full text-gray-600 font-light pt-2">
            <p>
              {date || publish_date?.split(" ")[0] || pubDate?.split(" ")[0]}
            </p>
            <p>
              {time || publish_date?.split(" ")[1] || pubDate?.split(" ")[1] || ""}
            </p>
          </div>
          <div className="py-2 w-full">
            <p className="text-start max-w-3/4">{title}</p>
          </div>
        </div>
      </div>
      <div className=" w-full flex justify-end items-center">
        <Link href={url}>
          <button className="flex items-center gap-1 bg-blue-800 rounded-2xl p-2">
            <p className="text-white">Read More</p>
            <div className="rounded-full text-white">
              <BiSolidRightTopArrowCircle style={{ fontSize: "2.0rem" }} />
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
