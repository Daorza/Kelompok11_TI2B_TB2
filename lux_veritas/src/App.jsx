import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Museums from './pages/Museums';
import MuseumDetail from './pages/MuseumDetail';
import Collections from './pages/Collections';
import Tickets from './pages/Tickets';
import Souvenir from './pages/Souvenirs';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/museums" element={<Museums />} />
        <Route path="/museums/:id" element={<MuseumDetail />} />
        <Route path="/museums/:id/collections" element={<Collections />} />
        <Route path="/collections" element={<Collections />} /> 
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/souvenirs" element={<Souvenir />} />
      </Routes>
    </Router>
  );
}

export default App
