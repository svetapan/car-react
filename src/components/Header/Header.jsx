import React from 'react';
import { Container, Navigation, StyledNavLink } from './Header.styled';

const Header = () => {
  return (
    <Navigation>
      <StyledNavLink to="/">Home</StyledNavLink>
      <Container>
        <StyledNavLink to="/catalog">Catalog</StyledNavLink>
        <StyledNavLink to="/favorites">Favorites</StyledNavLink>
      </Container>
    </Navigation>
  );
};

export default Header;
