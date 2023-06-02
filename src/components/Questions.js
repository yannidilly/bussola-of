import React from 'react';
import LinearScaleQuestion from './LinearScaleQuestion';

function Question({ fields }) {
  return (
    <div className='questions'>
      {
        fields.map((field, index) => (
          <LinearScaleQuestion id={field.id} key={field.id} index={ index } />
        ))
      }
    </div>
  );
}

export default Question;
