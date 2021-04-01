import axios from 'axios';
// import PropTypes from 'prop-types';

const BASE_URL = 'https://api.punkapi.com/v2/';

function fetchBeers() {
  return axios
    .get(`${BASE_URL}beers?page=1&per_page=80`)

    .then(response => response.data);
}

function fetchBeersByName(query) {
  return axios
    .get(`${BASE_URL}beers?beer_name=${query}`)

    .then(response => response.data);
}

// apiService.propTypes = {
//   query: PropTypes.string.isRequired,
//   currentPage: PropTypes.number.isRequired,
// };

const apiService = { fetchBeers, fetchBeersByName };
export default apiService;
// export default { fetchBeers, fetchBeersByName };
