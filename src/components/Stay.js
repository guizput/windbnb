import { StarIcon } from "@heroicons/react/24/solid";

const Stay = ({ stay }) => {
  return (
    <div>
      <img
        className="rounded-2xl h-60 w-full object-cover"
        src={stay.photo}
        alt={stay.city}
      />
      <div className="flex items-center justify-between mt-4">
        <div>
          {stay.superHost && (
            <span className="font-bold text-xs uppercase px-2 py-1 mr-2 rounded-3xl border-2 border-gray-700">
              Superhost
            </span>
          )}
          <span className="font-medium text-gray-400 text-xs">
            {stay.type}
            {stay.beds && `. ${stay.beds} beds`}
          </span>
        </div>
        <div className="flex items-center">
          <StarIcon className="h-4 w-4 text-windbnb mr-1" />
          <span className="font-medium text-xs">{stay.rating}</span>
        </div>
      </div>
      <h3 className="font-semibold text-sm mt-4">{stay.title}</h3>
    </div>
  );
};

export default Stay;
