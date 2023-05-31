import React from 'react'
import { useLinearInput } from 'react-google-forms-hooks'

function LinearScaleQuestion({ id }) {
  const { options, legend, label, error } = useLinearInput(id)

  return (
    <>
      <div className='linear-scale-question-component'>
        <h2>{ label }</h2>
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
