import { Component } from "react";

class WelcomeClass extends Component {
  render() {
    const name = "New HTML";
    return (
      <div>
        <h1>Hello, welcome to {name}!</h1>
        <h2>Enjoy your journey with {name}!</h2>
        <h3>Happy coding {name}!</h3>
        <button onClick={() => alert('Button clicked!') }>Click me!</button>
      </div>
    );
  }
}

export default WelcomeClass;
