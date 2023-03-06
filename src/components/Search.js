import {
  XMarkIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";

const Search = ({ search, setSearch }) => {
  return (
    <div
      className={
        (search ? "translate-y-0" : "-translate-y-full") +
        " fixed top-0 left-0 z-10 h-full w-full transform bg-white px-4 py-8 transition"
      }
    >
      <div className="mx-auto flex max-w-4xl items-center justify-between">
        <h3 className="text-sm font-bold">Edit your search</h3>
        <button onClick={() => setSearch(false)}>
          <XMarkIcon className="h-6 w-6 text-gray-700" />
        </button>
      </div>
      <div className="mx-auto max-w-sm sm:max-w-4xl">
        <div className="mt-10 sm:flex">
          <fieldset className="relative w-full sm:w-2/5">
            <label
              className="absolute top-4 left-4 text-xs font-bold uppercase"
              htmlFor="location-search"
            >
              Location
            </label>
            <input
              className="w-full rounded-t-xl border-2 border-gray-200 px-4 pt-10 pb-4 text-sm sm:rounded-l-xl sm:rounded-r-none"
              id="location-search"
              type="text"
              placeholder="Where?"
            />
          </fieldset>
          <fieldset className="relative w-full sm:w-2/5">
            <label
              className="absolute top-4 left-4 text-xs font-bold uppercase"
              htmlFor="guest-search"
            >
              Guests
            </label>
            <input
              className="w-full rounded-b-xl border-2 border-t-0 border-gray-200 px-4 pt-10 pb-4 text-sm sm:rounded-none sm:border-t-2 sm:border-l-0"
              id="guest-search"
              type="text"
              placeholder="Add guests"
            />
          </fieldset>
          <button className="absolute bottom-8 left-1/2 flex -translate-x-1/2 transform items-center justify-center rounded-2xl bg-windbnb px-6 py-4 text-white transition hover:bg-windbnb-dark sm:static sm:w-1/5 sm:translate-x-0 sm:rounded-l-none">
            <MagnifyingGlassIcon className="mr-2 h-5 w-5 text-white" />
            Search
          </button>
        </div>
        <ul className="flex flex-wrap space-y-8 py-8">
          <li className="flex w-full items-center">
            <MapPinIcon className="mr-2 h-5 w-5 text-gray-700" />
            <span className="leading-none">Helsinki, Finland</span>
          </li>
          <li className="flex w-full items-center">
            <MapPinIcon className="mr-2 h-5 w-5 text-gray-700" />
            <span className="leading-none">Helsinki, Finland</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Search;
