import React from 'react';
import ButtonWrapper from './ButtonWrapper';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };

    this.onClickButton = this.onClickButton.bind(this);
  }

  // ################################################################
  // ### Life Cycle Methods
  // ################################################################
  componentDidMount() {
    console.log('App: componentDidMount called!');
  }

  componentWillUnmount() {
    console.log('App: componentWillUnmount called!');
  }

  componentDidUpdate() {
    console.log('App: componentDidUpdate called!');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('App: shouldComponentUpdate called!');
  //   return true;
  // }
  // ################################################################

  onClickButton() {
    console.log('----------------------------');
    console.log('    Button clicked!!!');
    console.log('----------------------------');
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    console.log('App: render called!');
    let color;

    if (this.state.count % 3 === 0) {
      color = `FloralWhite`;
    } else {
      color = `FireBrick`;
    }

    return (
      <div>
        <h1>{this.state.count}</h1>
        <ButtonWrapper color={color} onClickButton={this.onClickButton} />
      </div>
    );
  }
}

export default App;
