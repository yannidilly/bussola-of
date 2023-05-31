import React, { useContext } from 'react'
import QuestionContext from '../context/QuestionContext';
import { useLinearInput } from 'react-google-forms-hooks'

function LinearScaleQuestion({ id, index }) {
  const { question: { currentIndex } } = useContext(QuestionContext);
  
  const { options, legend, label, error } = useLinearInput(id);

  const visible = (index === currentIndex) ? '' : 'none'

  return (
    <>
      <div className='linear-scale-question-component' style={ { display: visible } } key={ id }>
        <h2>{ `${index + 1}. ${label}` }</h2>
        <div className='select-options-div'>
          <span className='pouco'>{legend.labelFirst}</span>
          <div className='select-options-bullets-div'>
            <hr />
            <div className='all-options-div'>
              {
                options.map((option) => (
                  <div className='select-options-bullets'>
                    <input key={option.id} type='radio' {...option.registerOption()} />
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
