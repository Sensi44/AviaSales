import { connect } from 'react-redux';

import ItemList from '../components/ItemList';

const mapStateToProps = (state) => {
  const { loading, items, stop, searchId } = state.tickets;
  console.log(searchId);
  // console.log(loading, items);
  return {
    loading,
    items,
    searchId,
    stop,
  };
};

const ItemBox = connect(mapStateToProps, null)(ItemList);

export default ItemBox;
