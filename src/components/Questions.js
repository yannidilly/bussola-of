import React from 'react';
import LinearScale from './inputs/LinearScale';
import Radio from './inputs/Radio';
import ShortAnswer from './inputs/ShortAnswer';
import LongAnswer from './inputs/LongAnswer';

function Question({ fields }) {
  const fieldType = (field, index) => {
    let input = <></>;
    switch (field.type) {
      case "LINEAR":
        input = <LinearScale id={field.id} index={ index } />
        break;
      case 'RADIO':
        input = <Radio id={field.id} index={ index } />
        break
      case 'SHORT_ANSWER':
        input = <ShortAnswer id={field.id} index={ index } />
        break
      case 'LONG_ANSWER':
        input = <LongAnswer id={field.id} index={ index } />
        break

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
