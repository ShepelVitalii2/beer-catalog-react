import React from 'react';
import { useForm } from 'react-hook-form';
import s from '../Form/Form.module.css';
import img from '../../img/cancel-circle.png';
import {
  filteredByAttenL,
  filteredByAttenM,
  filteredByABV,
} from '../../redux/actions';
import { useDispatch } from 'react-redux';

export default function Form({ onRequestClose }) {
  const dispatch = useDispatch();

  const { register, getValues } = useForm({
    mode: 'onChange',
  });
  const atLeastOne = () =>
    getValues('test').length ? true : 'Please tell me if this is too hard.';

  return (
    <>
      <form>
        <img
          src={img}
          alt={'img'}
          className={s.image}
          onClick={onRequestClose}
        />
        <label htmlFor="name">
          <input
            className={s.button}
            type="radio"
            name="test"
            ref={register({
              validate: atLeastOne,
            })}
            onClick={() => dispatch(filteredByAttenL())}
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
            onClick={() => dispatch(filteredByAttenM())}
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
            onClick={() => dispatch(filteredByABV())}
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
