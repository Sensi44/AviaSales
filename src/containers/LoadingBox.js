import { connect } from 'react-redux';

import LoaderLine from '../components/LoaderLine';

const mapStateToProps = (state) => {
  const { items, stop } = state.tickets;
  return {
    items,
    stop,
  };
};

const LoadingBox = connect(mapStateToProps, null)(LoaderLine);

export default LoadingBox;
