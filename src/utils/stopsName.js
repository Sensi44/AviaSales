const stopsName = (number) => {
  if (number === 1) return 'Одна пересадка';
  if (number === 2) return 'Две пересадки';
  if (number === 3) return 'Три пересадки';
  return 'Без пересадок';
};

export default stopsName;
