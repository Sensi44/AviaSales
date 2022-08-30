import React, { useEffect, useRef } from 'react';

import './ItemList.scss';
import Item from '../Item';
import { fetchSearchId, fetchTickets } from '../../reducers/toolKitSlice';
import acceptFilters from '../../assets/uesCheckBoxes';

function ItemList(props) {
  const { searchId, stop, items, checkBoxes, filters } = props;
  const timerRef = useRef(null);
  const elements = items
    .filter((item) => {
      return acceptFilters(item, checkBoxes);
    })
    .sort((a, b) => {
      return filters.cheapest ? a.price - b.price : null;
    })
    .sort((a, b) => {
      return filters.fastest
        ? a.segments[0].duration - b.segments[0].duration
        : b.segments[0].duration - a.segments[0].duration;
    })
    .map((item, index) => {
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
    }, 1200);
  };

  useEffect(() => {
    if (searchId) {
      startTimer();
    }
  }, [searchId]);

  if (stop) clearInterval(timerRef.current);

  return (
    <div className='item-list'>
      {!stop ? (
        <span> {`Билетов загружено: ${elements.length}`} </span>
      ) : (
        <span>
          {' '}
          {`Все билеты загружены, всего - ${elements.length} билетов`}{' '}
        </span>
      )}
      {elements.length ? elements.slice(0, 5) : 'Нет подходящих билетов'}
    </div>
  );
}

export default ItemList;
