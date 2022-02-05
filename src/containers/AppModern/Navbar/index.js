import React, { useState, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
import ScrollSpyMenu from '../../../common/components/ScrollSpyMenu';
import Scrollspy from 'react-scrollspy';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Icon } from 'react-icons-kit';
import { menu } from 'react-icons-kit/feather/menu';
import { x } from 'react-icons-kit/feather/x';
import Logo from '../../../common/components/UIElements/Logo';
import Button from '../../../common/components/Button';
import Container from '../../../common/components/UI/Container';
import useOnClickOutside from '../../../common/hooks/useOnClickOutside';
import NavbarWrapper, { MenuArea, MobileMenu } from './navbar.style';
import LogoImage from '../../../common/assets/image/appModern/logo-white.png';
import LogoImageAlt from '../../../common/assets/image/appModern/logo.png';

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query {
      appModernJson {
        navbar {
          logo {
            publicURL
          }
          navMenu {
            id
            label
            path
            offset
          }
        }
      }
    }
  `);
  const { navMenu } = data.appModernJson.navbar;
  const [state, setState] = useState({
    search: '',
    searchToggle: false,
    mobileMenu: false,
  });

  const searchRef = useRef(null);
  useOnClickOutside(searchRef, () =>
    setState({ ...state, searchToggle: false })
  );

  const toggleHandler = type => {
    if (type === 'search') {
      setState({
        ...state,
        search: '',
        searchToggle: !state.searchToggle,
        mobileMenu: false,
      });
    }

    if (type === 'menu') {
      setState({
        ...state,
        mobileMenu: !state.mobileMenu,
      });
    }
  };

  const scrollItems = [];

  navMenu.forEach(item => {
    scrollItems.push(item.path.slice(1));
  });

  const handleRemoveMenu = () => {
    setState({
      ...state,
      mobileMenu: false,
    });
  };

  return (
    <NavbarWrapper className="navbar">
      <Container>
        <Logo
          href="/appmodern"
          logoSrc={LogoImage}
          title="App Modern"
          className="main-logo"
        />
        <Logo
          href="/appmodern"
          logoSrc={LogoImageAlt}
          title="App Modern"
          className="logo-alt"
        />
        {/* end of logo */}

        <MenuArea className={state.searchToggle ? 'active' : ''}>
          <ScrollSpyMenu className="menu" menuItems={navMenu} offset={-84} />
          {/* end of main menu */}

          <AnchorLink href="#trail" offset={84}>
            <Button className="trail" title="Inscription" />
          </AnchorLink>

          <Button
            className="menubar"
            icon={
              state.mobileMenu ? (
                <Icon className="bar" icon={x} />
              ) : (
                <Fade>
                  <Icon className="close" icon={menu} />
                </Fade>
              )
            }
            color="#0F2137"
            variant="textButton"
            onClick={() => toggleHandler('menu')}
          />
        </MenuArea>
      </Container>

      {/* start mobile menu */}
      <MobileMenu className={`mobile-menu ${state.mobileMenu ? 'active' : ''}`}>
        <Container>
          <Scrollspy
            className="menu"
            items={scrollItems}
            offset={-84}
            currentClassName="active"
          >
            {navMenu.map((menu, index) => (
              <li key={`menu_key${index}`}>
                <AnchorLink
                  href={menu.path}
                  offset={menu.offset}
                  onClick={handleRemoveMenu}
                >
                  {menu.label}
                </AnchorLink>
              </li>
            ))}
          </Scrollspy>
          <Button title="Inscription" />
        </Container>
      </MobileMenu>
      {/* end of mobile menu */}
    </NavbarWrapper>
  );
};

export default Navbar;
