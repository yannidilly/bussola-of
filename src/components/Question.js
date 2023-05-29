import React from 'react';
import { useContext } from 'react';
import FormContext from '../context/FormContext';
import QuestionContext from '../context/QuestionContext'

function Question() {
  const { form } = useContext(FormContext);
  const { question: { currentIndex } } = useContext(QuestionContext);

  const { title, options } = {
    title: form.fields[currentIndex].label,
    options: form.fields[currentIndex].options,
  };

  return (
    <div className='question'>
      <h2>{ title }</h2>
      { options.map((option) => (
          <div key={ option.label }>
            <input type="radio" id={ option.label } name='currentQuestion' value={ option.label }></input>
            <label>{ option.label }</label>
          </div>
        )) }
    </div>
  );
}

export default Question;
