import React, { useContext, useState } from 'react'
import QuestionContext from '../../context/QuestionContext';
import ControlFormButtons from '../ControlFormButtons';
import { useRadioInput } from 'react-google-forms-hooks';

function Radio({ id, index }) {
  const { question: { currentIndex } } = useContext(QuestionContext);
  const [selected, setSelected] = useState(false);

  const { label, options, required } = useRadioInput(id);

  const visible = (index === currentIndex) ? '' : 'none';

  const onInputSelect = () => {
    setSelected(true);
  }

  return (
    <div className='radio-question-component' style={ { display: visible } }>
      <h2>{ label }</h2>
      <div>
              {
                options.map((option) => (
                  <div key={option.id}>
                    <input
                      type='radio'
                      {...option.registerOption()}
                      onChange={ onInputSelect }
                      id={option.id}
                    />
                    <label htmlFor={option.id}>{ option.label }</label>
                  </div>
                ))
              }
      </div>
      <ControlFormButtons disable={ !(selected || !required) } />
    </div>
  )
}

export default Radio;
