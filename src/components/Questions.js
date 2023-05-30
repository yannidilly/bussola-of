import React from 'react';
import { useContext } from 'react';
import FormContext from '../context/FormContext';

function Question() {
  const { form } = useContext(FormContext);
  // adicionar useLinearInput do react-google-forms-hooks

  return (
    <div className='questions'>
      {
        form.fields.map((field) => (
          <div key={ field.id } className='question'>
            <h2>{ field.label }</h2>
            { field.options.map((option) => (
                <div key={ option.label }>
                  <input type="radio" id={ option.label } name={ field.id } value={ option.label } />
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
