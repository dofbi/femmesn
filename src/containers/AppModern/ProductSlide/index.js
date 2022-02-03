import React, { Fragment, useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Heading from '../../../common/components/Heading';
import Image from '../../../common/components/Image';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import ProductSlideWrapper, {
  Container,
  CarouselArea,
  CircleLoader,
  MockupWrapper,
  SectionHeader,
} from './productSlide.style';
import SlideMockup from '../../../common/assets/image/appModern/screen.png';
const params = {
  slidesPerView: 5,
  centeredSlides: true,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
  },
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
};
const ProductSlide = () => {
  const data = useStaticQuery(graphql`
    query {
      appModernJson {
        productData {
          slogan
          title
          slider {
            id
            thumb_url {
              publicURL
            }
            link
            title
          }
        }
      }
    }
  `);
  const { slogan, title, slider } = data.appModernJson.productData;

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
  }, []);
  return (
    <ProductSlideWrapper>
      <Container>
        <SectionHeader>
          <Fade up>
            <Heading as="h5" content={slogan} />
            <Heading content={title} />
          </Fade>
        </SectionHeader>
        <CarouselArea>
          {loading ? (
            <Fragment>
              <MockupWrapper>
                <Image src={SlideMockup} alt="mockup" />
              </MockupWrapper>
              <Swiper {...params}>
                {slider.map((item, index) => (
                  <div key={index}>
                    <div>
                      <a href={item.link} className="item_wrapper">
                        <Image
                          src={item.thumb_url.publicURL}
                          alt={item.title}
                        />
                      </a>
                    </div>
                  </div>
                ))}
              </Swiper>
            </Fragment>
          ) : (
            <CircleLoader>
              <div className="circle"></div>
              <div className="circle"></div>
            </CircleLoader>
          )}
        </CarouselArea>
        {/* End of carousel section */}
      </Container>
    </ProductSlideWrapper>
  );
};

export default ProductSlide;
