import Logo from "./Logo.js";
import Search from "./Search.js";
import Form from "./Form.js";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

const Nav = ({ stays, setStays }) => {
  const [search, setSearch] = useState(false);
  const [location, setLocation] = useState("");
  const [guests, setGuests] = useState("");
  const [page, setPage] = useState(false);

  useEffect(() => {
    if (stays.data) {
      setPage(true);
      setLocation("");
      setGuests("");
    } else {
      setPage(false);
    }
  }, [stays]);

  return (
    <div className="bg-white">
      <div className="relative mx-auto max-w-5xl px-4 py-8 sm:flex sm:items-center sm:justify-between sm:py-8">
        <Link to="/">
          <Logo />
        </Link>
        {(!page && (
          <Form
            search={search}
            setSearch={setSearch}
            stays={stays}
            setStays={setStays}
            location={location}
            setLocation={setLocation}
            guests={guests}
            setGuests={setGuests}
          />
        )) || (
          <Link to="/">
            <ArrowUturnLeftIcon className="absolute top-8 right-4 h-8 w-8 text-windbnb" />
          </Link>
        )}
      </div>
      <Search
        search={search}
        setSearch={setSearch}
        stays={stays}
        setStays={setStays}
        location={location}
        setLocation={setLocation}
        guests={guests}
        setGuests={setGuests}
      />
    </div>
  );
};

export default Nav;
