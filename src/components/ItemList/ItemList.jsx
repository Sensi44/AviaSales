// eslint-disable-next-line import/order
import React, { useEffect, useRef } from 'react';

import './ItemList.scss';
import PropTypes from 'prop-types';

import { Item } from '../Item';
import { fetchSearchId, fetchTickets } from '../../reducers/toolKitSlice';
import acceptFilters from '../../utils/uesCheckBoxes';

function ItemList(props) {
  const { searchId, stop, items, checkBoxes, filters } = props;
  const timerRef = useRef(null);
  const elements = items
    .filter((item) => {
      return acceptFilters(item, checkBoxes);
    })
    .sort((a, b) => {
      return filters.cheapest ? a.price - b.price : b.price - a.price;
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
    }, 3000);
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
