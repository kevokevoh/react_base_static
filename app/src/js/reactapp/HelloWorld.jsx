import React, { Component } from 'react';

export default class HelloWorld extends Component {
  render() {
    // Play with it...
    const name = 'Some text here!';

    return (
      <h2 className="hello-world">
        <span className="hello-world__i">Hey, {name}</span>
      </h2>
    );
  }
}
