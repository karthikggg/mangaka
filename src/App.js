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
  const [chapter , setchapter] = useState('1') 
  console.log(chapter + 'chap');


 
  const Targetmanga =(id)=>{
    setcurrentmanga(MANGADATA.filter((manga)=> manga.id==id) )
 }
 const Targetchapter = (id) =>{
  setchapter(id)
 }






  return (
    
    <div  className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HOME  mangadata={MANGADATA} />}></Route>
        <Route path='/explore' element={<EXPLORE targetmanga={Targetmanga} mangadata={MANGADATA}/>}></Route>
        <Route path='/singlemanga' element={<SINGLEMANGA currentmanga={currentmanga} Targetchapter={Targetchapter} />}></Route>
        <Route path='/mangaread' element={<MANGAREAD currentchapter= {chapter} />} ></Route>  
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
