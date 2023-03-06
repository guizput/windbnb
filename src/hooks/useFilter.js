import * as stays from "../data/stays.json";

const useFilter = (filterObj) => {
  const filterData = stays.filter((x) => {
    return (
      filterObj.city === x.city &&
      filterObj.country === x.country &&
      filterObj.guests <= x.maxGuests
    );
  });
  return (filterData.length > 0 && filterData) || stays;
};

export default useFilter;
