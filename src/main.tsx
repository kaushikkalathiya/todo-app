import { StrictMode, createContext } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'

import Welcome from './welcome';
// import WelcomeClass from './welcome-class';
// import Counter from './counter';
// import Users from './users';
import Todos from './todos';

// const warname = 'New war';
export const NameContext = createContext(null);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <NameContext value={'New Name'}> */}
      {/* <Welcome /> */}
      {/* <Counter /> */}
      {/* <Users /> */}
    {/* </NameContext> */}
    {/* <WelcomeClass nameTest={warname} />  */}
    <Todos />
  </StrictMode>
); 
