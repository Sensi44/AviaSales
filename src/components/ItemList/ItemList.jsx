import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './ItemList.scss';

import { Item } from '../Item';
import { fetchSearchId, fetchTickets } from '../../reducers/toolKitSlice';
import acceptFilters from '../../utils/uesCheckBoxes';
import quickSort from '../../utils/quickSort';

function ItemList(props) {
  const { searchId, stop, items, checkBoxes, filters, dispatch } = props;
  const timerRef = useRef(null);
  let elements = items
    .filter((item) => {
      return acceptFilters(item, checkBoxes);
    })
    .sort((a, b) => {
      return filters.fastest
        ? a.segments[0].duration - b.segments[0].duration
        : b.segments[0].duration - a.segments[0].duration;
    });

  if (filters.cheapest) elements = quickSort(elements);

  elements = elements.map((item, index) => {
    return <Item key={index} ticket={item} />;
  });

  useEffect(() => {
    dispatch(fetchSearchId());
  }, [dispatch]);

  useEffect(() => {
    const startTimer = () => {
      timerRef.current = setInterval(() => {
        dispatch(
          fetchTickets({
            searchId,
          })
        );
      }, 2500);
    };
    if (searchId) startTimer();
  }, [searchId, dispatch]);

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

ItemList.defaultProps = {
  searchId: '',
  stop: false,
  items: [],
  checkBoxes: {},
  filters: {},
};

ItemList.propTypes = {
  searchId: PropTypes.string,
  stop: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.object),
  checkBoxes: PropTypes.shape({
    SHOW_ALL: PropTypes.bool,
    SHOW_NON: PropTypes.bool,
    SHOW_1: PropTypes.bool,
    SHOW_2: PropTypes.bool,
    SHOW_3: PropTypes.bool,
  }),
  filters: PropTypes.shape({
    fastest: PropTypes.bool,
    cheapest: PropTypes.bool,
  }),
};

export default ItemList;
