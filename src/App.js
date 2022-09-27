import './App.css';
import Cards from './components/Cards';
import {Routes, Route, Link} from 'react-router-dom'
import AddCard from './pages/AddCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Henry's E-WALLET</h1>
        <Routes>
           <Route path='/' element={<Cards/>} />
           <Route path='/addcard' element={<AddCard />} />
      </Routes>
          
      </header>
    </div>
  );
}

export default App;
