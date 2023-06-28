import React, { useContext } from 'react';
import QuestionContext from '../context/QuestionContext'

function ControlFormButtons({ disable } = { disable: false }) {
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

  const visible = (currentIndex === 0) ? 'hidden' : 'visible';

  return (
    <div className='pesquisa-button-div'>
      <button
        className='pesquisa-button'
        type="button"
        onClick={ buttonClick }
        value='prev'
        style={ { visibility: visible } }
      >
        Anterior
      </button>
      <button
        className='pesquisa-button'
        type="button"
        onClick={ buttonClick }
        value='next'
        disabled={ disable }
      >
        Próxima
      </button>
    </div>
  );
}

export default ControlFormButtons;