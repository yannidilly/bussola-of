import React from 'react';
import { useContext } from 'react';
import FormContext from '../context/FormContext';
import LinearScaleQuestion from './LinearScaleQuestion';

function Question() {
  const { form } = useContext(FormContext);

  return (
    <div className='questions'>
      {
        form.fields.map((field, index) => (
          <LinearScaleQuestion id={field.id} key={field.id} index={ index } />
        ))
      }
    </div>
  );
}

export default Question;
