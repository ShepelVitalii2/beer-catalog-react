import React from 'react';
import { useForm } from 'react-hook-form';
import s from '../Form/Form.module.css';
import * as actions from '../../redux/actions';
import { useDispatch } from 'react-redux';

export default function Form({ onRequestClose }) {
  // const chosenBeer = useSelector(state => state.value);
  // console.log(chosenBeer);
  const dispatch = useDispatch();

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
            onClick={() => dispatch(actions.filteredByAttenL())}
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
            onClick={() => dispatch(actions.filteredByAttenM())}
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
            onClick={() => dispatch(actions.filteredByABV())}
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
