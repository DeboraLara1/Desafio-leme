import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';
import { SearchProvider, RecentSearchesProvider } from './contexts';
import AppRoutes from './routes/AppRoutes';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './App.css';

const App: React.FC = () => {
  return (
    <PrimeReactProvider>
      <SearchProvider>
        <RecentSearchesProvider>
          <Router>
            <AppRoutes />
          </Router>
        </RecentSearchesProvider>
      </SearchProvider>
    </PrimeReactProvider>
  );
};

export default App; 