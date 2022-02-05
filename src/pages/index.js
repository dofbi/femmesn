import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../common/theme/appModern';
import { ResetCSS } from '../common/assets/css/style';
import Sticky from 'react-stickynode';
import Navbar from '../containers/AppModern/Navbar';
import Banner from '../containers/AppModern/Banner';
import AppSlider from '../containers/AppModern/AppSlider';
import Features from '../containers/AppModern/Features';
import Testimonial from '../containers/AppModern/Testimonial';
import Footer from '../containers/AppModern/Footer';
import GlobalStyle, {
  AppWrapper,
  ContentWrapper,
} from '../containers/AppModern/appModern.style';

import Seo from '../components/seo';

export default function App() {      
  return (
    <ThemeProvider theme={theme}>
      <>
        <Seo title="Femmes et Numériques" />
        <ResetCSS />
        <GlobalStyle />

        <AppWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-active">
            <Navbar />
          </Sticky>
          <ContentWrapper>
            <Banner />
            <Features />
            <AppSlider />
            <Testimonial />
          </ContentWrapper>
          <Footer />
        </AppWrapper>
      </>
    </ThemeProvider>
  );
}
