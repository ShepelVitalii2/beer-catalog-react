import { useState } from 'react';
import s from './SearchBar.module.css';

export default function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const queryNameChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      alert('Введите название фильма');
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <header onSubmit={handleSubmit}>
      <form className={s.searchForm}>
        <button type="submit" className={s.button}>
          <span className={s.label}>Search</span>
        </button>

        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          value={query}
          onChange={queryNameChange}
          placeholder="Just type smth"
        />
      </form>
    </header>
  );
}
