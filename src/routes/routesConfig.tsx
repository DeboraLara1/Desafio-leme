import React from 'react';
import { HomePage, SearchResults } from '../pages';

export interface RouteConfig {
  path: string;
  element: React.ComponentType;
  title?: string;
  requiresAuth?: boolean;
}

export const routes: RouteConfig[] = [
  {
    path: '/',
    element: HomePage,
    title: 'Dashboard de Busca'
  },
  {
    path: '/results',
    element: SearchResults,
    title: 'Resultados da Busca'
  }
];

export const getRouteByPath = (path: string): RouteConfig | undefined => {
  return routes.find(route => route.path === path);
};

export const getRouteTitle = (path: string): string => {
  const route = getRouteByPath(path);
  return route?.title || 'Dashboard de Busca';
}; 