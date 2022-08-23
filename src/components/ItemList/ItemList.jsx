import React from 'react';

import './ItemList.scss';
import Item from '../Item';

function ItemList(props) {
  // console.log(props);
  return (
    <div className='item-list'>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
}

export default ItemList;
