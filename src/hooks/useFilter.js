import * as stays from "../data/stays.json";

const useFilter = (filterObj, id = 0) => {
  if (id === 0) {
    const filterData = stays.filter((x) => {
      return (
        filterObj.city === x.city &&
        filterObj.country === x.country &&
        filterObj.guests <= x.maxGuests
      );
    });
    return (filterData.length > 0 && filterData) || stays;
  } else {
    const arr = stays.filter((x) => x.id / 1 === id / 1)[0];
    return { data: arr };
  }
};

export default useFilter;
