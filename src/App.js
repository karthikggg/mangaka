import './App.css';
import { HOME } from './components/home';
import MANGADATA from './mangadata';

function App() {
  return (
    <div className="App">
      <HOME mangadata={MANGADATA} />
      
    </div>
  );
}

export default App;
