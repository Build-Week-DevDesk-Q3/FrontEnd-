import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import SignIn from './components/SignIn.js';
import SignUp from './components/SignUp.js';
import * as yup from 'yup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <Route exact path="/" component={SignIn} />
        <Route path ="/signup" component={SignUp} />
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
