import React from 'react';
import PropTypes from 'prop-types';
import { Card as BSPCard } from 'react-bootstrap';
import classnames from 'classnames';
import { truncateText } from '../../../../utils/truncateText';

const truncateValue = 250;
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
  const truncated = truncateText(description, truncateValue);

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
          {truncated.text}
          {truncated.state
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
