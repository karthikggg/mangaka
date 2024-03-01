import './App.css';
import { HOME } from './pages/home';
import MANGADATA from './mangadata';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { EXPLORE } from './pages/explorepage'
import { SINGLEMANGA } from './pages/singlemanga';
import { useState } from 'react';

function App() {
  const [currentmanga, setcurrentmanga] = useState([])

  const targetmanga =(id)=>{
    console.log('manga cliced' + id);
    setcurrentmanga(MANGADATA.filter((manga)=> manga.id==id) )
    
  
  }
  console.log(currentmanga);




  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HOME  mangadata={MANGADATA} />}></Route>
        <Route path='/explore' element={<EXPLORE targetmanga={targetmanga} mangadata={MANGADATA}/>}></Route>
        <Route path='/singlemanga' element={<SINGLEMANGA currentmanga={currentmanga}/>}></Route>
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
