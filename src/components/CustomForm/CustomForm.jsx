import React from 'react';

import { useForm } from 'react-hook-form';
// import { useState } from 'react';

import s from '../Form/Form.module.css';

export default function Form() {
  const { register, getValues, errors } = useForm({
    mode: 'onChange',
  });
  const atLeastOne = () =>
    getValues('test').length ? true : 'Please tell me if this is too hard.';

  console.log(errors);

  return (
    <>
      <form>
        <label htmlFor="name">
          {' '}
          <input
            type="checkbox"
            name="test"
            ref={register({
              validate: atLeastOne,
            })}
          />
          Hello
        </label>

        <input
          type="checkbox"
          name="test"
          ref={register({
            validate: atLeastOne,
          })}
        />
        <input
          type="checkbox"
          name="test"
          ref={register({
            validate: atLeastOne,
          })}
        />
      </form>

      <button type="submit" ref={register} className={s.button}>
        Go!
      </button>
    </>
  );
}
