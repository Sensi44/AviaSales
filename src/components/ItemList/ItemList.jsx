import React, { useEffect } from 'react';

import './ItemList.scss';
import Item from '../Item';
import {
  fetchSearchId,
  fetchTickets,
  startRequest,
} from '../../reducers/toolKitSlice';

function ItemList(props) {
  const { searchId, stop } = props;

  useEffect(() => {
    props.dispatch(fetchSearchId());
  }, []);

  const rerunFetchTickets = () => {
    console.log('ЗАГРУЗКА БИЛЕТОВ');
    props.dispatch(
      fetchTickets({
        searchId,
      })
    );
  };

  useEffect(() => {
    // props.dispatch(startRequest());
    if (searchId) {
      props.dispatch(
        fetchTickets({
          searchId,
        })
      );
    }
    let timerId;

    if (!stop) {
      timerId = setTimeout(function tick() {
        console.log('tick');
        rerunFetchTickets();
        console.log(stop);
        timerId = setTimeout(tick, 1000);
      }, 1000);
      if (stop) {
        console.log('таймер остановился');
        clearTimeout(timerId);
      }
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
