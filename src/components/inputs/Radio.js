import React, { useContext } from 'react'
import QuestionContext from '../../context/QuestionContext';
import ControlFormButtons from '../ControlFormButtons';

function Radio({ id, index }) {
  const { question: { currentIndex } } = useContext(QuestionContext);

  const visible = (index === currentIndex) ? '' : 'none';

  return (
    <div style={ { display: visible } }>
      <p>Radio</p>
      <ControlFormButtons />
    </div>
  )
}

export default Radio;
