import React, { useContext } from 'react'
import QuestionContext from '../context/QuestionContext';
import { useLinearInput } from 'react-google-forms-hooks'

function LinearScaleQuestion({ id, index }) {
  const { question: { currentIndex }, setQuestion } = useContext(QuestionContext);
  
  const { options, legend, label, error } = useLinearInput(id);

  const visible = (index === currentIndex) ? '' : 'none';

  const onInputSelect = () => {
    setQuestion({
      currentIndex: index + 1,
    });
  }

  return (
    <>
      <div className='linear-scale-question-component' style={ { display: visible } }>
        <h2>{ `${index + 1}. ${label}` }</h2>
        <div className='select-options-div'>
          <span className='pouco'>{legend.labelFirst}</span>
          <div className='select-options-bullets-div'>
            <hr />
            <div className='all-options-div'>
              {
                options.map((option) => (
                  <div key={option.id} className='select-options-bullets'>
                    <input
                      type='radio'
                      {...option.registerOption()}
                      onChange={ onInputSelect }
                    />
                    <label>{ option.label }</label>
                  </div>
                ))
              }
            </div>
          </div>
          <span className='muito'>{legend.labelLast}</span>
        </div>
      </div>
      <span>{error && 'Esse campo é obrigatório'}</span>
    </>
  )
}

export default LinearScaleQuestion;
