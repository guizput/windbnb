import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StarIcon } from "@heroicons/react/24/solid";
import useFilter from "../hooks/useFilter";

const Page = ({ stays, setStays }) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setStays(useFilter({}, id));
    setLoading(false);
  }, []);
  return (
    <div>
      {!loading && (
        <div className="mx-auto max-w-5xl px-4 pb-10">
          <div className="items-center justify-between md:flex">
            <img
              src={stays.data.photo}
              alt={stays.data.title}
              className="w-full rounded-2xl md:w-48p"
            />
            <div className="md:w-48p">
              <div className="mt-8 flex items-center justify-between">
                <div>
                  {stays.data.superHost && (
                    <span className="mr-2 rounded-3xl border-2 border-gray-700 px-2 py-1 text-xs font-bold uppercase">
                      Superhost
                    </span>
                  )}
                  <span className="text-xs font-medium text-gray-400">
                    {stays.data.type}
                    {stays.data.beds && `. ${stays.data.beds} beds`}
                  </span>
                </div>
                <div className="flex items-center">
                  <StarIcon className="mr-1 h-4 w-4 text-windbnb" />
                  <span className="text-xs font-medium">
                    {stays.data.rating}
                  </span>
                </div>
              </div>
              <h1 className="mt-8 text-sm font-semibold">{stays.data.title}</h1>
              <p className="mt-4 text-gray-500">{stays.data.body}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
