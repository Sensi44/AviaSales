const rename = (nameRu) => {
  switch (nameRu) {
    case 'Все':
      return 'All';
    case 'Без пересадок':
      return 'NON-STOP';
    case '1 пересадка':
      return '1-transfer';
    case '2 пересадки':
      return '2-transfers';
    case '3 пересадки':
      return '3-transfer';
    default:
      return nameRu;
  }
};

export default rename;
