import Stay from "./Stay.js";

const List = ({ stays }) => {
  return (
    <div className="mx-auto max-w-sm px-4 pb-10 sm:max-w-5xl">
      <div className="flex items-center justify-between py-4">
        <h3 className="text-lg font-bold">Stays</h3>
        <span className="text-sm font-medium">{stays.length} stays</span>
      </div>

      <ul className="mx-auto flex max-w-sm flex-wrap sm:mx-0 sm:max-w-none sm:justify-between">
        {stays.map((stay) => (
          <li className="mt-10 w-full sm:w-48p lg:w-31p" key={stay.id}>
            <Stay stay={stay} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
