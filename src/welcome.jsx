import WelcomeChild from "./welcome-child";
import { NameContext } from './main';
import { useContext } from 'react';

function Welcome (){
  const name = useContext(NameContext);
  console.log('name from Welcome', name);
  return <WelcomeChild />;
}
export default Welcome;
/*
function Welcome(props) {
  const name = props.nameTest || 'New HTML Relic';
  return (
    <div>
      <h1>Hello, welcome to {name}!</h1>
      <h2>Enjoy your journey with {name}</h2>
      <h3>Happy coding! {name}</h3>
      <button onClick={() => alert('Button clicked!') }>Click me!</button>
    </div>
  );
}

export default Welcome;
*/