import { connect } from 'react-redux';

import { boxToggle } from '../actions/actions';
import CheckBox from '../components/CheckBox';

const mapStateToProps = (state, ownProps) => {
  return {
    checked: state.checkBoxes[ownProps.check],
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(boxToggle(ownProps.check));
    },
  };
};

const FilterCheckBox = connect(mapStateToProps, mapDispatchToProps)(CheckBox);

export default FilterCheckBox;
