import Logo from "./Logo.js";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Nav = () => {
  return (
    <div className="bg-white">
      <div className="max-w-5xl mx-auto px-4 py-8 sm:flex sm:items-center sm:justify-between sm:py-8">
        <Logo />
        <div className="flex mt-10 max-w-sm mx-auto sm:m-0">
          <input
            className="w-2/5 p-4 rounded-l-xl border-gray-200 border-2 border-r-0"
            type="text"
            placeholder="Where?"
          />
          <input
            className="w-2/5 p-4 border-gray-200 border-2"
            type="text"
            placeholder="Add guests"
          />
          <span className="w-1/5 rounded-r-xl border-gray-200 border-2 border-l-0 flex justify-center items-center">
            <MagnifyingGlassIcon className="h-5 w-5 text-windbnb" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Nav;
