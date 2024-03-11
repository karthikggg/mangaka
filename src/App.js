import './App.css';
import { HOME } from './pages/home';
import MANGADATA from './mangadata';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { EXPLORE } from './pages/explorepage'
import { SINGLEMANGA } from './pages/singlemanga';
import { MANGAREAD } from './pages/mangaread'; 
import { useEffect, useState } from 'react';

function App() {
  const [currentmanga, setcurrentmanga] = useState(MANGADATA.filter((manga)=> manga.id==1))
 
  const Targetmanga =(id)=>{
    setcurrentmanga(MANGADATA.filter((manga)=> manga.id==id) )
 
  }





  return (
    
    <div  className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HOME  mangadata={MANGADATA} />}></Route>
        <Route path='/explore' element={<EXPLORE targetmanga={Targetmanga} mangadata={MANGADATA}/>}></Route>
        <Route path='/singlemanga' element={<SINGLEMANGA currentmanga={currentmanga} />}></Route>
        <Route path='/mangaread' element={<MANGAREAD />} ></Route>
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
