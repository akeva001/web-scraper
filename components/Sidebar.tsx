import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React from "react";

function Sidebar() {
  return (
    <div className="p-2 md:p-10 py-6 overflow-y-auto border-b border-teal-500/50">
      <div className="flex flex-col items-center justify-center mb-10">
        <DocumentMagnifyingGlassIcon className="h-16 w-16 text-teal-600" />
        <h1 className="hidden md:inline text-center text-3xl mt-2 mb-2 font-bold">
          Web Scraper
        </h1>
        <h2 className="hidden md:inline text-center text-xs italic">
          Let's Scrape!
        </h2>
      </div>

      <ul>
        {/* SidebarRow */}
        {/* SidebarRow */}
        {/* SidebarRow */}
      </ul>
    </div>
  );
}

export default Sidebar;
