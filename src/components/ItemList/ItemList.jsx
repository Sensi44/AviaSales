import React from 'react';

import './ItemList.scss';
import Item from '../Item';
// import classes from '../../assets/css-modules/Item.module.scss';

function ItemList() {
  const a = 5;
  console.log(a);
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
