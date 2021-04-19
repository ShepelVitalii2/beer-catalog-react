import { Link } from 'react-router-dom';
import s from '../StartPage/StartPage.module.css';
// import s from '../SearchBar/SearchBar.module.css';
// import SearchBar from '../SearchBar';
// import StartPage from '../StartPage';

export default function Basket({
  image_url,
  name,
  //   searchQuery,
  //   setSearchQuery,
  //   filteredByAttenL,
  //   filteredByAttenM,
  //   filteredByABV,
  addBeerToBasket,
  idBeerInStorage,
}) {
  console.log(idBeerInStorage);

  return (
    <>
      <div>
        <Link to="/beer-catalog-react" exact="true">
          Главная
        </Link>
        <div className={s.two}>
          <h1>The chosen beers</h1>
        </div>

        {/* <div className={s.cardList}>
        <img className={s.image} src={image_url} alt={name}></img>
        <span className={s.name}>{name}</span>
      </div> */}
      </div>

      <ul className={s.navigation}>
        {/* {idBeerInStorage.map(({ id, image_url, name }) => {
          return (
            <li key={id} className={s.card}>
              {
                <div>
                  <img className={s.image} src={image_url} alt={name}></img>
                  <span className={s.name}>{name}</span>

                  <div className={s.wrap}>
                    <div className={s.panel}></div>
                  </div>
                </div>
              }
            </li>
          );
        })} */}
      </ul>
    </>
  );
}
