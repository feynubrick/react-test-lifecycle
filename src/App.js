import React from 'react';
import Image from './Image';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    };
    this.text = `ReactDOM.render(<App />, document.getElementById('root'))`;
    this.onClickButton = this.onClickButton.bind(this);
  }

  componentDidMount() {
    console.log('App mounted!');
  }

  componentWillUnmount() {
    console.log('App unmounted!');
  }

  componentDidUpdate() {
    console.log('App updated!');
  }

  onClickButton() {
    // console.log('clicked!');
    this.setState(prevState => ({ clicked: !prevState.clicked }));
  }

  render() {
    console.log('App render');
    let buttonText;
    if (this.state.clicked) {
      buttonText = '개발자 버전 보기';
    } else {
      buttonText = '일반인 버전 보기';
    }

    return (
      <div>
        <h1>React</h1>
        <div>
          <button onClick={this.onClickButton}>{buttonText}</button>
          <br />
          {this.state.clicked ? <Image /> : <h2>{this.text}</h2>}
        </div>
      </div>
    );
  }
}

export default App;
