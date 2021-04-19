import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import { useState } from 'react';
import s from './SearchBar.module.css';
import Modal from '../Modal';
import CustomSearch from '../CustomSearch';
// import Basket from '../Basket';
// import fetchBeers from '../APIservice';

export default function SearchBar({
  searchQuery,
  setSearchQuery,
  filteredByAttenL,
  filteredByAttenM,
  filteredByABV,
  // addBeerToBasket,
  idBeerInStorage,
}) {
  // console.log(idBeerInStorage);
  const history = useHistory();

  const onSubmit = e => {
    history.push(`?s=${searchQuery}`);
  };

  return (
    <header
      className={s.wrap}
      // onSubmit={handleSubmit}
    >
      <form
        action="/"
        method="get"
        className={s.searchForm}
        onSubmit={onSubmit}
      >
        <button type="submit" className={s.button}>
          <span className={s.label}>Search</span>
        </button>

        <label htmlFor="header-search">
          <span className={s.visuallyHidden}>TEST</span>
        </label>

        <input
          name="s"
          id="header-search"
          className={s.input}
          type="text"
          autoComplete="off"
          value={searchQuery}
          onInput={e => setSearchQuery(e.target.value)}
          autoFocus
          // onChange={queryNameChange}
          placeholder="TEST"
        />
      </form>
      {
        <CustomSearch
          filteredByAttenL={filteredByAttenL}
          filteredByAttenM={filteredByAttenM}
          filteredByABV={filteredByABV}
        />
      }
      {<Modal />}
      <Link to="/beer-catalog-react/basket">Basket</Link>
      {<Link to="/beer-catalog-react">Main</Link>}
    </header>
  );
}
