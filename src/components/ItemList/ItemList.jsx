import React, { useEffect, useRef } from 'react';

import './ItemList.scss';
import Item from '../Item';
import LoaderLine from '../LoaderLine';
import startLoadingBar from '../../assets/loadingBar';
import { fetchSearchId, fetchTickets } from '../../reducers/toolKitSlice';
import acceptFilters from '../../assets/uesCheckBoxes';

function ItemList(props) {
  const { searchId, stop, items, checkBoxes } = props;
  const timerRef = useRef(null);
  const itemWithFilters = items.filter((item) => {
    return acceptFilters(item, checkBoxes);
  });
  console.log(itemWithFilters);
  const elements = itemWithFilters.map((item, index) => {
    return <Item key={index} ticket={item} />;
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
    }, 3000);
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
      {elements.length
        ? elements.slice(0, 5)
        : 'Нет подходящих билетов мой лорд'}
    </div>
  );
}

export default ItemList;
