import React from 'react'
import { useLinearInput } from 'react-google-forms-hooks'

function LinearScaleQuestion({ id }) {
  const { options, legend, label, error } = useLinearInput(id)

  return (
    <>
      <div>
        <h2>{ label }</h2>
        <div>{legend.labelFirst}</div>
        {
          options.map((option) => (
            <input key={option.id} type='radio' {...option.registerOption()} />
          ))
        }
        <div>{legend.labelLast}</div>
      </div>
      <span>{error && 'Esse campo é obrigatório'}</span>
    </>
  )
}

export default LinearScaleQuestion;
