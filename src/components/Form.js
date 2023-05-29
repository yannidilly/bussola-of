import React from 'react';
import Question from './Question';

class Form extends React.Component {
  render() {
    const { fields } = this.props;

    return (
      <form>
        <Question currentQuestion={ fields[0] } />
      </form>
    );
  }
}

export default Form;