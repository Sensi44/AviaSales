import React, { useEffect, useRef } from 'react';
import { Spin } from 'antd';

import './ItemList.scss';
import Item from '../Item';
import startLoadingBar from '../../assets/loadingBar';
import {
  fetchSearchId,
  fetchTickets,
  toggleStop,
} from '../../reducers/toolKitSlice';

function ItemList(props) {
  const { searchId, stop, items } = props;
  const timerRef = useRef(null);

  useEffect(() => {
    props.dispatch(fetchSearchId());
  }, []);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      props.dispatch(
        fetchTickets({
          searchId,
        })
      );
    }, 1000);
  };

  useEffect(() => {
    if (searchId) {
      startTimer();
    }
  }, [searchId]);

  useEffect(() => {
    if (!stop) {
      startLoadingBar(items.length);
    }
  }, [items]);

  if (stop) clearInterval(timerRef.current);

  return (
    <div className='item-list'>
      {stop ? <span>Все билеты загружены</span> : <Spin />}
      {!stop ? (
        <div className='progress'>
          <div className='progress-bg'>
            <div className='progress-bar_add' />
            <div className='progress-bar' />
          </div>
        </div>
      ) : null}
      <Item />
      <Item />
      <Item />
    </div>
  );
}

export default ItemList;
