import React from 'react';
import PropTypes from 'prop-types';
import { Card as BSPCard } from 'react-bootstrap';
import classnames from 'classnames';
import { Button } from '../../../actions/Button';
import { Icon } from '../../../utils/Icon';
import { truncateText } from '../../../helpers/truncateText';

const truncateValues = {
  title: 80,
  description: 250,
};
const classHeight = {
  s: '234.37px',
  m: '492px',
  l: '624px',
};

const EventCard = ({
  cssInternalPrefix,
  cssStyles,
  size,
  title,
  image,
  description,
  location,
  schedule,
  date,
  button,
}) => {
  const truncated = {
    title: truncateText(title, truncateValues.title),
    description: truncateText(description, truncateValues.description),
  };

  return (
    <BSPCard
      data-testid="mch-event-card"
      bsPrefix={cssInternalPrefix}
      style={cssStyles}
      className={classnames('event-card', `size-${size}`)}
    >
      <div className="hoverHandler">
        <div className="gradient" />
        <img
          src={image}
          width="100%"
          height={classHeight[size]}
          alt="picture"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <BSPCard.Body>
        <BSPCard.Title>
          {truncated.title.text}
          {truncated.title.state && <span title={title}>...</span>}
        </BSPCard.Title>
        <BSPCard.Text className="card-description">
          {truncated.description.text}
          {truncated.description.state && <span title={description}>...</span>}
        </BSPCard.Text>
        <div className="item">
          <div className="card-item-icon">
            <Icon name="pin" height={20} />
          </div>
          <div className="card-item-data">
            <span>{location?.address}</span>
            <br />
            <span>
              {location?.pc} {location?.city}
            </span>
          </div>
        </div>
        <div className="item">
          <div className="card-item-icon">
            <Icon name="calendar" height={20} />
          </div>
          <div className="card-item-data">
            <span>{date}</span>
          </div>
        </div>
        <div className="item">
          <div className="card-item-icon">
            <Icon name="time" height={20} />
          </div>
          <div className="card-item-data">
            <span>{schedule}</span>
          </div>
        </div>
        <div className="buttonBox">
          {button && (
            <Button variant="secondary" href={button?.link}>
              {button?.text}
            </Button>
          )}
        </div>
      </BSPCard.Body>
    </BSPCard>
  );
};

EventCard.propTypes = {
  size: PropTypes.oneOf(['s', 'm', 'l']),
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.shape({
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    pc: PropTypes.string.isRequired,
  }).isRequired,
  schedule: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  button: PropTypes.shape({
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  cssStyles: PropTypes.string,
  cssInternalPrefix: PropTypes.string,
};

EventCard.defaultProps = {
  size: 's',
  cssInternalPrefix: 'card',
  cssStyles: null,
};

export default EventCard;
