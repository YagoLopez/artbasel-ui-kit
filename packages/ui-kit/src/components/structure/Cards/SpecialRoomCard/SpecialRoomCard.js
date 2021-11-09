import React from 'react';
import PropTypes from 'prop-types';
import { Card as BSPCard } from 'react-bootstrap';
import classnames from 'classnames';
import { truncateText } from '../../../../utils/truncateText';

const truncateValues = {
  title: 60,
  description: 180,
};

const format = dateInput => new Date(dateInput).getFullYear();

const SpecialRoomCard = ({
  size,
  title,
  image,
  room,
  date,
  name,
  cssInternalPrefix,
  cssStyles,
}) => {
  const description = [name, format(date)].join(', ');
  const truncated = {
    title: truncateText(title, truncateValues.title),
    description: truncateText(description, truncateValues.description),
  };

  return (
    <BSPCard
      data-testid="mch-scpecialroom-card"
      bsPrefix={cssInternalPrefix}
      style={cssStyles}
      className={classnames('specialroom-card', `size-${size}`)}
    >
      <div className="gradient" />
      <img src={image} alt="picture"/>
      <BSPCard.Body>
        <BSPCard.Text className="room">
          {room}
        </BSPCard.Text>
        <BSPCard.Title>
          {truncated.title.text}
          {truncated.title.state
            && <span title={title}>...</span>}
        </BSPCard.Title>
        <BSPCard.Text className="date">
          {truncated.description.text}
          {truncated.description.state
            && <span title={description}>...</span>}
        </BSPCard.Text>
      </BSPCard.Body>
    </BSPCard>
  );
};

SpecialRoomCard.propTypes = {
  size: PropTypes.oneOf(['s', 'l']),
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  room: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  cssInternalPrefix: PropTypes.string,
  cssStyles: PropTypes.string,
};

SpecialRoomCard.defaultProps = {
  size: 's',
  cssInternalPrefix: 'card',
  cssStyles: null,
};

export default SpecialRoomCard;
