import { StarIcon } from "@heroicons/react/24/solid";

const Stay = ({ stay }) => {
  return (
    <div>
      <img
        className="h-60 w-full rounded-2xl object-cover"
        src={stay.photo}
        alt={stay.city}
      />
      <div className="mt-4 flex items-center justify-between">
        <div>
          {stay.superHost && (
            <span className="mr-2 rounded-3xl border-2 border-gray-700 px-2 py-1 text-xs font-bold uppercase">
              Superhost
            </span>
          )}
          <span className="text-xs font-medium text-gray-400">
            {stay.type}
            {stay.beds && `. ${stay.beds} beds`}
          </span>
        </div>
        <div className="flex items-center">
          <StarIcon className="mr-1 h-4 w-4 text-windbnb" />
          <span className="text-xs font-medium">{stay.rating}</span>
        </div>
      </div>
      <h3 className="mt-4 text-sm font-semibold">{stay.title}</h3>
    </div>
  );
};

export default Stay;
