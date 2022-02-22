import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Card as BSPCard } from 'react-bootstrap';
import classNames from 'classnames';
import { ButtonIcon } from '../../actions/ButtonIcon';

const ProductTile = ({
  cssInternalPrefix,
  cssStyles,
  image,
  author,
  productName,
  year,
  gallery,
  price,
}) => {
  const subtitleRef = useRef(null);
  const [truncated, setTruncated] = useState(false);
  const [dimensions, setDimensions] = useState({ limit: 0, width: 0 });
  const subtitle = [productName, year].join(', ');
  const [truncatedSubtitle, setTruncatedSubtitle] = useState(
    [productName, year].join(', '),
  );

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
        (dimensions.limit * subtitle.length) / dimensions.width - 3,
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
      className={classNames('product-tile')}
      bsPrefix={cssInternalPrefix}
      style={cssStyles}
      data-testid="mch-product-tile"
    >
      <div className="button-container">
        <ButtonIcon icon="collections-add" />
      </div>
      <div className="tile-img-container">
        <div className="overlay-fill" />
        <div className="tile-img-frame">
          <img src={image} />
        </div>
      </div>
      <BSPCard.Body>
        <BSPCard.Title className="mt-5">{author}</BSPCard.Title>
        <div className="tile-subtitle mb-5" ref={subtitleRef}>
          <p>{truncatedSubtitle}</p>
          {truncated && (
            <span title={subtitle} className="ellipsis">
              ...
            </span>
          )}
        </div>
        <BSPCard.Text className="tile-gallery">{gallery}</BSPCard.Text>
        {price && (
          <div className="tile-price-container">
            <div className="tile-price">
              {price}
            </div>
          </div>
        )}
      </BSPCard.Body>
    </BSPCard>
  );
};

ProductTile.propTypes = {
  cssStyles: PropTypes.string,
  cssInternalPrefix: PropTypes.string,
  image: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  gallery: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default ProductTile;
