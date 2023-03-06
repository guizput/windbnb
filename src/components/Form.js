import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import useFilter from "../hooks/useFilter.js";

const Form = ({
  search,
  setSearch,
  stays,
  setStays,
  location,
  setLocation,
  guests,
  setGuests,
}) => {
  return (
    <div
      className="mx-auto mt-10 flex max-w-sm sm:m-0"
      onClick={() => {
        setSearch(true);
        setStays(useFilter({}));
        setLocation("");
        setGuests("");
      }}
    >
      <input
        className="w-2/5 rounded-l-xl border-2 border-r-0 border-gray-200 p-4"
        type="text"
        placeholder="Where?"
        value={location}
        readOnly
      />
      <input
        className="w-2/5 border-2 border-gray-200 p-4"
        type="text"
        placeholder="Add guests"
        value={(guests && `${guests} guests`) || ""}
        readOnly
      />
      <span className="flex w-1/5 items-center justify-center rounded-r-xl border-2 border-l-0 border-gray-200">
        <MagnifyingGlassIcon className="h-5 w-5 text-windbnb" />
      </span>
    </div>
  );
};

export default Form;
