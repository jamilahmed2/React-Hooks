
import './App.css';
import { useState } from 'react';

function App() {
  // useState returns a pair inside of an array
  // the first item in the array is the state variable
  // second item is a function that we use to change the state
  // const [
  //   status,
  //   setStatus
  // ] = useState('Not Delivered')
  const [
    checked,
    setChecked
  ] = useState(false)

  return (
    <div className='app'>
      <input type='checkbox' value={checked} onChange={() => setChecked(!checked)}/>
      <p>{checked ? 'Checked' : 'Not Checked'}</p>
    </div>
  );
}

export default App;
