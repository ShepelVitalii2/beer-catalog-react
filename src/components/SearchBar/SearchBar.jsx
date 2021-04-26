import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import s from './SearchBar.module.css';
import Modal from '../Modal';
import CustomSearch from '../CustomSearch';

export default function SearchBar({ searchQuery, setSearchQuery }) {
  const history = useHistory();

  const onSubmit = e => {
    history.push(`?s=${searchQuery}`);
  };

  const onSetSearchQuery = e => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className={s.wrap}>
      <form
        action="/beer-catalog-react"
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
          onInput={onSetSearchQuery}
          autoFocus
          placeholder="Find your beer"
        />
      </form>
      {<CustomSearch />}
      {<Modal />}

      <Link to="/beer-catalog-react/basket">
        <button>Basket</button>
      </Link>
    </header>
  );
}
