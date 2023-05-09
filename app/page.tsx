import Image from "next/image";
import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <DocumentMagnifyingGlassIcon className="h-64 w-64 text-teal-600/20" />

        <h1 className="text-3xl text-center mt-2 text-black font-bold mb-5">
          Welcome to the Web Scraper
        </h1>

        <h2 className="text-lg italic text-center text-black/50">Enjoy!</h2>
      </div>
    </div>
  );
}
