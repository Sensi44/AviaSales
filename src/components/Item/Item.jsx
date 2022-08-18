import React from 'react';

import './Item.scss';
// import classes from '../../assets/css-modules/CheckBox.module.scss';

const Item = (props) => {
  const a = 5;
  return (
    <div className='ticket'>
      <header className='ticket-header'>
        <span className='ticket-cost'>13400</span>
        <img
          className='ticket-image'
          src='http://pics.avs.io/99/36/S7.png'
          alt='#'
        />
      </header>
      <div className='ticket-race'>
        <div className='ticket-data'>
          <span>mow-hkt</span>
          <time>10-45 - 08:00</time>
        </div>
        <div className='ticket-data'>
          <span>в пути</span>
          <time>21ч 15м</time>
        </div>
        <div className='ticket-data'>
          <span>2 пересадки</span>
          <time>HKG, JNB</time>
        </div>
      </div>
      <div className='ticket-race'>
        <div className='ticket-data'>
          <span>mow-hkt</span>
          <time>10-45 - 08:00</time>
        </div>
        <div className='ticket-data'>
          <span>в пути</span>
          <time>21ч 15м</time>
        </div>
        <div className='ticket-data'>
          <span>2 пересадки</span>
          <time>HKG, JNB</time>
        </div>
      </div>
    </div>
  );
};

export default Item;
