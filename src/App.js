import React, {useState} from 'react';
import './App.css';
import Header from './Header';
import {BrowserRouter as Router, Routes, Route, Redirect} from 'react-router-dom'
import Menu from './Menu';
import HeaderBlock from './HeaderBlock';
  
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
    
       <div className="App">
          <Routes>
              
          </Routes>
          {/* { Header} */}
          <Header isMenuOpen = {isMenuOpen} setIsMenuOpen = {setIsMenuOpen}/>
          {/* { HeaderBlock  } */}
          {isMenuOpen && <Menu/>}
          <HeaderBlock/>
        </div>

    </Router>
   
  );
}

export default App;
