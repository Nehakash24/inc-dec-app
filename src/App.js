import React, { useState } from 'react';
import './App.css';


export default function App() {

  const state = useState();

  const[count, setcount] = useState(3);

  const IncNum = () => {
    setcount(count+1);
  };

  const DecNum =()=>{
    setcount(count-1);
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={IncNum}>Clickme</button>
      <button onClick={DecNum}>Click ME</button>
    </div>
  );
}
 //array distructring
  // const name = ['neha','kashyap','nikhil'];
  // const [val1,val2,val3] = name;

  // console.log(val1);