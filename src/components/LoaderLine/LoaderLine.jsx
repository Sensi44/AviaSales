import React from 'react';

import './LoaderLine.scss';

function LoaderLine() {
  return (
    <div className='progress'>
      <div className='progress-bg'>
        <div className='progress-bar_add' />
        <div className='progress-bar' />
      </div>
    </div>
  );
}

export default LoaderLine;
