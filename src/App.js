import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

import logo from './logo.svg';

import './App.css';

// Components

import Homepage from './Pages/homepage/homepage';
import Projects from './Pages/projects/projects';


import Notfound from './Layouts/404/notfound';
import Underconstruction from './Layouts/underconstruction/underconstruction';
import Header from './Layouts/Header/Header';

function App() {

  useEffect(
    () => {
      document.title = "Portfolio"
    }, []
  )

  return (


  <Router>
    <Header />
    <Routes>
      <Route exact path="/" element={<Homepage />}/>

      <Route exact path="/code" element={<Underconstruction />}/>
      <Route exact path="/projects" element={<Projects />}/>
      <Route exact path="/secretepath" element={<Underconstruction />}/>
      <Route exact path="/contactme" element={<Underconstruction />}/>

      <Route path="*" element={<Notfound />}/>
    </Routes>
  </Router>


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
