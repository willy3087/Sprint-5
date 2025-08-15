import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Mercado from './pages/Mercado';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import CoffeeAnalysis from './pages/CoffeeAnalysis';
import WeatherMonitoring from './pages/WeatherMonitoring';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/mercado" element={<Mercado />} />
          <Route path="/analysis" element={<CoffeeAnalysis />} />
          <Route path="/weather" element={<WeatherMonitoring />} />
          <Route path="/login" element={<Login />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;