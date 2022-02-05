import React from 'react';
import Fade from 'react-reveal/Fade';
import { useStaticQuery, graphql } from 'gatsby';
import Text from '../../../common/components/Text';
import Image from '../../../common/components/Image';
import Button from '../../../common/components/Button';
import Heading from '../../../common/components/Heading';
import Container from '../../../common/components/UI/Container';
import BannerWrapper, {
  BannerContent,
  BannerImage,
  ButtonGroup,
  CustomerWrapper,
  ImageWrapper,
} from './banner.style';

import bannerImg from '../../../common/assets/image/appModern/banner2.png';
import circleBorder from '../../../common/assets/image/appModern/shape.svg';

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      appModernJson {
        client {
          id
          title
          image {
            publicURL
          }
        }
      }
    }
  `);
  const { client } = data.appModernJson;
  
  return (
    <BannerWrapper id="home">
      <Container>
        <BannerContent>
          <Fade up delay={100}>
            <Heading
              as="h1"
              content="Programme «Femmes et Numérique»"
            />
          </Fade>
          <Fade up delay={200}>
            <Text
              content="Est destiné à la promotion et l’autonomisation des jeunes filles et femmes dans  l’économie numérique en République de Djibouti."
            />
          </Fade>
          <Fade up delay={300}>
            <ButtonGroup>
              <Button className="primary" title="Inscription" />
            </ButtonGroup>
          </Fade>
        </BannerContent>
        <BannerImage>
          <Fade up delay={100}>
            <Image src={bannerImg} alt="Banner" />
          </Fade>
        </BannerImage>
      </Container>
      <CustomerWrapper>
        <Text content="Partenaires:" />
        <ImageWrapper>
          {client.map(item => (
            <Image
              key={`client-key${item.id}`}
              src={item.image.publicURL}
              alt={item.title}
            />
          ))}
        </ImageWrapper>
      </CustomerWrapper>
      <img
        className="bannerBottomShape"
        src={circleBorder}
        alt="Bottom Circle"
      />
    </BannerWrapper>
  );
};

export default Banner;
