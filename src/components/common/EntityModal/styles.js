import styled from 'styled-components';

export const ModalContent = styled.div`
  .entity-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #dee2e6;
  }

  .entity-type-badge {
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-weight: 600;
    font-size: 0.875rem;
  }

  .entity-type-badge.pessoa {
    background: #e3f2fd;
    color: #1976d2;
  }

  .entity-type-badge.empresa {
    background: #f3e5f5;
    color: #7b1fa2;
  }

  .entity-name {
    font-size: 1.5rem;
    font-weight: 700;
    color: #212529;
  }

  .info-section {
    margin-bottom: 2rem;
  }

  .info-section:last-child {
    margin-bottom: 0;
  }

  .info-title {
    font-size: 1.125rem;
    font-weight: 600;
    color: #495057;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #e9ecef;
  }

  .info-title i {
    color: #007bff;
  }

  .info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
  }

  .info-item {
    background: #f8f9fa;
    padding: 1rem;
    border-radius: 8px;
    border-left: 4px solid #007bff;
    transition: all 0.2s ease;
  }

  .info-item:hover {
    background: #e9ecef;
    transform: translateY(-1px);
  }

  .info-item.full-width {
    grid-column: 1 / -1;
  }

  .info-label {
    font-size: 0.75rem;
    font-weight: 600;
    color: #6c757d;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
    display: block;
  }

  .info-value {
    font-size: 0.875rem;
    color: #212529;
    font-weight: 500;
    display: block;
  }

  .contact-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    background: white;
    border-radius: 6px;
    border: 1px solid #dee2e6;
    font-size: 0.875rem;
    transition: all 0.2s ease;
  }

  .contact-item:hover {
    background: #f8f9fa;
    border-color: #007bff;
  }

  .contact-icon {
    color: #007bff;
    font-size: 1rem;
  }

  .address-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .address-item {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0.75rem;
    background: white;
    border-radius: 6px;
    border: 1px solid #dee2e6;
    font-size: 0.875rem;
    line-height: 1.4;
    transition: all 0.2s ease;
  }

  .address-item:hover {
    background: #f8f9fa;
    border-color: #007bff;
  }

  .partners-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .partner-tag {
    background: #e9ecef;
    color: #495057;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 500;
    border: 1px solid #dee2e6;
    transition: all 0.2s ease;
  }

  .partner-tag:hover {
    background: #007bff;
    color: white;
    border-color: #007bff;
  }

  .entity-modal .p-dialog-header {
    background: #f8f9fa;
    border-bottom: 1px solid #dee2e6;
  }

  .entity-modal .p-dialog-content {
    padding: 1.5rem;
  }

  .entity-modal .p-dialog-footer {
    background: #f8f9fa;
    border-top: 1px solid #dee2e6;
    padding: 1rem 1.5rem;
  }
`;

export const CloseButton = styled.button`
  background-color: #6c757d;
  border-color: #6c757d;
  margin-right: 1rem;
  margin-bottom: 5px;
`; 