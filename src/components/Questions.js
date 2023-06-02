import React from 'react';
import LinearScaleQuestion from './LinearScaleQuestion';

function Question({ fields }) {
  const fieldType = (field, index) => {
    let input = <></>;
    switch (field.type) {
      case "LINEAR":
        input = <LinearScaleQuestion id={field.id} index={ index } />
        break;
    
      default:
        input = <></>
        break;
    }

    return input;
  }

  return (
    <div className='questions'>
      {
        fields.map((field, index) => (
          <div key={index}>
            {fieldType(field, index)}
          </div>
        ))
      }
    </div>
  );
}

export default Question;
