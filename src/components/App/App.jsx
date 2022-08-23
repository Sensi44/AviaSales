import React from 'react';

import './App.scss';
import Filters from '../Filters';
// import ItemList from '../ItemList';
import ItemsBox from '../../containers/ItemsBox';
import Tabs from '../Tabs';
// import classes from '../../assets/css-modules/CheckBox.module.scss';

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
