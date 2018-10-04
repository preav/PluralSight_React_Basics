import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  };

  updateCounter = (displayVal) => {
    this.setState((prevState) => ({
      counter: prevState.counter + displayVal
    }));
  };

  render() {
    return (
      <div className="App">
        <Button updateCounter = {this.updateCounter} displayVal = {5}/>
        <DisplayChange display = {this.state.counter}/>
      </div>
    );
  }
}

class Button extends Component {
  render() {
    return (
      <button onClick={() => this.props.updateCounter(this.props.displayVal)}>
      +{this.props.displayVal}
      </button>
    )
  }
}

const DisplayChange = (props) => {
  return (
    <div>
      {props.display}
    </div>
  );
};

export default App;
