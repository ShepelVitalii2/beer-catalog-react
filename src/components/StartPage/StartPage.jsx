// import React from 'react';
// import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import fetchBeers from '../APIservice';

// import axios from 'axios';

import BeerList from '../BeerList';
import Loader from '../Loader';
import Pagination from '../Pagination';

export default function StartPage() {
  // const [beers, setBeers] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetchBeers()
  //     .then(beers => setBeers(beers))
  //     .catch(error => console.log(error))
  //     .finally(setIsLoading(false));
  // }, [isLoading, beers]);
  return (
    <div>
      {/* {isLoading & <Loader />} */}
      {/* <BeerList beers={beers} /> */}
      <Pagination />
    </div>
  );
}
// export default class StartPage extends Component {
//   state = {
//     beers: [],
//     isLoading: false,
//     error: null,
//   };
//   componentDidMount() {
//     this.setState({ isLoading: true });
//     axios
//       .get('https://api.punkapi.com/v2/beers?page=2&per_page=80')
//       .then(response => this.setState({ beers: response.data }))
//       .catch(error => this.setState({ error }))
//       .finally(() => this.setState({ isLoading: false }));
//   }
//   render() {
//     const { beers, isLoading, error } = this.state;
//     return (
//       <>
//         {error && <p>Whoops, something went wrong: {error.message}</p>}
//         {isLoading && <p>Loading...</p>}
//         {beers.length > 0 && <BeerList beers={beers} />}
//       </>
//     );
//   }
// }
