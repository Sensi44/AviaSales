import React, { useEffect, useRef } from 'react';

import './ItemList.scss';
import Item from '../Item';
import {
  fetchSearchId,
  fetchTickets,
  toggleStop,
} from '../../reducers/toolKitSlice';

function ItemList(props) {
  const { searchId, stop, items } = props;
  const timerRef = useRef(null);

  useEffect(() => {
    props.dispatch(fetchSearchId());
  }, []);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      props.dispatch(
        fetchTickets({
          searchId,
        })
      );
    }, 1000);
  };

  useEffect(() => {
    if (searchId) {
      startTimer();
    }
  }, [searchId]);

  if (stop) clearInterval(timerRef.current);

  return (
    <div className='item-list'>
      <Item />
      <Item />
      <Item />
    </div>
  );
}

export default ItemList;
