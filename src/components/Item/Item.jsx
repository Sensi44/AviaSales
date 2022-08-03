import React, { useEffect, useState } from 'react';

import classes from './Item.module.scss';

const classNames = require('classnames');

const Item = (props) => {
  const [data, setData] = useState({
    name: 'No-Name',
    loading: false,
    arr: [],
  });
  const [id, setId] = useState(1);
  const handle = () => {
    id <= 5 ? setId((s) => s + 1) : setId(1);
  };

  useEffect(() => {
    setData((b) => ({
      name: b.name,
      loading: false,
      arr: [...b.arr],
    }));
    fetch(`https://swapi.dev/api/planets/${id}/`)
      .then((res) => res.json())
      .then((d) => {
        setData((b) => ({
          name: d.name,
          loading: true,
          arr: [...b.arr, d.name],
        }));
      });
  }, [id]);

  const names = data.arr
    .filter((item, index) => data.arr.indexOf(item) === index)
    .map((el, i) => (
      <li className='list__elem' key={i}>
        {el}
      </li>
    ));

  const btnClass = classNames({
    [classes.list]: true,
    [classes.red]: names.length > 2,
    [classes.blue]: names.length > 3,
    [classes['blue-2']]: names.length > 4,
  });

  const btnClass2 = classNames({
    [classes.list]: true,
    [classes.red]: names.length > 3,
    [classes.blue]: names.length > 4,
    [classes['blue-2']]: names.length > 5,
  });

  const { loading, name } = data;
  return (
    <main className={classes.main}>
      {loading ? (
        <p className='stable'>▐ ▐ ▐ ▐ ▐</p>
      ) : (
        <p className='loading'>▬ ▬ ▬ ▬</p>
      )}
      <button className='button, next__planet' onClick={handle}>
        Получить планету
      </button>
      <p>Текущая планета - {name}</p>
      <ul className={btnClass}>{names}</ul>
      <ul className={btnClass2}>{names}</ul>
    </main>
  );
};

export default Item;
