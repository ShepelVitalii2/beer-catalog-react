import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import s from './StartPage.module.css';
import SearchBar from '../SearchBar';
import { fetchBeersRedux } from '../../redux/operations';
import { addBeerInStorage } from '../../redux/actions';
var uniqid = require('uniqid');

const StartPage = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const beers = useSelector(state => state.startPage.beers.filteredBeers);
  const beerInBasket = useSelector(state => state.startPage.beers.beerInBasket);

  const [addedBeer] = useState(false);

  const dispatch = useDispatch();

  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');

  const filterBeers = (beers, query) => {
    if (!query) {
      return beers;
    }
    return beers.filter(beers => {
      const beerName = beers.name.toLowerCase();
      return beerName.includes(query);
    });
  };

  const filteredBeers = filterBeers(beers, query);

  const onSetBeerInStorage = e => {
    // debugger;
    if (!addedBeer) {
      // e.preventDefault();
      e.target.textContent = 'Added';
      document.getElementById(`${e.target.id}`).disabled = true;
      dispatch(
        addBeerInStorage(
          beers.filter(beer => beer.id === +e.target.id).concat(beerInBasket),
        ),
      );
    }
  };

  useEffect(() => {
    dispatch(fetchBeersRedux());
  }, [dispatch]);

  const amountPerPage = 15;
  const offset = currentPage * amountPerPage;

  const currentPageData = (
    <>
      {filteredBeers
        .slice(offset, offset + amountPerPage)
        .map(({ id, image_url, name, tagline, first_brewed, food_pairing }) => {
          return (
            <li key={uniqid()} className={s.card}>
              <div>
                <img className={s.image} src={image_url} alt={name}></img>
                <span className={s.name}>{name}</span>

                <div className={s.wrap}>
                  <div className={s.panel}>
                    <button
                      id={id}
                      className={s.button}
                      onClick={onSetBeerInStorage}
                    >
                      Add beer to basket
                    </button>
                  </div>
                </div>
              </div>

              <div className={s.cardInfo}>
                <blockquote className={s.blockquote}>{tagline}</blockquote>
                <p className={s.firstBrewed}>First brewed: {first_brewed}</p>

                <p className={s.foodPairing}>Best with: {food_pairing}</p>
              </div>
            </li>
          );
        })}
    </>
  );

  const pageCount = Math.ceil(beers.length / amountPerPage);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  return (
    <>
      {<SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />}

      <div className={s.two}>
        <h1>List of Beers from all over the world</h1>
      </div>

      {<div className={s.cardList}>{currentPageData}</div>}

      <div className={s.paginationW}>
        <ReactPaginate
          previousLabel={'??? Previous'}
          nextLabel={'Next ???'}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={s.pagination}
          previousLinkClassName={s.paginationLink}
          nextLinkClassName={s.paginationLink}
          disabledClassName={s.paginationLinkDisabled}
          activeClassName={s.paginationLinkActive}
        />
      </div>
    </>
  );
};

export default StartPage;
