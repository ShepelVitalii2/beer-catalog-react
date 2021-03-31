import React, { useState, useEffect } from 'react';
// import axios from 'axios';

import fetchBeers from './components/APIservice';
import LoaderSpinner from './components/Loader';
import StartPage from './components/StartPage';
// import Modal from './components/Modal';
// import Navbar from './components/Navbar';
// import BeerList from './components/BeerList';
import SearchBar from './components/SearchBar';

export default function App() {
  const [beers, setBeers] = useState('');
  const [gallery, setGallery] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!beers) {
      return;
    }
    setIsLoading('true');
    fetchBeers(beers)
      .then(beers => {
        setGallery([beers]);
      })
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));
  }, [beers]);

  // const fetchData = async () => {
  //   return await fetch(`https://api.punkapi.com/v2/beers/beer_name=${beers}`)
  //     .then(response => response.json())
  //     .then(beers => {
  //       setBeers(beers);
  //       console.log(beers);
  //       // setCountryListDefault(data);
  //     });
  // }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     return await fetch(`https://api.punkapi.com/v2/beers?page=1&per_page=80`)
  //       .then(response => response.json())
  //       .then(beers => {
  //         setBeers(beers);
  //         setGallery(beers);
  //       });
  //   };

  //   return fetchData;
  // }, [beers]);

  // const handleFormSubmit = async (e, beers) => {
  //   console.log(e);
  //   const filtered = gallery.filter(beers => {
  //     return beers.name.toLowerCase().includes(beers.toLowerCase());
  //   });
  //   setBeers(beers);
  //   setGallery(filtered);
  //   console.log(filtered);
  // };

  const handleFormSubmit = query => {
    if (query !== beers) {
      setGallery([]);
      setBeers(query);
    }
  };

  return (
    <div>
      {/* {<Navbar />} */}

      <SearchBar onSubmit={handleFormSubmit} />
      {<StartPage />}
      <div>{isLoading && <LoaderSpinner />}</div>
      {beers && <StartPage gallery={gallery} />}
      {/* {isModalOpen && <Modal onClose={toggleModal}></Modal>} */}
    </div>
  );
}
