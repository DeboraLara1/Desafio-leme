import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { RecentSearch } from '../types';
import { recentSearchesApi } from '../services';

interface RecentSearchesContextState {
  recentSearches: RecentSearch[];
}

interface RecentSearchesContextType extends RecentSearchesContextState {
  addRecentSearch: (search: Omit<RecentSearch, 'id'>) => Promise<void>;
  clearRecentSearches: () => Promise<void>;
}

const RecentSearchesContext = createContext<RecentSearchesContextType | undefined>(undefined);

export const useRecentSearchesContext = (): RecentSearchesContextType => {
  const context = useContext(RecentSearchesContext);
  if (!context) {
    throw new Error('useRecentSearchesContext deve ser usado dentro de um RecentSearchesProvider');
  }
  return context;
};

interface RecentSearchesProviderProps {
  children: ReactNode;
}

export const RecentSearchesProvider: React.FC<RecentSearchesProviderProps> = ({ children }) => {
  const [recentSearches, setRecentSearches] = useState<RecentSearch[]>([]);

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        const apiRecentSearches = await recentSearchesApi.getAll();
        
        if (apiRecentSearches && apiRecentSearches.length > 0) {
          setRecentSearches(apiRecentSearches);
        }
      } catch (error) {
        console.error('Erro ao carregar dados iniciais:', error);
      }
    };

    loadInitialData();
  }, []);

  const addRecentSearch = async (search: Omit<RecentSearch, 'id'>): Promise<void> => {
    try {
      const newSearch: Omit<RecentSearch, 'id'> = {
        ...search,
        data: new Date().toISOString(),
      };

      const savedSearch = await recentSearchesApi.add(newSearch);
      setRecentSearches(prev => [savedSearch, ...prev.slice(0, 9)]);
    } catch (error) {
      console.error('Erro ao adicionar pesquisa recente:', error);
      const fallbackSearch: RecentSearch = {
        ...search,
        id: Date.now() + Math.floor(Math.random() * 10000),
        data: new Date().toISOString(),
      };
      setRecentSearches(prev => [fallbackSearch, ...prev.slice(0, 9)]);
    }
  };

  const clearRecentSearches = async (): Promise<void> => {
    try {
      await recentSearchesApi.clear();
      setRecentSearches([]);
    } catch (error) {
      console.error('Erro ao limpar pesquisas recentes:', error);
      setRecentSearches([]);
    }
  };

  const contextValue: RecentSearchesContextType = {
    recentSearches,
    addRecentSearch,
    clearRecentSearches,
  };

  return (
    <RecentSearchesContext.Provider value={contextValue}>
      {children}
    </RecentSearchesContext.Provider>
  );
}; 