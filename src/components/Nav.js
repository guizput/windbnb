import Logo from "./Logo.js";
import Search from "./Search.js";
import Form from "./Form.js";
import { useState } from "react";

const Nav = ({ stays, setStays }) => {
  const [search, setSearch] = useState(false);
  const [location, setLocation] = useState("");
  const [guests, setGuests] = useState("");

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:flex sm:items-center sm:justify-between sm:py-8">
        <Logo />
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
