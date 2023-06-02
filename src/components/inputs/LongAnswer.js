import React, { useContext } from 'react'
import QuestionContext from '../../context/QuestionContext';
import ControlFormButtons from '../ControlFormButtons';

function LongAnswer({ id, index }) {
  const { question: { currentIndex } } = useContext(QuestionContext);

  const visible = (index === currentIndex) ? '' : 'none';

  return (
    <div style={ { display: visible } }>
      <p>LongAnswer</p>
      <ControlFormButtons />
    </div>
  )
}

export default LongAnswer;
