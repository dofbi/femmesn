import React, { Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import Heading from '../../../common/components/Heading';
import Container from '../../../common/components/UI/Container';
import { SectionHeader } from '../appModern.style';
import SectionWrapper, { CarouselWrapper } from './inscriptions.style';

const Inscriptions = () => {

  return (
    <SectionWrapper id="testimonial">
      <Container>
        <SectionHeader>
          <Fade up>
            <Heading as="h5" content="INSCRIPTION" />
            <Heading content="Merci de remplir le formulaire ci-joint" />
          </Fade>
        </SectionHeader>

        <CarouselWrapper>
          <Fade up delay={100}>
              <Fragment>
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSddYoPO6uZ7MjhPttOnV3XHNzLAEU1LAcFYOEvhFv62CjuV_g/viewform?embedded=true" width="100%" height="3736" frameborder="0" marginheight="0" marginwidth="0">Chargement…</iframe>
              </Fragment>
          </Fade>
        </CarouselWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Inscriptions;
