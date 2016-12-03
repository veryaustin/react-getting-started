import React from 'react';
import { render } from 'react-dom';
import { Component } from 'react';

//--- Functional Component ---//

// const Button = function () {
//   return (
//     <button>5</button>
//   );
// };
// render(<Button />, document.getElementById('root'));



//--- Functional Component With Props ---//

// const Button = function (props) {
//   return (
//     <button>{props.label}</button>
//   );
// };
// render(<Button label="This is a test label"/>, document.getElementById('root'));



//--- Number Advance Using Class Component ---//
class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  };

  handleClick = () => {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1
      }
    });
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.counter}
      </button>
    );
  }
};

render(<Button label="This is a test label" />, document.getElementById('root'));