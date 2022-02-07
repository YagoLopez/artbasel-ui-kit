import React from 'react';
import PropTypes from 'prop-types';
import { SplideSlide } from '@splidejs/react-splide';

const Slide = ({
  children,
  cssStyles,
}) => (
  <SplideSlide
    data-testid="mch-carousel-pdp-slide"
    styles={cssStyles}
  >
    <div className="slide-img-wrapper">
      {children}
    </div>
  </SplideSlide>
);

Slide.propTypes = {
  children: PropTypes.any.isRequired,
  cssStyles: PropTypes.string,
};

Slide.defaultProps = {
  cssStyles: null,
};

export default Slide;
