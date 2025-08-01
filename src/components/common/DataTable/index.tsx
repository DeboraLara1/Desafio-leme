import React from 'react';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { 
  StyledDataTable, 
  NomeTemplate, 
  ContatoTemplate, 
  EnderecoTemplate, 
  ActionTemplate, 
  Badge 
} from './styles.ts';
import { Entity, EntityDataTableProps } from '../../../types';

const EntityDataTable: React.FC<EntityDataTableProps> = ({
  entities,
  loading,
  onRowSelect,
  selectedEntity,
}) => {
  const tipoTemplate = (rowData: Entity) => (
    <Badge className={rowData.tipo === 'pessoa' ? 'success' : 'info'}>
      {rowData.tipo === 'pessoa' ? 'Pessoa' : 'Empresa'}
    </Badge>
  );

  const nomeTemplate = (rowData: Entity) => (
    <NomeTemplate>
      <div className="nome">
        {rowData.nome}
      </div>
      <div className="documento">
        {rowData.tipo === 'pessoa' ? rowData.cpf : rowData.cnpj}
      </div>
    </NomeTemplate>
  );

  const contatoTemplate = (rowData: Entity) => (
    <ContatoTemplate>
      {rowData.emails.length > 0 && (
        <div className="contato-item">
          <i className="pi pi-envelope" />
          {rowData.emails[0]}
        </div>
      )}
      {rowData.telefones.length > 0 && (
        <div className="contato-item">
          <i className="pi pi-phone" />
          {rowData.telefones[0]}
        </div>
      )}
    </ContatoTemplate>
  );

  const enderecoTemplate = (rowData: Entity) => (
    <EnderecoTemplate>
      <i className="pi pi-map-marker" />
      {rowData.enderecos[0]}
    </EnderecoTemplate>
  );

  const actionTemplate = (rowData: Entity) => (
    <ActionTemplate>
      <Button
        label="Detalhes"
        size="small"
        severity="danger"
        onClick={() => onRowSelect(rowData)}
        style={{
        minWidth: '150px',
        backgroundColor: '#6c757d',
        borderColor: '#6c757d',
      }}
      />
    </ActionTemplate>
  );

  return (
    <StyledDataTable
      value={entities}
      loading={loading}
      selection={selectedEntity}
      onSelectionChange={(e) => onRowSelect(e.value as Entity)}
      dataKey="id"
      paginator
      rows={10}
      rowsPerPageOptions={[5, 10, 20, 50]}
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
      currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} entidades"
      emptyMessage="Nenhuma entidade encontrada"
    >
      <Column
        field="tipo"
        header="Tipo"
        body={tipoTemplate}
        style={{ width: "100px" }}

      />
      <Column
        field="nome"
        header="Nome / Documento"
        body={nomeTemplate}
        style={{ minWidth: "200px" }}

      />
      <Column
        field="emails"
        header="Contato"
        body={contatoTemplate}
        style={{ minWidth: "200px" }}
      />
      <Column
        field="enderecos"
        header="Endereço"
        body={enderecoTemplate}
        style={{ minWidth: "250px" }}
      />
      <Column
        header="Ações"
        body={actionTemplate}
        style={{ width: "120px", textAlign: "center" }}
        exportable={false}
      />
    </StyledDataTable>
  );
};

export default EntityDataTable; 