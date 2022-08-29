const acceptFilters = (item, filter) => {
  const result = item.segments.filter((it) => {
    const { stops } = it;
    if (
      (filter.SHOW_NON && stops.length === 0) ||
      (filter.SHOW_1 && stops.length === 1) ||
      (filter.SHOW_2 && stops.length === 2) ||
      (filter.SHOW_3 && stops.length === 3)
    ) {
      return it;
    }
    return false;
  });
  if (result.length !== 0) return item;
  return false;
};

export default acceptFilters;
