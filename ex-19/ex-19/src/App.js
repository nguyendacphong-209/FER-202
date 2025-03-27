import React from 'react';
import animals from './components/data';
import AnimalCard from './components/AnimalCard';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>Animal Information</h1>
      <div className="animal-list">
        {animals.map((animal) => (
          <AnimalCard key={animal.name} {...animal} />
        ))}
      </div>
    </div>
  );
}

export default App;