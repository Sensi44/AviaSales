const acceptFilters = (item, filter) => {
  const result = item.segments.filter((it) => {
    if (
      (filter.SHOW_NON && it.stops.length === 0) ||
      (filter.SHOW_1 && it.stops.length === 1) ||
      (filter.SHOW_2 && it.stops.length === 2) ||
      (filter.SHOW_3 && it.stops.length === 3)
    ) {
      return it;
    }
    return false;
  });
  if (result.length !== 0) return item;
  return false;
};

// const result = tickets.filter((item) => useFilters(item, filter));
//
// console.log(result);

export default acceptFilters;
