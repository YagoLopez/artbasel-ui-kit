import React from 'react';
import PropTypes from 'prop-types';
import { Card as BSPCard } from 'react-bootstrap';

const CarouselArtistCard = ({
  artistName,
  artworks,
  image,
  cssInternalPrefix,
  cssStyles,
  onClick,
}) => {
  return (
    <BSPCard
      data-testid="mch-carousel-artist-card"
      bsPrefix={cssInternalPrefix}
      style={cssStyles}
      className="carousel-artist-card"
      onClick={onClick}
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

CarouselArtistCard.propTypes = {
  artistName: PropTypes.string.isRequired,
  artworks: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  cssInternalPrefix: PropTypes.string,
  cssStyles: PropTypes.string,
  onClick: PropTypes.func,
};

CarouselArtistCard.defaultProps = {
  cssInternalPrefix: 'card',
  cssStyles: null,
  onClick: () => {},
};

export default CarouselArtistCard;
