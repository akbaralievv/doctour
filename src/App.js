import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import MainPage from './pages/MainPage';
import DoctorsPage from './pages/DoctorsPage';
import ClinicsPage from './pages/ClinicsPage';
import LoginPage from './pages/LoginPage';
import ServicesPage from './pages/ServicesPage';
import AboutDoctor from './components/AboutDoctor';
import ErrorPage from './pages/ErrorPage';
import FavoritesPage from './pages/FavoritesPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/doctors/:id" element={<AboutDoctor />} />
          <Route path="/clinics" element={<ClinicsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
