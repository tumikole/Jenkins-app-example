import './App.css';
import { useState } from 'react';

function App() {
  const [text] = useState('Hi my name is Tumi')
  return (
    <div className="App">
     <p>{text}</p>
    </div>
  );
}

export default App;
