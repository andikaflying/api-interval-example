import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchQuizQuestions, Question } from './API';
import Counter from './components/Counter';
import C1 from './components/C1';
import C2 from './components/C2';

const App = () => {
  const [questions, setQuestions] = useState<Question[]>([]);

  return (
    <div className="App">
      <C1 />
      <C2 />
    </div>
  );
}

export default App;
