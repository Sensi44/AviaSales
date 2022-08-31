import { connect } from 'react-redux';

import { AdditionsFilters } from '../components/AdditionsFilters';
import { chooseFilter } from '../reducers/toolKitSlice';

const mapStateToProps = (state) => {
  const { filters } = state;
  return {
    filters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFastest: () => {
      dispatch(chooseFilter('fast'));
    },
    onCheapest: () => {
      dispatch(chooseFilter('cheap'));
    },
  };
};

const AdditionsFiltersBox = connect(
  mapStateToProps,
  mapDispatchToProps
)(AdditionsFilters);

export default AdditionsFiltersBox;
