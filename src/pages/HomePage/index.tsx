import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearchContext, useRecentSearchesContext, useEntityModal } from '../../contexts';
import { Header, Container } from '../../components/layout';
import { 
  SearchForm, 
  RecentSearches, 
  EntityModal, 
} from '../../components/common';
import { SearchData } from '../../types';
import { DescriptionContainer, DescriptionText } from './styles';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { entities, loading, searchEntities } = useSearchContext();
  const { recentSearches, addRecentSearch } = useRecentSearchesContext();
  const { selectedEntity, modalVisible, closeModal } = useEntityModal();

  const pessoasCount = entities.filter(e => e.tipo === 'pessoa').length;
  const empresasCount = entities.filter(e => e.tipo === 'empresa').length;
  const totalEntities = entities.length;

  const handleNavigateToResults = (searchData: SearchData): void => {
    const params = new URLSearchParams();
    Object.entries(searchData).forEach(([key, value]) => {
      params.append(key, value);
    });
    navigate(`/results?${params.toString()}`);
  };

  const handleSearch = async (searchData: SearchData): Promise<void> => {
    if (Object.keys(searchData).length === 0) {
      return;
    }

    await searchEntities(searchData);
    
    const [type, value] = Object.entries(searchData)[0];
    await addRecentSearch({
      tipo: type as any,
      valor: value,
      data: new Date().toISOString(),
      resultados: entities.length,
    });
  };

  const handleViewRecentDetails = (search: any): void => {
    const searchData = { [search.tipo]: search.valor };
    handleNavigateToResults(searchData);
  };

  return (
    <Container.Page>
      <Header
        totalEntities={totalEntities}
        pessoasCount={pessoasCount}
        empresasCount={empresasCount}
      />

      <Container.Content>
        <Container>
          <Container.Section title="Consulta de Dados Básicos">
            <DescriptionContainer>
              <DescriptionText>
                Encontre as informações essenciais de seus investigados
              </DescriptionText>
            </DescriptionContainer>
            <SearchForm 
              onSearch={handleSearch} 
              loading={loading}
              onNavigateToResults={handleNavigateToResults}
            />
          </Container.Section>

          <Container.Section title="Resultados Recentes">
            <RecentSearches
              searches={recentSearches}
              onViewDetails={handleViewRecentDetails}
              loading={loading}
            />
          </Container.Section>
        </Container>
      </Container.Content>

      <EntityModal
        entity={selectedEntity}
        visible={modalVisible}
        onHide={closeModal}
      />
    </Container.Page>
  );
};

export default HomePage; 