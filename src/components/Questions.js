import React from 'react';
import { useContext } from 'react';
import BussolaContext from '../context/BussolaContext';
import LinearScaleQuestion from './LinearScaleQuestion';

function Question() {
  const { form } = useContext(BussolaContext);

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
