import React from 'react';
import { useContext } from 'react';
import FormContext from '../context/FormContext';
import LinearScaleQuestion from './LinearScaleQuestion';

function Question() {
  const { form } = useContext(FormContext);

  return (
    <div className='questions'>
      {
        form.fields.map((field) => (
          <LinearScaleQuestion id={field.id} key={field.id} />
        ))
      }
    </div>
  );
}

export default Question;
