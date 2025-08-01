import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const PageContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background: #f8f9fa;
`;

export const ContentArea = styled.main`
  padding-top: 1rem;
  width: 100%;
`;

export const Section = styled.section`
  margin-bottom: 2rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #495057;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  .section-icon {
    color: #007bff;
  }
`;

export const Card = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin-bottom: 1rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: ${props => props.align || 'center'};
  justify-content: ${props => props.justify || 'flex-start'};
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`; 