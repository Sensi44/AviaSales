import React from 'react';

import './App.scss';
import Filters from '../Filters';
import ItemList from '../ItemList';
import Tabs from '../Tabs';
// import classes from '../../assets/css-modules/Item.module.scss';

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
            <ItemList />
          </div>
        </main>
      </article>
    </div>
  );
}

export default App;
