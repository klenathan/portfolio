import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import logo from './logo.svg';

import './App.css';

// Components

import Homepage from './Pages/homepage';
import Notfound from './Pages/404/notfound';

function App() {

  return (


  <Router>
    <Routes>
      <Route exact path="/" element={<Homepage />}/>
      <Route exact path="/home" element={<Homepage />}/>
      {/* <Route exact path="/hi/:id" element={<Homepage />}/> */}
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
