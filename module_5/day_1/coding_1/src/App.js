import React from 'react';
import './App.css';
import List from './Components/List';
import userData from './data.json';

function App() {

  return (
    <div className="App">
      <h1>App</h1>
      <List data={userData} />
    </div>
  );
}

export default App;
