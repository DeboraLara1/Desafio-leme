import React from "react";
import { HeaderContainer, HeaderContent, LogoSection, Logo } from "./styles";



const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoSection>
          <Logo>
            <i className="pi pi-search logo-icon" />
            <span className="logo-text">Leme Forense</span>
          </Logo>
        </LogoSection>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
