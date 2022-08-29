import { connect } from 'react-redux';

import ItemList from '../components/ItemList';

const mapStateToProps = (state) => {
  const { items, stop, searchId } = state.tickets;
  const { checkBoxes } = state;
  return {
    items,
    searchId,
    stop,
    checkBoxes,
  };
};

const ItemBox = connect(mapStateToProps, null)(ItemList);

export default ItemBox;
