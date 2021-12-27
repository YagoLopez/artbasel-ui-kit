import React from 'react';
import PropTypes from 'prop-types';
import { Card as BSPCard } from 'react-bootstrap';
import { truncateText } from '../../../helpers/truncateText';
import { TextLink } from '../../../actions/TextLink';

const truncateValues = {
  title: 35,
  description: 160,
};

const ArtistCoverCard = ({
  title,
  link,
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
      data-textid="mch-artist-cover-card"
      bsPrefix={cssInternalPrefix}
      style={cssStyles}
      className="artist-cover-card"
    >
      <BSPCard.Body>
        <BSPCard.Title>
          {truncated.title.text}
          {truncated.title.state && <span title={title}>...</span>}
        </BSPCard.Title>
          <BSPCard.Text className="card-description d-none d-xl-block">
            {truncated.description.text}
            {truncated.description.state && <span title={description}>...</span>}
          </BSPCard.Text>
        <TextLink href={link?.url}>{link?.text}</TextLink>
      </BSPCard.Body>
    </BSPCard>
  );
};

ArtistCoverCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.shape({
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  description: PropTypes.string.isRequired,
  cssInternalPrefix: PropTypes.string,
  cssStyles: PropTypes.string,
};

ArtistCoverCard.defaultProps = {
  cssInternalPrefix: 'card',
  cssStyles: null,
};

export default ArtistCoverCard;
