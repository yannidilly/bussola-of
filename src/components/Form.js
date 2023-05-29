import React from 'react';
import { useContext } from 'react';
import QuestionContext from '../context/QuestionContext'
import Question from './Question';

function Form() {
  const { question: { currentIndex }, setQuestion } = useContext(QuestionContext);

  const buttonClick = (event) => {
    const { value } = event.target;

    if (value === 'prev') {
      setQuestion({
        currentIndex: currentIndex - 1,
      });
    }
    if (value === 'next') {
      setQuestion({
        currentIndex: currentIndex + 1,
      });
    }
  };

  return (
    <form>
      <Question />
      <div>
        <button type="button" onClick={ buttonClick } value='prev'>Anterior</button>
        <button type="button" onClick={ buttonClick } value='next'>Próxima</button>
      </div>
    </form>
  );
}

export default Form;