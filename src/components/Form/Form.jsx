import React from 'react';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import DatePicker from 'react-datepicker';

import s from './Form.module.css';
import 'react-datepicker/dist/react-datepicker.css';

export default function Form(props) {
  const { register, handleSubmit, errors } = useForm();
  const [startDate, setStartDate] = useState(new Date());
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
      <h2 className={s.h2}>Sign up</h2>
      <label htmlFor="text" className={s.label}>
        Personal information
      </label>
      <div>
        <input
          name="firstName"
          ref={register}
          placeholder="Name"
          className={s.input}
        />

        <input
          name="secondName"
          ref={register({ required: true, maxLength: 10 })}
          placeholder="Second name"
          className={s.input}
        />
        {errors.SecondName && <p className={s.p}>This field is required</p>}

        <input
          name="userName"
          ref={register}
          placeholder="User  name"
          className={s.input}
        />
      </div>
      <div>
        <label htmlFor="email" className={s.label}>
          Birthday
        </label>
        <DatePicker
          className={s.input}
          selected={startDate}
          onChange={date => setStartDate(date)}
        />
      </div>

      <div>
        <label htmlFor="email" className={s.label}>
          Email
        </label>
        <input
          name="email"
          placeholder="email@gmail.com"
          type="email"
          ref={register}
          className={s.input}
        />
      </div>

      <button
        type="submit"
        ref={register}
        className={s.button}
        onClick={() => props.onRequestClose()}
      >
        Submit
      </button>
    </form>
  );
}
