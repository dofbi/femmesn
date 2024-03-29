import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Text from '../../../common/components/Text';
import Image from '../../../common/components/Image';
import Heading from '../../../common/components/Heading';
import Container from '../../../common/components/UI/Container';
import FeatureBlock from '../../../common/components/FeatureBlock';
import GlideCarousel from '../../../common/components/GlideCarousel';
import GlideSlide from '../../../common/components/GlideCarousel/glideSlide';
import SectionWrapper, { CarouseWrapper, TextWrapper } from './appSlider.style';

const AppSlider = () => {
  const data = useStaticQuery(graphql`
    query {
      appModernJson {
        appSlider {
          title
          description
          features {
            id
            icon {
              publicURL
            }

            title
            description
            link
            target
          }
          carousel {
            id
            title
            image {
              publicURL
            }
          }
        }
      }
    }
  `);
  const {
    title,
    description,
    features,
    carousel,
  } = data.appModernJson.appSlider;

  const glideOptions = {
    type: 'carousel',
    gap: 0,
    autoplay: 5000,
    perView: 1,
    animationDuration: 700,
  };

  return (
    <SectionWrapper>
      <Container>
        <CarouseWrapper>
          <GlideCarousel
            bullets={true}
            controls={false}
            numberOfBullets={3}
            options={glideOptions}
            carouselSelector="appFeatureSlider"
          >
            <Fragment>
              {carousel.map(item => (
                <GlideSlide key={`feature-side--key${item.id}`}>
                  <Image src={item.image.publicURL} alt={item.title} />
                </GlideSlide>
              ))}
            </Fragment>
          </GlideCarousel>
        </CarouseWrapper>
        <TextWrapper>
          <Heading content={title} />
          <Text content={description} />
          {features.map(item => (
            <a href={item.link} target={item.target}>
              <FeatureBlock
                key={`app-feature--key${item.id}`}
                iconPosition="left"
                icon={<img src={item.icon.publicURL} alt={item.title} />}
                title={<Heading as="h3" content={item.title} />}
                description={<Text content={item.description} />}
              />
            </a>
          ))}
        </TextWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default AppSlider;
