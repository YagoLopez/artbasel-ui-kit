import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Card as BSPCard } from 'react-bootstrap';
import classNames from 'classnames';

const ProductTile = ({
  cssInternalPrefix,
  cssStyles,
  size,
  image,
  author,
  productName,
  year,
  gallery,
  price,
  offer,
}) => {
  const titleRef = useRef(null);
  const [truncated, setTruncated] = useState(false);
  const [dimensions, setDimensions] = useState({ limit: 0, width: 0 });
  const subtitle = [author, year].join(', ');
  const [truncatedTitle, setTruncatedTitle] = useState(productName);

  useEffect(() => {
    if (titleRef.current) {
      const heading = titleRef.current.querySelector('.card-title');
      setDimensions({
        limit: titleRef.current.offsetWidth,
        width: heading.scrollWidth,
      });
    }
  }, [titleRef.current]);

  useEffect(() => {
    if (dimensions.width > dimensions.limit && !truncated) {
      const limitChars = Math.floor(
        ((dimensions.limit * productName.length) / dimensions.width) - 3,
      );
      setTruncatedTitle(productName.substring(0, limitChars));
      setTruncated(true);
    }

    if (dimensions.width <= dimensions.limit && truncated) {
      setTruncatedTitle(productName);
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
        <p className="tile-subtitle">{subtitle}</p>
        <div ref={titleRef}>
          <BSPCard.Title>
            {truncatedTitle}
            {truncated
              && <span title={productName}>...</span>}
          </BSPCard.Title>
        </div>
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
  author: PropTypes.string.isRequired,
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
