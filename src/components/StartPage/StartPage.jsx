import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import s from './StartPage.module.css';
import SearchBar from '../SearchBar';
import { fetchBeersRedux } from '../../redux/operations';
import store from '../../redux/store';

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const beers = useSelector(state => state.startPage.beers.allBeers);
  const filteredBy = useSelector(state => state.startPage.beers.filteredBeers);
  console.log(filteredBy);

  // console.log(store.getState().startPage.beers.allBeers);
  // let beers = store.getState().startPage.beers;
  // const beers = store.getState().startPage.beers;
  // console.log(beers);
  const [isLoading, setIsLoading] = useState(false);
  const [idBeerInStorage, setIdBeerInStorage] = useState([]);
  const dispatch = useDispatch();
  // beers = store.getState().startPage.beers;

  // console.log(store.getState().startPage.beers);
  // dispatch(fetchBeersRedux());

  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');

  const filterBeers = (beers, query) => {
    if (!query) {
      return beers;
    }
    // console.log(beers);
    return beers.filter(beers => {
      const beerName = beers.name.toLowerCase();
      return beerName.includes(query);
    });
  };

  const filteredBeers = filterBeers(beers, query);

  const addBeerClick = (e, id) => {
    e.preventDefault();

    setIdBeerInStorage([
      ...idBeerInStorage,
      ...beers.filter(beer => beer.id === +e.target.id),
    ]);
  };

  const removeBeerClick = (e, id) => {
    e.preventDefault();

    setIdBeerInStorage(
      idBeerInStorage.filter(beer => beer.id === +e.target.id),
    );

    // console.log(idBeerInStorage);
  };

  const addBeerToBasket = () => {
    setIdBeerInStorage(beers);
  };

  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchBeersRedux());
  }, [isLoading, dispatch]);

  const PER_PAGE = 20;
  const offset = currentPage * PER_PAGE;

  const currentPageData = (
    <>
      {filteredBeers
        .slice(offset, offset + PER_PAGE)
        .map(({ id, image_url, name }) => {
          return (
            <li key={id} className={s.card}>
              {
                <div>
                  <img className={s.image} src={image_url} alt={name}></img>
                  <span className={s.name}>{name}</span>

                  <div className={s.wrap}>
                    <div className={s.panel}>
                      {
                        <button
                          id={id}
                          className={s.button}
                          onClick={e => addBeerClick(e)}
                        >
                          Add beer to basket
                        </button>
                      }
                      {
                        <button
                          id={id}
                          className={s.button}
                          onClick={e => removeBeerClick(e)}
                        >
                          Delete beer from basket
                        </button>
                      }
                    </div>
                  </div>
                </div>
              }
            </li>
          );
        })}
    </>
  );
  const pageCount = Math.ceil(beers.length / PER_PAGE);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  return (
    <>
      {
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          addBeerToBasket={addBeerToBasket}
          idBeerInStorage={idBeerInStorage}
        />
      }

      <div className={s.two}>
        <h1>List of Beers from all over the world</h1>
      </div>

      {<div className={s.cardList}>{currentPageData}</div>}

      <div className={s.paginationW}>
        <ReactPaginate
          previousLabel={'← Previous'}
          nextLabel={'Next →'}
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

export default Pagination;
