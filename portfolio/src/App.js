import React from 'react';
import './App.css';
import NavBar from './components/layout/NavBar';
import HomePage from './components/pages/HomePage';

function App() {
  return (
    <div className="App">
     
      <header className="App-header">
      <NavBar />
      </header>
      <HomePage />
    </div>
  );
}

export default App;
