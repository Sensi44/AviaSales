import React from 'react';

import './App.scss';
import Filters from '../Filters';
import ItemsBox from '../../containers/ItemsBox';
import LoadingBox from '../../containers/LoadingBox';
import AdditionsFiltersBox from '../../containers/AdditionsFiltersBox';
import Tabs from '../AdditionsFilters';

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
              <AdditionsFiltersBox />
              <ItemsBox />
            </div>
          </section>
        </main>
      </article>
    </div>
  );
}

export default App;
