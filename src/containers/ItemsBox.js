import { connect } from 'react-redux';

import ItemList from '../components/ItemList';

const mapStateToProps = (state) => {
  const { loading, items } = state.tickets;
  // console.log(loading, items);
  return {
    loading,
    items,
  };
};

const ItemBox = connect(mapStateToProps, null)(ItemList);

export default ItemBox;
