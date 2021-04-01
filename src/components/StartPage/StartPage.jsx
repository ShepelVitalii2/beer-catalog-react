import { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
import apiService from '../APIservice';
import ReactPaginate from 'react-paginate';
import s from './StartPage.module.css';
// import BeerList from '../BeerList';
// import CustomBeerList from '../CustomBeerList';

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [beers, setBeers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isToggle, setToggle] = useState(true);

  const handleClick = e => {
    setToggle(!isToggle);

    e.preventDefault();
  };

  useEffect(() => {
    // console.log(fetchBeers);
    setIsLoading(true);
    beers
      ? apiService
          .fetchBeers()
          .then(beers => setBeers(beers))
          .catch(error => console.log(error))
          .finally(setIsLoading(false))
      : apiService
          .fetchBeersByName()
          .then(beers => setBeers(beers))
          .catch(error => console.log(error))
          .finally(setIsLoading(false));
  }, [isLoading, beers]);

  const PER_PAGE = 10;
  const offset = currentPage * PER_PAGE;

  const currentPageData = beers
    .slice(offset, offset + PER_PAGE)
    .map(({ id, image_url, name, first_brewed, food_pairing }) => (
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
    ));
  const pageCount = Math.ceil(beers.length / PER_PAGE);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  return (
    <>
      <div className={s.two}>
        <h1>List of Beers from all over the world</h1>
      </div>
      <div className={s.cardList}>{currentPageData}</div>

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
