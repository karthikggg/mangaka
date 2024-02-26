import './App.css';
import { HOME } from './pages/home';
import MANGADATA from './mangadata';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { EXPLORE } from './pages/explorepage'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HOME  mangadata={MANGADATA} />}></Route>
        <Route path='/explore' element={<EXPLORE/>}></Route>
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
