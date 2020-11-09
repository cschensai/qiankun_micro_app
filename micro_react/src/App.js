import React from 'react';
import { BrowserRouter, Route } from  'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  const Home = () =>  (
    <div className="App">
        <header className="App-header">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
  )
  return (
    <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? '/react' : ''}>
      <Route path='/' exact component={Home}/>
    </BrowserRouter>
  );
}

export default App;
