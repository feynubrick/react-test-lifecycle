import React from 'react';

class Image extends React.Component {
  componentDidMount() {
    console.log('*** Image mount!');
  }

  componentDidUpdate() {
    console.log('*** Image update!');
  }

  componentWillUnmount() {
    console.log('*** Image unmount!');
  }

  render() {
    console.log('*** Image render');
    return (
      <img
        src="https://content.nike.com/content/dam/one-nike/en_us/season-2018-ho/running/1226-Innovation-React/P1.png.transform/full-screen/P1.png"
        height="200"
        alt="nike-react"
      />
    );
  }
}

export default Image;
