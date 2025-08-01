import styled from 'styled-components';
import { DataTable } from 'primereact/datatable';

export const StyledDataTable = styled(DataTable)`
  .p-datatable {
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .p-datatable-header {
    background: #f8f9fa;
    border-bottom: 1px solid #dee2e6;
    padding: 1rem;
  }

  .p-datatable-thead > tr > th {
    background: #f8f9fa;
    border-bottom: 2px solid #dee2e6;
    font-weight: 600;
    color: #495057;
  }

  .p-datatable-tbody > tr:hover {
    background: #f8f9fa;
  }

  .p-datatable-tbody > tr > td {
    padding: 0.75rem;
    border-bottom: 1px solid #dee2e6;
  }

  /* Garantir que a coluna de ações seja sempre visível */
  .p-datatable .p-column-header:last-child,
  .p-datatable .p-datatable-tbody > tr > td:last-child {
    min-width: 120px !important;
    width: 120px !important;
  }

  /* Estilo para o botão de ação */
  .p-datatable .p-datatable-tbody > tr > td:last-child .p-button {
    min-width: 100px;
    height: 32px;
    font-size: 0.75rem;
  }
`;

export const NomeTemplate = styled.div`
  .nome {
    font-weight: 600;
    margin-bottom: 0.25rem;
  }
  
  .documento {
    font-size: 0.875rem;
    color: #6c757d;
  }
`;

export const ContatoTemplate = styled.div`
  .contato-item {
    margin-bottom: 0.25rem;
    
    &:last-child {
      margin-bottom: 0;
    }
    
    i {
      margin-right: 0.5rem;
    }
  }
`;

export const EnderecoTemplate = styled.div`
  i {
    margin-right: 0.5rem;
  }
`;

export const ActionTemplate = styled.div`
  display: flex;
  justify-content: center;
`;

export const Badge = styled.span`
  &.success {
    background: #d4edda;
    color: #155724;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
  }
  
  &.info {
    background: #d1ecf1;
    color: #0c5460;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
  }
`; 