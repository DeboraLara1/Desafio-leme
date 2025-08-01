import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Header, Container } from '../../components/layout';
import { EntityDataTable, EntityModal } from '../../components/common';
import { useSearchContext, useRecentSearchesContext, useEntityModal } from '../../contexts';
import { Entity, SearchData } from '../../types';
import {
  ResultsContainer,
  ResultsHeader,
  BackButton,
  ResultsInfo,
  NoResults,
  FiltersSection,
  FilterCard,
  FilterTitle,
  FilterOptions,
  FilterOption,
  ResultsSection,
} from './styles';

const parseSearchParams = (params: URLSearchParams): SearchData => {
  const searchData: SearchData = {};
  params.forEach((value, key) => {
    searchData[key] = value;
  });
  return searchData;
};

const getSearchDescription = (params: SearchData): string => {
  const entries = Object.entries(params);
  if (entries.length === 0) return 'Busca geral';

  const [type, value] = entries[0];
  const typeLabels: Record<string, string> = {
    nome: 'Nome',
    documento: 'CPF/CNPJ',
    email: 'Email',
    telefone: 'Telefone',
    endereco: 'Endereço',
  };

  return `${typeLabels[type] || type}: ${value}`;
};

const getResultsLabel = (count: number): string => {
  return `${count} resultado${count !== 1 ? 's' : ''} encontrado${count !== 1 ? 's' : ''}`;
};

const SearchResults: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { entities, loading, searchEntities } = useSearchContext();
  const { addRecentSearch } = useRecentSearchesContext();
  const { selectedEntity, modalVisible, selectEntity, closeModal } = useEntityModal();

  const [searchParams, setSearchParams] = useState<SearchData>({});
  const [filters, setFilters] = useState({
    showPessoas: true,
    showEmpresas: true,
  });
  const [filteredEntities, setFilteredEntities] = useState<Entity[]>([]);

  useEffect(() => {
    const updateSearchParamsFromURL = () => {
      const params = new URLSearchParams(location.search);
      const parsed = parseSearchParams(params);
      setSearchParams(parsed);

      if (Object.keys(parsed).length > 0) {
        searchEntities(parsed);
      }
    };

    updateSearchParamsFromURL();
  }, [location.search]);

  useEffect(() => {
    let filtered = entities;

    if (!filters.showPessoas) {
      filtered = filtered.filter(entity => entity.tipo !== 'pessoa');
    }

    if (!filters.showEmpresas) {
      filtered = filtered.filter(entity => entity.tipo !== 'empresa');
    }

    setFilteredEntities(filtered);
  }, [entities, filters]);

  const handleRowSelect = async (entity: Entity) => {
    selectEntity(entity);

    const [searchType] = Object.keys(searchParams) as (keyof SearchData)[];
    const searchValue = searchParams[searchType];

    if (searchType && searchValue) {
      await addRecentSearch({
        tipo: searchType as any,
        valor: searchValue,
        data: new Date().toISOString(),
        resultados: entities.length,
      });
    }
  };

  const handleBackToSearch = () => {
    navigate('/');
  };

  const handleFilterChange = (filterType: 'showPessoas' | 'showEmpresas') => {
    setFilters(prev => ({
      ...prev,
      [filterType]: !prev[filterType],
    }));
  };

  const pessoasCount = filteredEntities.filter(e => e.tipo === 'pessoa').length;
  const empresasCount = filteredEntities.filter(e => e.tipo === 'empresa').length;

  if (loading) {
    return (
      <Container.Page>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '1.2rem',
          color: '#6c757d'
        }}>
          Buscando resultados...
        </div>
      </Container.Page>
    );
  }

  return (
    <Container.Page>
      <Header
        totalEntities={filteredEntities.length}
        pessoasCount={pessoasCount}
        empresasCount={empresasCount}
      />

      <Container.Content>
        <ResultsContainer>
          <ResultsHeader>
            <BackButton>
              <Button
                icon="pi pi-arrow-left"
                severity="secondary"
                onClick={handleBackToSearch}
                style={{ color: '#6c757d' }}
                aria-label="Voltar para busca"
              />
            </BackButton>

            <ResultsInfo>
              <h2>Consulta de Dados Básicos</h2>
              <p>{getSearchDescription(searchParams)}</p>
              <span className="results-count">{getResultsLabel(filteredEntities.length)}</span>
            </ResultsInfo>
          </ResultsHeader>

          <FiltersSection>
            <FilterCard>
              <FilterTitle>
                <i className="pi pi-filter" />
                Filtros
              </FilterTitle>
              <FilterOptions>
                <FilterOption>
                  <Checkbox
                    inputId="showPessoas"
                    checked={filters.showPessoas}
                    onChange={() => handleFilterChange('showPessoas')}
                  />
                  <label htmlFor="showPessoas">Pessoas Físicas</label>
                  <span className="count">({pessoasCount})</span>
                </FilterOption>

                <FilterOption>
                  <Checkbox
                    inputId="showEmpresas"
                    checked={filters.showEmpresas}
                    onChange={() => handleFilterChange('showEmpresas')}
                  />
                  <label htmlFor="showEmpresas">Empresas</label>
                  <span className="count">({empresasCount})</span>
                </FilterOption>
              </FilterOptions>
            </FilterCard>
          </FiltersSection>

          <ResultsSection>
            {filteredEntities.length > 0 ? (
              <Container.Section title="Entidades Encontradas" icon="pi pi-list">
                <EntityDataTable
                  entities={filteredEntities}
                  loading={loading}
                  onRowSelect={handleRowSelect}
                  selectedEntity={selectedEntity}
                />
              </Container.Section>
            ) : (
              <NoResults>
                <i className="pi pi-search" style={{ fontSize: '4rem', color: '#6c757d' }} />
                <h3>Nenhum resultado encontrado</h3>
                <p>Tente ajustar os critérios de busca ou os filtros aplicados</p>
                <Button
                  label="Nova Busca"
                  icon="pi pi-refresh"
                  onClick={handleBackToSearch}
                  style={{
                    backgroundColor: '#007bff',
                    borderColor: '#007bff',
                  }}
                />
              </NoResults>
            )}
          </ResultsSection>
        </ResultsContainer>
      </Container.Content>

      <EntityModal
        entity={selectedEntity}
        visible={modalVisible}
        onHide={closeModal}
      />
    </Container.Page>
  );
};

export default SearchResults;
