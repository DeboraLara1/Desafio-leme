import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Entity, SearchData } from '../types';
import { entitiesApi } from '../services';

interface SearchContextState {
  entities: Entity[];
  loading: boolean;
}

interface SearchContextType extends SearchContextState {
  searchEntities: (searchData: SearchData) => Promise<void>;
  clearEntities: () => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const useSearchContext = (): SearchContextType => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearchContext deve ser usado dentro de um SearchProvider');
  }
  return context;
};

interface SearchProviderProps {
  children: ReactNode;
}

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [entities, setEntities] = useState<Entity[]>([]);
  const [loading, setLoading] = useState(false);

  const searchEntities = async (searchData: SearchData): Promise<void> => {
    setLoading(true);
    
    try {
      const filteredEntities = await entitiesApi.search(searchData);
      setEntities(filteredEntities);
    } catch (error) {
      console.error('Erro ao buscar entidades:', error);
      setEntities([]);
    } finally {
      setLoading(false);
    }
  };

  const clearEntities = (): void => {
    setEntities([]);
  };

  const contextValue: SearchContextType = {
    entities,
    loading,
    searchEntities,
    clearEntities,
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
}; 