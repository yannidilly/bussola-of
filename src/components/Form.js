import React from 'react';
import Question from './Question';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      currentQuestionIndex: 0,
    };
  }

  buttonClick = (event) => {
    const { value } = event.target;
    const { currentQuestionIndex } = this.state;

    if (value === 'prev') {
      this.setState({
        currentQuestionIndex: currentQuestionIndex - 1,
      });
    }
    if (value === 'next') {
      this.setState({
        currentQuestionIndex: currentQuestionIndex + 1,
      });

    }
  };

  render() {
    const { fields } = this.props;
    const { currentQuestionIndex } = this.state;

    return (
      <form>
        <Question currentQuestion={ fields[currentQuestionIndex] } />
        <div>
          <button type="button" onClick={ this.buttonClick } value='prev'>Anterior</button>
          <button type="button" onClick={ this.buttonClick } value='next'>Próxima</button>
        </div>
      </form>
    );
  }
}

export default Form;