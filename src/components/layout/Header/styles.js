import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: #22425C;;
  color: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  .logo-icon {
    font-size: 1.5rem;
    color: #fff;
  }

  .logo-text {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
  }
`;
