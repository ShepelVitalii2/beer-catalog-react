import axios from 'axios';

const BASE_URL = 'https://api.punkapi.com/v2/';

export default function fetchBeers() {
  const pageOne = axios.get(`${BASE_URL}beers?page=1&per_page=80`);

  const pageTwo = axios.get(`${BASE_URL}beers?page=2&per_page=80`);

  const pageThree = axios.get(`${BASE_URL}beers?page=3&per_page=80`);

  const pageFour = axios.get(`${BASE_URL}beers?page=4&per_page=80`);

  const pageFive = axios.get(`${BASE_URL}beers?page=5&per_page=80`);

  return Promise.all([pageOne, pageTwo, pageThree, pageFour, pageFive]).then(
    values => {
      return [
        ...values[0].data,
        ...values[1].data,
        ...values[2].data,
        ...values[3].data,
        ...values[4].data,
      ];
    },
  );
}
