import * as stays from "../data/stays.json";
import Stay from "./Stay.js";

const List = () => {
  return (
    <div className="max-w-sm mx-auto px-4 pb-10 sm:max-w-5xl">
      <div className="flex items-center justify-between py-4">
        <h3 className="font-bold text-lg">Stays in Finland</h3>
        <span className="font-medium text-sm">12 stays</span>
      </div>
      <ul className="flex flex-wrap max-w-sm mx-auto sm:max-w-none sm:mx-0 sm:justify-between">
        {stays.map((stay) => (
          <li className="w-full sm:w-48p lg:w-31p mt-10" key={stay.id}>
            <Stay stay={stay} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
