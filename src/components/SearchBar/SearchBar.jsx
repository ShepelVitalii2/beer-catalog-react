import { useState } from 'react';
import s from './SearchBar.module.css';
import Modal from '../Modal';
import CustomSearch from '../CustomSearch';

export default function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState('');
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const queryNameChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  // const onRegistratinClick = e => {
  //   e.preventDefault();

  //   setIsModalOpen(true);
  // };

  // const toggleModal = () => {
  //   setIsModalOpen(!isModalOpen);
  //   console.log(isModalOpen);
  // };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      console.log('Заполните поле');
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <header onSubmit={handleSubmit} className={s.wrap}>
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
          placeholder="TEST"
        />
      </form>
      {<CustomSearch />}
      {<Modal />}
    </header>
  );
}
