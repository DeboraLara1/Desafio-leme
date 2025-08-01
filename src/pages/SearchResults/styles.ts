import styled from 'styled-components';

export const ResultsContainer = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const ResultsHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #dee2e6;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const BackButton = styled.div`
  flex-shrink: 0;
`;

export const ResultsInfo = styled.div`
  flex: 1;
  
  h2 {
    font-size: 1.75rem;
    font-weight: 700;
    color: #212529;
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: 1rem;
    color: #6c757d;
    margin-bottom: 0.5rem;
  }
  
  .results-count {
    display: inline-block;
    background: #e3f2fd;
    color: #1976d2;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 600;
  }
`;

export const FiltersSection = styled.div`
  margin-bottom: 2rem;
`;

export const FilterCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  border-left: 4px solid #007bff;
`;

export const FilterTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #495057;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  i {
    color: #007bff;
  }
`;

export const FilterOptions = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const FilterOption = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  label {
    font-size: 0.875rem;
    font-weight: 500;
    color: #495057;
    cursor: pointer;
  }
  
  .count {
    font-size: 0.75rem;
    color: #6c757d;
    background: #f8f9fa;
    padding: 0.125rem 0.5rem;
    border-radius: 12px;
  }
`;

export const ResultsSection = styled.div`
  margin-top: 1rem;
`;

export const NoResults = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #495057;
    margin: 1rem 0 0.5rem 0;
  }
  
  p {
    font-size: 1rem;
    color: #6c757d;
    margin-bottom: 2rem;
  }
`; 