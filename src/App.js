import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import dragElement from './utils/dragEnabler';

const App = () => {

  useEffect(() => {
    dragElement(document.getElementById("mydivheader"));
  }, [])
  
  return (
    <div className="App">
        <div className="terminal" id="mydivheader"></div>
    </div>
  );
}

export default App;
