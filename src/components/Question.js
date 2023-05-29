import React from 'react';

class Question extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      options: [],
    }
  }

  componentDidMount() {
    const { currentQuestion } = this.props;

    this.setState({
      title: currentQuestion.label,
      options: currentQuestion.options,
    });
  }

  render() {
    const { title, options } = this.state;

    return (
      <div className='question'>
        <h2>{ title }</h2>
        
        { options.map((option) => (
            <div key={ option.label }>
              <input type="radio" id={ option.label } name='currentQuestion' value={ option.label }></input>
              <label>{ option.label }</label>
            </div>
          )) }

      </div>
    );
  }
}

export default Question;
