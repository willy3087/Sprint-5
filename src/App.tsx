import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
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
import ProducerSignup from './pages/ProducerSignup';
import ProducerData from './pages/ProducerData';

const isLoggedIn = () => {
  return localStorage.getItem('isLoggedIn') === 'true';
};

const RequireAuth: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const location = useLocation();

  if (!isLoggedIn()) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

const AppRoutes: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isLoggedIn()) {
      timer = setTimeout(() => {
        localStorage.removeItem('isLoggedIn');
        navigate('/login', { replace: true });
      }, 3000000); // 50 minutes in milliseconds
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
        <Route
          path="/features"
          element={
            <RequireAuth>
              <Features />
            </RequireAuth>
          }
        />
        <Route
          path="/pricing"
          element={
            <RequireAuth>
              <Pricing />
            </RequireAuth>
          }
        />
        <Route
          path="/mercado"
          element={
            <RequireAuth>
              <Mercado />
            </RequireAuth>
          }
        />
        <Route
          path="/analysis"
          element={
            <RequireAuth>
              <CoffeeAnalysis />
            </RequireAuth>
          }
        />
        <Route
          path="/weather"
          element={
            <RequireAuth>
              <WeatherMonitoring />
            </RequireAuth>
          }
        />
        <Route
          path="/producer-signup"
          element={
            <RequireAuth>
              <ProducerSignup />
            </RequireAuth>
          }
        />
        <Route
          path="/producer-data"
          element={
            <RequireAuth>
              <ProducerData />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Layout>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider initialTheme="coffee">
      <Router>
        <AppRoutes />
      </Router>
    </ThemeProvider>
  );
};

export default App;