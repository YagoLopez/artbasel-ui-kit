import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SplideSlide } from '@splidejs/react-splide';

const Slide = ({ children, cssStyles, productTiles }) => (
  <SplideSlide
    data-testid="mch-carousel-slide"
    className={ classnames({
      'product-tile-size': productTiles,
    }) }
    styles={cssStyles}
  >
    {children}
  </SplideSlide>
);

Slide.propTypes = {
  /** Used to force the Produt Tile slide width to be
  equals to artist cards slides. Please refer to code sample. */
  productTiles: PropTypes.bool,
  cssStyles: PropTypes.string,
  children: PropTypes.any.isRequired,
};

Slide.defaultProps = {
  cssStyles: null,
  productTiles: false,
};

export default Slide;
