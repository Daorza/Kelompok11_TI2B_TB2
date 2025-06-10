import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Museums from '../pages/Museums';
import MuseumDetail from '../pages/MuseumDetail';
import Collections from '../pages/Collections';
import Blog from '../pages/Blog';
import Tickets from '../pages/Tickets';
import Souvenirs from '../pages/Souvenirs';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/museums" element={<Museums />} />
            <Route path="/museums/:museumId" element={<MuseumDetail />} />
            <Route path="/museums/:id/collections" element={<Collections />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/souvenirs" element={<Souvenirs />} />
        </Routes>
    )
}