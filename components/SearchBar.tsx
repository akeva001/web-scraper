"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { FormEvent, useRef } from "react";

function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const input = inputRef.current?.value;
    if (!input) return;

    if (inputRef.current?.value) {
      inputRef.current.value = "";
    }

    try {
      //call the API to activate the scraper
    } catch (error) {
      //handle any errors
    }
  };

  return (
    <header>
      <form
        className="flex items-center space-x-2 justify-center 
      rounded-full py-2 px-4 max-w-md mx-auto bg-teal-100"
        onSubmit={handleSearch}
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Search..."
          className="flex-1 bg-transparent outline-none text-teal-400 placeholder:text-teal-300"
        ></input>
        <MagnifyingGlassIcon className="h-6 w-6 text-teal-300" />
      </form>
    </header>
  );
}

export default SearchBar;
