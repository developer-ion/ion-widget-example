import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import softphone from "ion-widget";
import 'ion-widget/widget.min.css';


const HOST = import.meta.env.VITE_HOST
const KEY = import.meta.env.VITE_KEY
const USER = import.meta.env.VITE_USER

function App() {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    let phone = new softphone({
        host: HOST,
        apikey: KEY,
        userkey: USER,
        position:'right',
        width:'250'
    });
    phone.init();

    phone.on('CONNECTION_STATUS', function(e) {
      console.log("CONNECTION_STATUS:");
      console.log(e);
    });

    phone.on('REGISTRATION_STATUS', function(e) {
        console.log("REGISTRATION_STATUS:");
        console.log(e);
    });

    phone.on('CALL_LISTEN', function(e) {
        console.log("CALL_LISTEN:");
        console.log(e);
    });
    phone.on('CALL_STATUS', function(e) {
        console.log("CALL_STATUS:");
        console.log(e);
    });
    phone.on('DIAL_ESTABLISHED', function(e) {
        console.log("DIAL_ESTABLISHED:");
        console.log(e);
    });

    phone.on('UNREGISTERED', function(e) {
        console.log("UNREGISTERED:");
        console.log(e);
    });

    phone.on('AUTO-DIAL', function(e) {
        console.log("AUTO-DIAL:");
        console.log(e);
    });
  },[])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
