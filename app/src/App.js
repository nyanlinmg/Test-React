import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import FruitsList from './features/fruits/FruitList';
import AddFruit from './features/fruits/AddFruit';

function App() {
  return (
    <div>
      <FruitsList></FruitsList>
      <AddFruit></AddFruit>
    </div>
  );
}

export default App;
