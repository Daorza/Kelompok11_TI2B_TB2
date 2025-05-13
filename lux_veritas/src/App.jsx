import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Museums from './pages/Museums';
import MuseumDetail from './pages/MuseumDetail';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/museums" element={<Museums />} />
        <Route path="/museums/:id" element={<MuseumDetail />} />
      </Routes>
    </Router>
  );
}

export default App
