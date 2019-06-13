import React from 'react';

class ButtonWrapper extends React.Component {
  // ################################################################
  // ### Life Cycle Methods
  // ################################################################
  componentDidMount() {
    console.log('*** ButtonWrapper: componentDidMount called!');
  }

  componentDidUpdate() {
    console.log('*** ButtonWrapper: componentDidUpdate called!');
  }

  componentWillUnmount() {
    console.log('*** ButtonWrapper: componentWillUnmount called!');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('*** ButtonWrapper: shouldComponentUpdate called!');
    if (this.props.color !== nextProps.color) {
      return true;
    } else {
      return false;
    }
  }
  // ################################################################

  render() {
    console.log('*** ButtonWrapper: render called');
    let style = { backgroundColor: this.props.color, padding: `10px` };

    return (
      <div style={style}>
        <button onClick={this.props.onClickButton}>+1</button>
      </div>
    );
  }
}

export default ButtonWrapper;
