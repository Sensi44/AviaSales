import React from 'react';

import './App.scss';
import Filters from '../Filters';
import ItemsBox from '../../containers/ItemsBox';
import Tabs from '../Tabs';

function App() {
  return (
    <div className='app'>
      <article>
        <header>
          <div className='logo'>
            <img src='#' alt='#' />
          </div>
        </header>
        <main className='main'>
          <aside>
            <Filters />
          </aside>
          <div className='tickets'>
            <Tabs />
            <ItemsBox />
          </div>
        </main>
      </article>
    </div>
  );
}

export default App;
