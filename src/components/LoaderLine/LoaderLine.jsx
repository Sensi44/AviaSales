import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './LoaderLine.scss';
import startLoadingBar from '../../utils/loadingBar';

function LoaderLine(props) {
  const { stop, items } = props;
  useEffect(() => {
    if (!stop) startLoadingBar(items.length);
  }, [items, stop]);

  const bar = (
    <div className='progress'>
      <div className='progress-bg'>
        <div className='progress-bar_add' />
        <div className='progress-bar' />
      </div>
    </div>
  );

  return <div>{!stop ? bar : null}</div>;
}

LoaderLine.defaultProps = {
  stop: false,
  items: [],
};

LoaderLine.propTypes = {
  stop: PropTypes.bool,
  items: PropTypes.array,
};

export default LoaderLine;
