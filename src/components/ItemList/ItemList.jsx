import React, { useEffect } from 'react';

import './ItemList.scss';
import Item from '../Item';
import { fetchSearchId, fetchTickets } from '../../reducers/toolKitSlice';

function ItemList(props) {
  const { searchId, stop, items } = props;

  let timer;
  // eslint-disable-next-line no-shadow
  const tick = () => {
    props.dispatch(
      fetchTickets({
        searchId,
      })
    );
    // eslint-disable-next-line no-unused-expressions
    !stop ? (timer = setTimeout(tick, 1000)) : null;
  };

  useEffect(() => {
    props.dispatch(fetchSearchId());
  }, []);

  useEffect(() => {
    if (searchId && !stop) {
      tick();
    } else {
      clearTimeout(timer);
    }
  }, [searchId, stop]);

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
