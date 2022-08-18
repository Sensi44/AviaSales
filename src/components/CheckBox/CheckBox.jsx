import React from 'react';

import rename from '../../assets/rename';
import './CheckBox.scss';

const CheckBox = ({ checked, children, onClick }) => {
  const info = rename(children);
  return (
    <div>
      <input
        type='checkbox'
        id={info}
        name={children}
        onChange={onClick}
        checked={checked}
      />
      <label htmlFor={info}>{children}</label>
    </div>
  );
};

export default CheckBox;
