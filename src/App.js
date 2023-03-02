
import './App.css';
import { useState } from 'react';

function App() {
  // useState returns a pair inside of an array
  // the first item in the array is the state variable
  // second item is a function that we use to change the state
  const [
    status,
    setStatus
  ] = useState('Not Delivered')

  return (
    <div className='app'>
      <h1>The package is: {status}</h1>
      <button onClick={() => setStatus("Delivered")}>Deliver</button>
      <button onClick={() => setStatus('cancelled')}>cancel</button>
    </div>
  );
}

export default App;
