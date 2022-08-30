import React, { useEffect } from 'react';

import './LoaderLine.scss';
import startLoadingBar from '../../assets/loadingBar';

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
// <span className>Все билеты загружены</span>
export default LoaderLine;
