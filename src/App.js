import React, { useState, useEffect } from 'react';
// import axios from 'axios';

import fetchBeers from './components/APIservice';
import LoaderSpinner from './components/Loader';
import StartPage from './components/StartPage';
// import Modal from './components/Modal';
import Navbar from './components/Navbar';
// import BeerList from './components/BeerList';
// import SearchBar from './components/SearchBar';

export default function App() {
  const [query, setQuery] = useState('');
  const [gallery, setGallery] = useState([]);
  // const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }
    setIsLoading('true');
    fetchBeers(query)
      .then(beers => {
        setGallery(gallery => [...gallery, ...beers]);
      })
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));
  }, [query]);

  // const handleFormSubmit = submitQuery => {
  //   if (submitQuery !== query) {
  //     setQuery('');
  //     setGallery([]);
  //     setPage(1);
  //   }
  // };

  // const onRegistratinClick = e => {
  //   e.preventDefault();

  //   setIsModalOpen(true);
  // };

  // const toggleModal = () => {
  //   setIsModalOpen(!isModalOpen);
  //   console.log(isModalOpen);
  // };

  return (
    <div>
      {<Navbar />}

      {/* <SearchBar onSubmit={handleFormSubmit} /> */}
      {gallery.length === 0 && <StartPage />}
      <div>{isLoading && <LoaderSpinner />}</div>
      {/* {query && <BeerList gallery={gallery} />} */}
      {/* {isModalOpen && <Modal onClose={toggleModal}></Modal>} */}
    </div>
  );
}
