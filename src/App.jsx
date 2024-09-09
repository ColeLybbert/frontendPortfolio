import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import './App.css'
import IntroButton from './components.jsx/introButton';
import Name from "./components.jsx/name";
import Title from "./components.jsx/title";

function App() {

  const [show, setShow] = useState(true);


  return (
    <>
      <AnimatePresence>
        {show ? 
          <>
        <div className="introCard">
          <Name />
          <Title />
        </div>
        <div onClick={() => {
          setShow(!show);
        }} >
          <IntroButton />
        </div >
        </>
        : null}
      </AnimatePresence>
    </>
  )
}

export default App
