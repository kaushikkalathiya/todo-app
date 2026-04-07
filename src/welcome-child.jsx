import { NameContext } from './main';
import { useContext } from 'react';

function WelcomeChild (){
  const name = useContext(NameContext);
  console.log('name from WelcomeChild', name);
  return <h1>Welcome Child {name}</h1>;
}
export default WelcomeChild;
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