import React from 'react';

import rename from '../../assets/rename';
import './CheckBox.scss';

const CheckBox = ({ checked, children, onClick }) => {
  const info = rename(children);
  return (
    <div className='checkBox'>
      <label htmlFor={info} className='check option'>
        <input
          className='cp check__input'
          type='checkbox'
          id={info}
          name={children}
          onChange={onClick}
          checked={checked}
        />
        <span className='check__box' />
        {children}
      </label>
    </div>
  );
};

export default CheckBox;
