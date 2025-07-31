import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: #22425C;
  color: white;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 1;
  width: 100%;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 100%;
  margin: 0;
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
    font-weight:700;
    color: white;
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;


