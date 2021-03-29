import { useState } from 'react';

import s from './BeerList.module.css';

const BeerList = ({ beers }) => {
  const [isToggle, setToggle] = useState(true);

  const handleClick = e => {
    setToggle(!isToggle);

    e.preventDefault();
  };

  return (
    <>
      <div className={s.two}>
        <h1>List of Beers from all over the world</h1>
      </div>
      <ul className={s.cardList}>
        {beers.map(({ id, image_url, name, first_brewed, food_pairing }) => (
          <li key={id} className={s.card} onClick={handleClick}>
            {isToggle ? (
              <div>
                <img className={s.image} src={image_url} alt={name}></img>
                <span className={s.name}>{name}</span>
              </div>
            ) : (
              <div className={s.info}>
                <p>Name: {name}</p>
                <p>First brewed: {first_brewed}</p>
                <p>Best taste with: {food_pairing}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default BeerList;
