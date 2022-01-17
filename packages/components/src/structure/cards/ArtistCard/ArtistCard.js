import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Card as BSPCard } from 'react-bootstrap';
import { ButtonIcon } from '../../../actions/ButtonIcon';
import { TextLink } from '../../../actions/TextLink';
import { truncateText } from '../../../helpers/truncateText';

const ArtistCard = ({
  cssInternalPrefix,
  cssStyles,
  image,
  name,
  location,
  birthdate,
  description,
  link,
  headerLabel,
  ctaLabel,
}) => {
  const cardRef = useRef(null);
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);
  const [titleTruncated, setTitleTruncated] = useState(false);
  const [subtitleTruncated, setSubtitleTruncated] = useState(false);
  const subtitle = [location || '', birthdate || ''].join(' ');
  const [descriptions, setDescriptions] = useState(null);

  const isEllipsisActive = (item) => {
    return item.offsetHeight < item.scrollHeight;
  };

  const handleResize = () => {
    if (titleRef.current && subTitleRef.current) {
      setTitleTruncated(isEllipsisActive(titleRef.current));
      setSubtitleTruncated(isEllipsisActive(subTitleRef.current));
    }
  };

  const getTruncatedDescription = () => {
    const res = {};
    const truncateValues = {
      s: 420,
      m: 355,
      l: 1030,
    };
    Object.keys(truncateValues).map((size) => {
      res[size] = truncateText(description, truncateValues[size]);
      return true;
    });
    setDescriptions(res);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    getTruncatedDescription();
  }, []);

  return (
    <BSPCard
      data-testid="mch-artist-card"
      bsPrefix={cssInternalPrefix}
      style={cssStyles}
      className="artist-card"
      ref={cardRef}
    >
      <div className="card-wrapper">
        <BSPCard.Body>
          <div className="card-header">
            <ButtonIcon icon="collections-add" />
            <div className="header-title">
              <h3 className="header-uppercase-2">{headerLabel}</h3>
            </div>
          </div>
          {titleTruncated
            && <BSPCard.Title
              ref={titleRef}
              title={name}
            >
              {name}
            </BSPCard.Title>
          }
          {!titleTruncated
            && <BSPCard.Title ref={titleRef}>
              {name}
            </BSPCard.Title>
          }
          {subtitleTruncated
            && <BSPCard.Text
              className="artist-location"
              ref={subTitleRef}
              title={subtitle}
            >
                {subtitle}
            </BSPCard.Text>
          }
          {!subtitleTruncated
            && <BSPCard.Text
              className="artist-location"
              ref={subTitleRef}
            >
                {subtitle}
            </BSPCard.Text>
          }
          <BSPCard.Text className="card-description d-md-none">
            {descriptions?.s.text}
            {descriptions?.s.state && <span title={description}>...</span>}
          </BSPCard.Text>
          <BSPCard.Text className="card-description d-none d-md-block d-lg-none">
            {descriptions?.m.text}
            {descriptions?.m.state && <span title={description}>...</span>}
          </BSPCard.Text>
          <BSPCard.Text className="card-description d-none d-lg-block">
            {descriptions?.l.text}
            {descriptions?.l.state && <span title={description}>...</span>}
          </BSPCard.Text>
          <TextLink href={link}>{ctaLabel}</TextLink>
        </BSPCard.Body>

        <div className="img-wrapper">
          <img
            src={image}
            alt="picture"
          />
        </div>
      </div>
    </BSPCard>
  );
};

ArtistCard.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  birthdate: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  cssStyles: PropTypes.string,
  cssInternalPrefix: PropTypes.string,
  headerLabel: PropTypes.string.isRequired,
  ctaLabel: PropTypes.string.isRequired,
};

ArtistCard.defaultProps = {
  cssInternalPrefix: 'card',
  cssStyles: null,
};

export default ArtistCard;
