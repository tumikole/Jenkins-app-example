import './App.css';
import { useState } from 'react';

function App() {
  const [text,setText] = useState('My name is Tumi')

  const handleTest = () => {
    setText('My name is Tumisang Ramollo')
  }
  return (
    <div className="App">
      <button onClick={handleTest}>Test</button>
     <p>{text}</p>
    </div>
  );
}

export default App;
