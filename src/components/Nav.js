import Logo from "./Logo.js";
import Search from "./Search.js";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import useFilter from "../hooks/useFilter.js";

const Nav = ({ stays, setStays }) => {
  const [search, setSearch] = useState(false);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:flex sm:items-center sm:justify-between sm:py-8">
        <Logo />
        <div
          className="mx-auto mt-10 flex max-w-sm sm:m-0"
          onClick={() => {
            setSearch(true);
            setStays(useFilter({}));
          }}
        >
          <input
            className="w-2/5 rounded-l-xl border-2 border-r-0 border-gray-200 p-4"
            type="text"
            placeholder="Where?"
          />
          <input
            className="w-2/5 border-2 border-gray-200 p-4"
            type="text"
            placeholder="Add guests"
          />
          <span className="flex w-1/5 items-center justify-center rounded-r-xl border-2 border-l-0 border-gray-200">
            <MagnifyingGlassIcon className="h-5 w-5 text-windbnb" />
          </span>
        </div>
      </div>
      <Search
        search={search}
        setSearch={setSearch}
        stays={stays}
        setStays={setStays}
      />
    </div>
  );
};

export default Nav;
