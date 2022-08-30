import React from 'react';

import './App.scss';
import Filters from '../Filters';
import ItemsBox from '../../containers/ItemsBox';
import LoadingBox from '../../containers/LoadingBox';
import startLoadingBar from '../../assets/loadingBar';
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
          <LoadingBox />
          <section className='main-section'>
            <aside>
              <Filters />
            </aside>
            <div className='tickets'>
              <Tabs />
              <ItemsBox />
            </div>
          </section>
        </main>
      </article>
    </div>
  );
}

export default App;
