import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from './routesConfig';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {routes.map(({ path, element: Element }) => (
        <Route key={path} path={path} element={<Element />} />
      ))}
    </Routes>
  );
};

export default AppRoutes; 