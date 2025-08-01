import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

import { RecentSearchesProps, RecentSearch } from '../../../types';
import {
  RecentSearchesContainer,
  TableContainer,
  EmptyMessage,
} from './styles';

const RecentSearches: React.FC<RecentSearchesProps> = ({
  searches,
  onViewDetails,
  loading,
}) => {
  const actionTemplate = (rowData: RecentSearch) => (
    <Button
      label="Detalhes"
      icon="pi pi-eye"
      size="small"
      severity="secondary"
      onClick={() => onViewDetails(rowData)}
      style={{
        minWidth: '150px',
        backgroundColor: '#6c757d',
        borderColor: '#6c757d',
      }}
    />
  );

  const dateTemplate = (rowData: RecentSearch) => {
    const date = new Date(rowData.data);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const typeTemplate = (rowData: RecentSearch) => {
    const typeLabels: Record<string, string> = {
      nome: 'Nome',
      documento: 'CPF/CNPJ',
      email: 'Email',
      telefone: 'Telefone',
      endereco: 'Endereço',
    };
    return typeLabels[rowData.tipo] || rowData.tipo;
  };

  const resultsTemplate = (rowData: RecentSearch) => (
    <span className={`badge ${rowData.resultados > 0 ? 'success' : 'warning'}`}>
      {rowData.resultados} resultado{rowData.resultados !== 1 ? 's' : ''}
    </span>
  );

  if (loading) {
    return (
      <RecentSearchesContainer>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100px',
          fontSize: '1rem',
          color: '#6c757d'
        }}>
          Carregando pesquisas recentes...
        </div>
      </RecentSearchesContainer>
    );
  }

  return (
    <RecentSearchesContainer>
      <h3>Resultados Recentes</h3>
      <TableContainer>
        {searches.length > 0 ? (
          <DataTable
            value={searches}
            paginator
            rows={5}
            rowsPerPageOptions={[5, 10]}
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} pesquisas"
            responsiveLayout="scroll"
            emptyMessage="Nenhuma pesquisa recente encontrada"
          >
            <Column
              field="tipo"
              header="Tipo"
              body={typeTemplate}
              style={{ width: '120px' }}
            />
            <Column
              field="valor"
              header="Valor Pesquisado"
              style={{ minWidth: '200px' }}
            />
            <Column
              field="data"
              header="Data/Hora"
              body={dateTemplate}
              style={{ width: '150px' }}
            />
            <Column
              field="resultados"
              header="Resultados"
              body={resultsTemplate}
              style={{ width: '150px' }}
            />
            <Column
              header="Ações"
              body={actionTemplate}
              style={{ width: '140px' }}
            />
          </DataTable>
        ) : (
          <EmptyMessage>
            <i className="pi pi-search" style={{ fontSize: '2rem', color: '#6c757d' }} />
            <p>Nenhuma pesquisa realizada ainda</p>
            <small>As pesquisas realizadas aparecerão aqui</small>
          </EmptyMessage>
        )}
      </TableContainer>
    </RecentSearchesContainer>
  );
};

export default RecentSearches; 