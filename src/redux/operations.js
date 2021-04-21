import fetchAllBeers from '../components/APIservice';
import {
  fetchBeersRequest,
  fetchBeersSuccess,
  fetchBeersError,
} from './actions';

export const fetchBeersRedux = () => dispatch => {
  dispatch(fetchBeersRequest());
  fetchAllBeers()
    .then(data => dispatch(fetchBeersSuccess(data)))
    .catch(error => dispatch(fetchBeersError(error)));
};
