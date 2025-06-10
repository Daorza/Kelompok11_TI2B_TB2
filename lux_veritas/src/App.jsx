import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './routes';
import './App.css'

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
    
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/museums" element={<Museums />} />
    //     <Route path="/museums/:id" element={<MuseumDetail />} />
    //     <Route path="/museums/:id/collections" element={<Collections />} />
    //     <Route path="/collections" element={<Collections />} /> 
    //     <Route path="/tickets" element={<Tickets />} />
    //     <Route path="/souvenirs" element={<Souvenir />} />
    //     <Route path="/blog/:id" element={<Blog />} />
    //   </Routes>
    // </Router>
  );
}

export default App
