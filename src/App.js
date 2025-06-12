import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='content'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
