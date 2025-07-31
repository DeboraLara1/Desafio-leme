import React from "react";
import {
  HeaderContainer,
  HeaderContent,
  LogoSection,
  Logo
} from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoSection>
          <Logo>
            <i className="pi pi-search logo-icon"></i>
            <div>
              <div className="logo-text">Dashboard de Busca</div>
            </div>
          </Logo>
        </LogoSection>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
