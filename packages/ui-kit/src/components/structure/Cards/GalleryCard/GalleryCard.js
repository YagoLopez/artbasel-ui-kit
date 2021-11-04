import React from 'react';
import PropTypes from 'prop-types';
import { Card as BSPCard } from 'react-bootstrap';
import classnames from 'classnames';

let truncated = false;
const truncateValue = 250;

const truncateText = (text) => {
  truncated = text?.length > truncateValue;
  return truncated ? text.substring(0, truncateValue - 3) : text;
};

const thumbnailHeight = '234.37px';

const GalleryCard = ({
  size,
  gallery,
  title,
  image,
  description,
  cssInternalPrefix,
  cssStyles,
}) => {
  return (
    <BSPCard
      data-testid="mch-gallery-card"
      bsPrefix={cssInternalPrefix}
      style={cssStyles}
      className={classnames('gallery-card', `size-${size}`)}
    >
      <div className="hoverHandler">
        <div className="gradient"/>
        <img
          src={image}
          width="100%"
          height={thumbnailHeight}
          alt="picture"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <BSPCard.Body>
        <BSPCard.Text className="card-gallery">{gallery}</BSPCard.Text>
        <BSPCard.Title>{title}</BSPCard.Title>
        <BSPCard.Text>
          {truncateText(description)}
          {truncated
          && <span title={description}>...</span>}
        </BSPCard.Text>
      </BSPCard.Body>
    </BSPCard>
  );
};

GalleryCard.propTypes = {
  size: PropTypes.oneOf(['s', 'm']),
  gallery: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cssInternalPrefix: PropTypes.string,
  cssStyles: PropTypes.string,
};

GalleryCard.defaultProps = {
  size: 's',
  cssInternalPrefix: 'card',
  cssStyles: null,
};

export default GalleryCard;
