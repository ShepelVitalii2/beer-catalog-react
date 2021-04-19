import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchBeers from '../APIservice';
import ReactPaginate from 'react-paginate';
import s from './StartPage.module.css';
import SearchBar from '../SearchBar';
import { fetchBeersRedux } from '../../redux/operations';

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const beers = useSelector(state => state.startPage.beers);

  const [isLoading, setIsLoading] = useState(false);
  const [checkedValues, setCheckedValues] = useState([]);
  const [idBeerInStorage, setIdBeerInStorage] = useState([]);
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

  const filteredByAttenM = e => {
    if (e.target.checked) {
      const beerByAttenM = beers.filter(beer => beer.attenuation_level > 75);

      setCheckedValues(beerByAttenM);
    }
  };

  const filteredByABV = e => {
    if (e.target.checked) {
      const beerByABV = beers.filter(beer => beer.abv > 5);
      setCheckedValues(beerByABV);
    }
  };

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

    console.log(idBeerInStorage);
  };

  const addBeerToBasket = () => {
    setIdBeerInStorage(beers);
  };

  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchBeersRedux());

    // fetchBeers()
    //   .then(beers => setBeers(beers))
    //   .catch(error => console.log(error))
    //   .finally(setIsLoading(false));
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
                          onClick={e => addBeerClick(e)}
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

  const filteredCustomBeers = (
    <ul>
      {checkedValues
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
    </ul>
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
          // filteredByAttenL={filteredByAttenL}
          filteredByAttenM={filteredByAttenM}
          filteredByABV={filteredByABV}
          addBeerToBasket={addBeerToBasket}
          idBeerInStorage={idBeerInStorage}
        />
      }

      <div className={s.two}>
        <h1>List of Beers from all over the world</h1>
      </div>

      {
        <div className={s.cardList}>
          {checkedValues.length === 0 ? currentPageData : filteredCustomBeers}
        </div>
      }

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
