import axios from 'axios';
import PropTypes from 'prop-types';

const BASE_URL = 'https://api.punkapi.com/v2/';

const apiService = () => {
  return axios
    .get(`${BASE_URL}beers?page=1&per_page=80`)

    .then(response => response.data);
};

apiService.propTypes = {
  query: PropTypes.string.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default apiService;
