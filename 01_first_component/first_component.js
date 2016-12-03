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

  handleClick = () => {
    this.props.onClickFunction(this.props.incrementValue);
  };

  render() {
    return (
      <button
        onClick={this.handleClick}>
        +{this.props.incrementValue}
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

  state = {counter: 0};

  incrementCounter = (incrementValue) => {
    this.setState((prevState) => ({
      counter: prevState.counter + incrementValue
    }));
  };

  render() {
    return (
      <div>
        <Button incrementValue={1} onClickFunction={this.incrementCounter} />
        <Button incrementValue={5} onClickFunction={this.incrementCounter} />
        <Button incrementValue={10} onClickFunction={this.incrementCounter} />
        <Button incrementValue={100} onClickFunction={this.incrementCounter} />
        <Result counter={this.state.counter} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));