import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SplideSlide } from '@splidejs/react-splide';

const Slide = ({ children, className, productTiles }) => (
  <SplideSlide
    data-testid="mch-carousel-slide"
    className={classnames(className, {
      'product-tile-size': productTiles,
    })}
  >
    {children}
  </SplideSlide>
);

Slide.propTypes = {
  children: PropTypes.object.isRequired,
  className: PropTypes.string,
  productTiles: PropTypes.bool,
};

Slide.defaultProps = {
  className: null,
  productTiles: false,
};

export default Slide;
