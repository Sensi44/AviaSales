import React from 'react';

import './AdditionsFilters.scss';

function AdditionsFilters({ onFastest, onCheapest, filters }) {
  console.log(filters);
  const tabsClassNameFastest = filters.fastest
    ? 'tabs__button  tabs__button--active'
    : 'tabs__button';
  const tabsClassNameCheapest = filters.cheapest
    ? 'tabs__button  tabs__button--active'
    : 'tabs__button';
  return (
    <div className='tabs'>
      <button
        type={'button'}
        className={tabsClassNameFastest}
        onClick={onFastest}
      >
        Самый быстрый
      </button>
      <button
        type={'button'}
        className={tabsClassNameCheapest}
        onClick={onCheapest}
      >
        Самый дешёвый
      </button>
    </div>
  );
}

export default AdditionsFilters;
