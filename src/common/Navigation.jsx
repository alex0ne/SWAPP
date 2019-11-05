import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthService } from '../services/Auth';
import { ThemeContext } from 'styled-components';
import { Navbar, NavbarBrand, Nav, NavItem, Button } from 'reactstrap';
import { ReactComponent as LogoutIcon } from '../fonts/sign-out-alt-solid.svg';

export default function Navigation() {
  const authService = new AuthService();
  const themeContext = useContext(ThemeContext);
  const theme = themeContext.styles;
  const navbarStyles = {
    backgroundColor: theme.appBarBackground,
    borderColor: theme.appBarBorderColor
  };
  const navBarBrandStyles = {
    fontFamily: 'SF Distant Galaxy',
    cursor: 'pointer',
    color: '#FFE300',
    fontSize: 30
  };
  const navbarLinkStyles = {
    textDecoration: 'none',
    color: theme.appBarFontColor,
    marginRight: 10,
    lineHeight: 2
  };
  const logoutButtonStyles = {
    borderColor: theme.appBarFontColor,
    backgroundColor: 'none'
  };
  const logoutIconStyles = { width: 17, color: theme.appBarFontColor };
  return (
    <div>
      <Navbar style={navbarStyles} expand='md'>
        <NavbarBrand
          onClick={() => themeContext.swapTheme()}
          style={navBarBrandStyles}>
          SWAPP
        </NavbarBrand>
        <Nav className='ml-auto' navbar>
          <NavItem>
            <Link style={navbarLinkStyles} to='/episodes'>
              episodes
            </Link>
          </NavItem>
          <NavItem>
            <Link style={navbarLinkStyles} to='/characters'>
              characters
            </Link>
          </NavItem>
          <NavItem>
            <Button
              size='sm'
              outline
              style={logoutButtonStyles}
              onClick={() => {
                authService.signout();
              }}>
              <LogoutIcon style={logoutIconStyles} />
            </Button>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}
