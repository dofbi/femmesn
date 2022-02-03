import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Text from '../../../common/components/Text';
import Heading from '../../../common/components/Heading';
import Button from '../../../common/components/Button';
import Image from '../../../common/components/Image';
import Container from '../../../common/components/UI/Container';
import SectionWrapper, { ContentWrapper } from './teamPortfolio.style';

const TeamPortfoiloSection = () => {
  const data = useStaticQuery(graphql`
    query {
      appModernJson {
        teamportfolio {
          title
          description
          teammember {
            id
            img {
              publicURL
            }
            text
          }
        }
      }
    }
  `);
  const { title, description, teammember } = data.appModernJson.teamportfolio;
  const [hover, setHover] = useState({
    active: 6, // active item when start
  });

  return (
    <SectionWrapper id="team">
      <Container>
        <ContentWrapper>
          <div className="image">
            {teammember.map((item, index) => (
              <Fade up key={index}>
                <div
                  className={`item_wrapper ${
                    hover.active === index ? 'active' : ''
                  }`}
                  key={index}
                  onMouseEnter={() => {
                    setHover({
                      active: index,
                    });
                  }}
                  onMouseLeave={() => {
                    setHover({
                      active: index,
                    });
                  }}
                  role="button"
                  tabIndex={0}
                >
                  <div className="imageWrapper">
                    <Image src={item.img.publicURL} alt={item.text} />
                  </div>
                  <Text className="author_name" content={item.text} />
                </div>
              </Fade>
            ))}
          </div>
          <div className="content">
            <Heading content={title} />
            <Text content={description} />
            <Button title="Learn More" />
          </div>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default TeamPortfoiloSection;
