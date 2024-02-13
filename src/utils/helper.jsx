export const FilterData = (searchInput, allResturant) => {
  const data = allResturant?.filter((resturant) =>
    resturant?.info?.name?.toLowerCase().includes(searchInput?.toLowerCase())
  );
  return data;
};
