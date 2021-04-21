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
          placeholder="Find your beer"
        />
      </form>
      {<CustomSearch />}
      {<Modal />}
      <Link to="/beer-catalog-react/basket">Basket</Link>
      {<Link to="/beer-catalog-react">Main</Link>}
    </header>
  );
}
