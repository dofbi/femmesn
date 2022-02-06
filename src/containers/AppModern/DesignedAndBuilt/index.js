import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Text from '../../../common/components/Text';
import Heading from '../../../common/components/Heading';
import Image from '../../../common/components/Image';
import Container from '../../../common/components/UI/Container';
import SectionWrapper, { ContentWrapper } from './designedAndBuilt.style';

const DesignedAndBuilt = () => {
  const data = useStaticQuery(graphql`
    query {
      appModernJson {
        designAndBuilt {
          image {
            publicURL
          }
          title
          slogan
          description
        }
      }
    }
  `);
  const {
    image,
    title,
    slogan,
    description,
  } = data.appModernJson.designAndBuilt;

  return (
    <SectionWrapper id="partners">
      <Container>
        <ContentWrapper>
          <div className="content">
            <Heading as="h5" content={slogan} />
            <Heading content={title} />
            <Text content={description} />
          </div>
          <div className="image">
            <Image src={image.publicURL} alt="Built Logo" />
          </div>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default DesignedAndBuilt;
