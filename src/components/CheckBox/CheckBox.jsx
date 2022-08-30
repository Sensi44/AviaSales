import React from 'react';
import PropTypes from 'prop-types';

import './CheckBox.scss';
import Item from '../Item';
import rename from '../../assets/rename';

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

Item.defaultProps = {
  checked: true,
  children: 'hollow',
  onClick: () => {},
};

Item.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.string,
  onClick: PropTypes.func,
};

export default CheckBox;
