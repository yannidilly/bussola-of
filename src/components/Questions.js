import React from 'react';
import { useContext } from 'react';
import FormContext from '../context/FormContext';

function Question() {
  const { form } = useContext(FormContext);

  return (
    <div className='questions'>
      {
        form.fields.map((field) => (
          <div key={ field.id } className='question'>
            <h2>{ field.label }</h2>
            { field.options.map((option) => (
                <div key={ option.label }>
                  <input type="radio" id={ option.label } name='currentQuestion' value={ option.label }></input>
                  <label>{ option.label }</label>
                </div>
              )) }
          </div>
        ))
      }
    </div>
  );
}

export default Question;
