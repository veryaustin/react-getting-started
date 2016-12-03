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
  render() {
    return (
      <button onClick={this.props.onClickFunction}>
        +1
      </button>
    );
  }
};

// Functional Component
const Result = (props) => {
  return (
    <div>{props.counter}</div>
  );
};

// App component to include all other components for rendering in the DOM using render
class App extends Component {

  state = { counter: 0 };

  incrementCounter = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }));
  };

  render() {
    return (
      <div>
        <Button onClickFunction={this.incrementCounter} />
        <Result counter={this.state.counter} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));