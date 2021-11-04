import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Card as BSPCard } from 'react-bootstrap';
import classNames from 'classnames';

const ProductTile = ({
  cssInternalPrefix,
  cssStyles,
  size,
  image,
  title,
  productName,
  year,
  gallery,
  price,
  offer,
}) => {
  const subtitleRef = useRef(null);
  const [truncated, setTruncated] = useState(false);
  const [dimensions, setDimensions] = useState({ limit: 0, width: 0 });
  const subtitle = [productName, year].join(', ');
  const [truncatedSubtitle, setTruncatedSubtitle] = useState([productName, year].join(', '));

  useEffect(() => {
    if (subtitle && subtitleRef.current) {
      const p = subtitleRef.current.querySelector('p');
      setDimensions({
        limit: subtitleRef.current.offsetWidth,
        width: p.scrollWidth,
      });
    }
  }, [subtitleRef.current]);

  useEffect(() => {
    if (dimensions.width > dimensions.limit && !truncated) {
      const limitChars = Math.floor(
        ((dimensions.limit * subtitle.length) / dimensions.width) - 3,
      );
      setTruncatedSubtitle(subtitle.substring(0, limitChars));
      setTruncated(true);
    }

    if (dimensions.width <= dimensions.limit && truncated) {
      setTruncatedSubtitle(subtitle);
      setTruncated(false);
    }
  }, [dimensions]);

  return (
    <BSPCard
      className={classNames('product-tile', `size-${size}`)}
      bsPrefix={cssInternalPrefix}
      style={cssStyles}
      data-testid="mch-product-tile"
    >
      <div className="tile-img-container">
        <BSPCard.Img variant="top" src={image} />
      </div>
      <BSPCard.Body>
        <div className="tile-subtitle" ref={subtitleRef}>
          <p>{truncatedSubtitle}</p>
          {truncated
          && <span title={subtitle} className="ellipsis">...</span>}
        </div>
        <BSPCard.Title>{title}</BSPCard.Title>
        <BSPCard.Text className="tile-gallery">{gallery}</BSPCard.Text>
        {price
        && <div className="tile-price-container">
          <div className="tile-price">{price.currency} {price.value}</div>
          {offer
          && <div className="tile-offer">| Make an offer</div>}
        </div>}
      </BSPCard.Body>
    </BSPCard>
  );
};

ProductTile.propTypes = {
  cssStyles: PropTypes.string,
  cssInternalPrefix: PropTypes.string,
  size: PropTypes.oneOf(['s', 'm']),
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  gallery: PropTypes.string.isRequired,
  price: PropTypes.shape({
    value: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
  offer: PropTypes.bool,
};

ProductTile.defaultProps = {
  size: 's',
  price: null,
  offer: false,
};

export default ProductTile;
