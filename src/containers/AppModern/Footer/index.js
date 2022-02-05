import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Logo from '../../../common/components/UIElements/Logo';
import Container from '../../../common/components/UI/Container';
import FooterArea, {
  MenuArea,
  Menu,
  MenuItem,
  CopyrightText,
} from './footer.style';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      appModernJson {
        footer {
          logo {
            publicURL
          }
          menu {
            id
            link
            text
          }
          widgets {
            id
            icon {
              publicURL
            }
            title
            description
          }
        }
      }
    }
  `);
  const { logo, menu } = data.appModernJson.footer;
  const date = new Date();
  const year = date.getFullYear();

  return (
    <FooterArea>
      <Container>
        <MenuArea>
          <Logo
            className="logo"
            href="/appclassic"
            logoSrc={logo.publicURL}
            title="App Classic"
          />
          <Menu>
            {menu.map(item => (
              <MenuItem key={`footer-link${item.id}`}>
                <a href={item.link}>{item.text}</a>
              </MenuItem>
            ))}
          </Menu>
          <CopyrightText>Copyright {year} CTID Djibout</CopyrightText>
        </MenuArea>
        {/* End of footer menu area */}
      </Container>
    </FooterArea>
  );
};

export default Footer;
