import { useState } from 'react';
import s from './SearchBar.module.css';
import Modal from '../Modal';
import CustomSearch from '../CustomSearch';
// import fetchBeers from '../APIservice';

export default function SearchBar({ onSubmit }) {
  const [input, setInput] = useState('');

  // const [isLoading, setIsLoading] = useState(false);
  // const [isBeers, setIsBeers] = useState([]);

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetchBeers()
  //     .then(isBeers => setIsBeers(isBeers))
  //     .catch(error => console.log(error))
  //     .finally(setIsLoading(false));
  // }, [isLoading, isBeers]);

  const queryNameChange = e => {
    setInput(e.currentTarget.value.toLowerCase());
    console.log(input);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (input.trim() === '') {
      return alert('Введите название картинки');
    }
    onSubmit(input);
    setInput('');
  };

  // const onRegistratinClick = e => {
  //   e.preventDefault();

  //   setIsModalOpen(true);
  // };

  // const toggleModal = () => {
  //   setIsModalOpen(!isModalOpen);
  //   console.log(isModalOpen);
  // };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   if (input.trim() === '') {
  //     alert('Dude, type something');
  //   }

  //   // onSubmit(query);
  //   // setQuery('');
  //   console.log(input);
  // };

  return (
    <header className={s.wrap} onSubmit={handleSubmit}>
      <form className={s.searchForm}>
        <button type="submit" className={s.button}>
          <span className={s.label}>Search</span>
        </button>

        <input
          className={s.input}
          type="text"
          autoComplete="off"
          value={input}
          autoFocus
          onChange={queryNameChange}
          placeholder="TEST"
        />
      </form>
      {<CustomSearch />}
      {<Modal />}
    </header>
  );
}
