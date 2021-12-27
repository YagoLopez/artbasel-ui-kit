import React from 'react';
import PropTypes from 'prop-types';
import { Card as BSPCard } from 'react-bootstrap';

const ArtistCard = ({
  artistName,
  artworks,
  image,
  cssInternalPrefix,
  cssStyles,
}) => {
  return (
    <BSPCard
      data-testid="mch-artist-card"
      bsPrefix={cssInternalPrefix}
      style={cssStyles}
      className="artist-card"
    >
      <div className="gradient" />
      <img src={image} alt="picture" />
      <BSPCard.Body>
        <div className="artist-info">
          <BSPCard.Text>{[artworks, 'artworks'].join(' ')}</BSPCard.Text>
          <BSPCard.Text className="artist-name">{artistName}</BSPCard.Text>
        </div>
      </BSPCard.Body>
    </BSPCard>
  );
};

ArtistCard.propTypes = {
  artistName: PropTypes.string.isRequired,
  artworks: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  cssInternalPrefix: PropTypes.string,
  cssStyles: PropTypes.string,
};

ArtistCard.defaultProps = {
  cssInternalPrefix: 'card',
  cssStyles: null,
};

export default ArtistCard;
