import styled from 'styled-components';

export const RecentSearchesContainer = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #495057;
    margin-bottom: 1rem;
  }
`;

export const TableContainer = styled.div`
  .p-datatable {
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const EmptyMessage = styled.div`
  text-align: center;
  padding: 3rem 2rem;
  color: #6c757d;
  
  i {
    font-size: 2rem;
    color: #6c757d;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  
  small {
    font-size: 0.875rem;
    color: #adb5bd;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  font-size: 1rem;
  color: #6c757d;
`;

export const ActionButton = styled.button`
  min-width: 150px;
  background-color: #6c757d;
  border-color: #6c757d;
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
  
  &.warning {
    background: #fff3cd;
    color: #856404;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
  }
`; 