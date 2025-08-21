"use client";
import Image from "next/image";
import MenuBar from "../components/menuBar";
import Logo from "../../../public/Logo.png";
import { List } from "../lib/list";
import Link from "next/link";

export default function Navar() {
  return (
    <>
      <div className="flex justify-between P-6 max-w-full overflow-x-hidden py-3 items-center">
        <div className="flex items-center">
          <Image src={Logo} alt="logo" width={50} height={50} />
          <p className="font-russo text-2xl tracking-[0.1em]">DigitalAI</p>
        </div>
        <div>
          <div className="flex w-full ">
            <nav className="hidden md:block p-4 pr-0  text-black  text-lg whitespace-nowrap">
              {List.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="mx-2 font-semibold text-gray-900"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="md:hidden">
            <MenuBar />
          </div>
        </div>
      </div>
    </>
  );
}
