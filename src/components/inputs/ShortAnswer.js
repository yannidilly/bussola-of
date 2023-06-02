import React, { useContext } from 'react'
import QuestionContext from '../../context/QuestionContext';
import ControlFormButtons from '../ControlFormButtons';

function ShortAnswer({ id, index }) {
  const { question: { currentIndex } } = useContext(QuestionContext);

  const visible = (index === currentIndex) ? '' : 'none';

  return (
    <div style={ { display: visible } }>
      <p>ShortAnswer</p>
      <ControlFormButtons />
    </div>
  )
}

export default ShortAnswer;
