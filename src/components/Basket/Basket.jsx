import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import s from '../StartPage/StartPage.module.css';
import { removeBeerFromStorage } from '../../redux/actions';
// var uniqid = require('uniqid');

export default function Basket() {
  const beerInBasket = useSelector(state => state.startPage.beers.beerInBasket);
  const dispatch = useDispatch();

  const removeBeer = e => {
    dispatch(
      removeBeerFromStorage(
        beerInBasket.filter(beer => beer.id !== +e.target.id),
      ),
    );
  };

  return (
    <>
      <div>
        <Link to="/beer-catalog-react" exact="true">
          <button>Главная</button>
        </Link>
        <div className={s.two}>
          <h1>Beer added to your basket</h1>
        </div>
      </div>
      <div className={s.cardList}>
        {beerInBasket.map(
          ({ id, image_url, name, tagline, first_brewed, food_pairing }) => {
            return (
              <li key={id} className={s.card}>
                {
                  <div>
                    <img className={s.image} src={image_url} alt={name}></img>
                    <span className={s.name}>{name}</span>

                    <div className={s.wrap}>
                      <div className={s.panel}></div>
                    </div>
                    {
                      <button id={id} className={s.button} onClick={removeBeer}>
                        Delete beer from basket
                      </button>
                    }
                  </div>
                }
                <div className={s.cardInfo}>
                  <blockquote className={s.blockquote}>{tagline}</blockquote>
                  <p className={s.firstBrewed}>First brewed: {first_brewed}</p>

                  <p className={s.foodPairing}>Best with: {food_pairing}</p>
                </div>
              </li>
            );
          },
        )}
      </div>
    </>
  );
}
