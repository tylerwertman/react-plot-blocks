import React from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import SubContents from './components/SubContents';
import Advertisement from './components/Advertisement';


function App() {
  return (
    <div className="app">
      <Header />
      <div className='flex'>
        <Nav />
        <Main>
        <div className='flex'>
              <SubContents />
              <SubContents />
              <SubContents />
        </div>
        <Advertisement />
        </Main>
      </div>
    </div>
  );
}

export default App;

