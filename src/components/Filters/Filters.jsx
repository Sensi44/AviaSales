import React from 'react';

import './Filters.scss';
import { VisibilityCheckBoxes } from '../../actions/actions';
import FilterCheckBox from '../../containers/FilterCheckBox';

function Filters() {
  return (
    <>
      <div>Количество пересадок</div>
      <FilterCheckBox check={VisibilityCheckBoxes.SHOW_ALL}>Все</FilterCheckBox>
      <FilterCheckBox check={VisibilityCheckBoxes.SHOW_NON}>
        Без пересадок
      </FilterCheckBox>
      <FilterCheckBox check={VisibilityCheckBoxes.SHOW_1}>
        1 пересадка
      </FilterCheckBox>
      <FilterCheckBox check={VisibilityCheckBoxes.SHOW_2}>
        2 пересадки
      </FilterCheckBox>
      <FilterCheckBox check={VisibilityCheckBoxes.SHOW_3}>
        3 пересадки
      </FilterCheckBox>
    </>
  );
}

export default Filters;
