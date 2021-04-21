import React from 'react';
import { useForm } from 'react-hook-form';
import s from '../Form/Form.module.css';
import {
  filteredByAttenL,
  filteredByAttenM,
  filteredByABV,
} from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

export default function Form({ onRequestClose }) {
  const dispatch = useDispatch();
  // const filteredBy = useSelector(state => state.startPage.filteredBy);
  // const beers = useSelector(state => state.startPage.beers);

  // const allBeers = store.getState().startPage.beers;

  // const filteredByAttenL = e => {
  //   if (e.target.checked) {
  //     return beers.filter(beer => beer.attenuation_level > 75);
  //   }
  // };
  // console.log(allBeers);

  const { register, getValues } = useForm({
    mode: 'onChange',
  });
  const atLeastOne = () =>
    getValues('test').length ? true : 'Please tell me if this is too hard.';

  return (
    <>
      <form>
        <label htmlFor="name">
          <input
            className={s.button}
            type="radio"
            name="test"
            ref={register({
              validate: atLeastOne,
            })}
            onClick={e => dispatch(filteredByAttenL())}
          />
          Период затухания больше 75
        </label>

        <label htmlFor="name">
          <input
            type="radio"
            name="test"
            ref={register({
              validate: atLeastOne,
            })}
            onClick={e => dispatch(filteredByAttenM())}
          />
          Период затухания меньше 75
        </label>

        <label htmlFor="name">
          <input
            type="radio"
            name="test"
            ref={register({
              validate: atLeastOne,
            })}
            onClick={e => dispatch(filteredByABV())}
          />
          Крепкое пиво
        </label>
      </form>

      <button
        name="button "
        type="submit"
        ref={register}
        className={s.button}
        onClick={onRequestClose}
      >
        Go!
      </button>
    </>
  );
}

// const mapStateToProps = state => {
//   return;
// };

// export default connect(mapStateToProps)(Form);
