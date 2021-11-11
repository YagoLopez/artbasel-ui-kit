import React from 'react';
import PropTypes from 'prop-types';
import { Card as BSPCard } from 'react-bootstrap';
import classnames from 'classnames';
import { truncateText } from '../../../utils/truncateText';

const truncateValues = {
  title: 60,
  description: 180,
};

const ContentCard = ({
  size,
  title,
  image,
  description,
  cssInternalPrefix,
  cssStyles,
}) => {
  const truncated = {
    title: truncateText(title, truncateValues.title),
    description: truncateText(description, truncateValues.description),
  };

  return (
    <BSPCard
      data-testid="mch-content-card"
      bsPrefix={cssInternalPrefix}
      style={cssStyles}
      className={classnames('content-card', `size-${size}`)}
    >
      <div className="gradient" />
      <img src={image} alt="picture"/>
      <BSPCard.Body>
        <BSPCard.Title>
          {truncated.title.text}
          {truncated.title.state
            && <span title={title}>...</span>}
        </BSPCard.Title>
        <BSPCard.Text className="card-description">
          {truncated.description.text}
          {truncated.description.state
            && <span title={description}>...</span>}
        </BSPCard.Text>
      </BSPCard.Body>
    </BSPCard>
  );
};

ContentCard.propTypes = {
  size: PropTypes.oneOf(['s', 'l']),
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cssInternalPrefix: PropTypes.string,
  cssStyles: PropTypes.string,
};

ContentCard.defaultProps = {
  size: 's',
  cssInternalPrefix: 'card',
  cssStyles: null,
};

export default ContentCard;
