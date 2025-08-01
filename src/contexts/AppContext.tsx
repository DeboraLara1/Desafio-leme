import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { Entity, RecentSearch, SearchData } from '../types';
import { entitiesApi, recentSearchesApi } from '../services';

interface AppContextState {
  entities: Entity[];
  recentSearches: RecentSearch[];
  loading: boolean;
  selectedEntity: Entity | null;
  modalVisible: boolean;
}

interface AppContextType extends AppContextState {
  searchEntities: (searchData: SearchData) => Promise<void>;
  addRecentSearch: (search: Omit<RecentSearch, 'id'>) => Promise<void>;
  selectEntity: (entity: Entity) => void;
  closeModal: () => void;
  clearEntities: () => void;
  clearRecentSearches: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext deve ser usado dentro de um AppProvider');
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [entities, setEntities] = useState<Entity[]>([]);
  const [recentSearches, setRecentSearches] = useState<RecentSearch[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedEntity, setSelectedEntity] = useState<Entity | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

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

  const selectEntity = (entity: Entity): void => {
    setSelectedEntity(entity);
    setModalVisible(true);
  };

  const closeModal = (): void => {
    setModalVisible(false);
    setSelectedEntity(null);
  };

  const clearEntities = (): void => {
    setEntities([]);
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


  const contextValue: AppContextType = {
    entities,
    recentSearches,
    loading,
    selectedEntity,
    modalVisible,
    searchEntities,
    addRecentSearch,
    selectEntity,
    closeModal,
    clearEntities,
    clearRecentSearches,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}; 