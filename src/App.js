import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Card from './Card';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { Contact } from './Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/card" element={<Card />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
            </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
