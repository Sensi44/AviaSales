import React, { useEffect, useRef } from 'react';

import './ItemList.scss';
import Item from '../Item';
import LoaderLine from '../LoaderLine';
import startLoadingBar from '../../assets/loadingBar';
import { fetchSearchId, fetchTickets } from '../../reducers/toolKitSlice';

function ItemList(props) {
  const { searchId, stop, items } = props;
  const timerRef = useRef(null);
  const elements = items.map((item, index) => {
    return <Item key={index} />;
  });

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

  useEffect(() => {
    if (!stop) startLoadingBar(items.length);
  }, [items]);

  if (stop) clearInterval(timerRef.current);

  return (
    <div className='item-list'>
      {!stop ? <LoaderLine /> : 'Все билеты загружены'}
      <div>{elements.length}</div>
      <Item />
      <Item />
      <Item />
    </div>
  );
}

export default ItemList;
