import React, { useContext, useState } from 'react'
import QuestionContext from '../../context/QuestionContext';
import ControlFormButtons from '../ControlFormButtons';
import { useLongAnswerInput } from 'react-google-forms-hooks';

function LongAnswer({ id, index }) {
  const { question: { currentIndex } } = useContext(QuestionContext);
  const [filled, setFilled] = useState(false);

  const { label, register, required } = useLongAnswerInput(id);

  const onInputChange = (event) => {
    // a ordem do onChange no componente importa
    if (event.target.value.length > 5) {
      setFilled(true);
    }
  };
  
  const visible = (index === currentIndex) ? '' : 'none';

  return (
    <div style={ { display: visible } }>
      <h2>{label}</h2>
      <input
        type='text'
        {...register()}
        onChange={ onInputChange }
        />
      <ControlFormButtons disable={ !(filled || !required) }/>
    </div>
  )
}

export default LongAnswer;
