import React from 'react';
import PropTypes from 'prop-types';

import { Item as PSItem } from 'react-photoswipe-gallery';

const Item = ({
  original, thumbnail, width, height, id, title, children,
}) => (
  <PSItem
    data-testid="mch-zoomviewer-item"
    original={ original }
    thumbnail={ thumbnail }
    width={ width }
    height={ height }
    id={ id }
    title={ title }
  >
    {children}
  </PSItem>
);

Item.propTypes = {
  original: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  children: PropTypes.func.isRequired,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  title: PropTypes.string,
};

export default Item;
