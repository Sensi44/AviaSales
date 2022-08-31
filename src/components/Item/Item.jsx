import React from 'react';
import PropTypes from 'prop-types';

import './Item.scss';
import stopsName from '../../utils/stopsName';
import getTime from '../../utils/getTime';

const Item = (props) => {
  const { price, carrier, segments } = props.ticket;
  let [
    { origin, destination, date, duration, stops },
    {
      origin: origin2,
      destination: destination2,
      date: date2,
      duration: duration2,
      stops: stops2,
    },
  ] = segments;
  const textStops = stopsName(stops.length);
  const textStops2 = stopsName(stops2.length);

  stops = stops.join(', ');
  stops2 = stops2.join(', ');
  const times1 = getTime(date, duration);
  const times2 = getTime(date2, duration2);
  return (
    <div className='ticket'>
      <header className='ticket-header'>
        <span className='ticket-cost'>{`${price} Р`}</span>
        <img
          className='ticket-image'
          src={`http://pics.avs.io/99/36/${carrier}.png`}
          alt={carrier}
        />
      </header>
      <div className='ticket-race'>
        <div className='ticket-data'>
          <span>{`${origin} ${destination}`}</span>
          <time>{`${times1[0]} - ${times1[1]}`}</time>
        </div>
        <div className='ticket-data'>
          <span>в пути</span>
          <time>{times1[2]}</time>
        </div>
        <div className='ticket-data'>
          <span>{textStops}</span>
          <time>{[stops]}</time>
        </div>
      </div>

      <div className='ticket-race'>
        <div className='ticket-data'>
          <span>{`${origin2} ${destination2}`}</span>
          <time>{`${times2[0]} - ${times2[1]}`}</time>
        </div>
        <div className='ticket-data'>
          <span>в пути</span>
          <time>{times2[2]}</time>
        </div>
        <div className='ticket-data'>
          <span>{textStops2}</span>
          <time>{[stops2]}</time>
        </div>
      </div>
    </div>
  );
};

Item.defaultProps = {
  price: 0,
};

Item.propTypes = {
  price: PropTypes.number,
  carrier: PropTypes.string,
  segments: PropTypes.arrayOf(PropTypes.object),
};

export default Item;
