import React from 'react';

class Question extends React.Component {
  render() {
    const { fields } = this.props;

    return (
      <div className='question'>
        <h2>{ fields[0].label }</h2>
        
        { fields[0].options.map((option) => (
            <div>
              <input type="radio" id={ option.label } name='currentQuestion' value={ option.label }></input>
              <label>{ option.label }</label>
            </div>
          )) }

      </div>
    );
  }
}

export default Question;
