import React from 'react';
import PropTypes from 'prop-types';
import { Card as BSPCard } from 'react-bootstrap';
import classNames from 'classnames';
import { ButtonIcon } from '../../../actions/ButtonIcon';
import { Icon } from '../../../utils/Icon';
import { Tag } from '../../../feedback/Tag';

const ConditionalWrapper = ({
  linkRenderer, condition, link, children,
}) => {
  if (condition && typeof linkRenderer === 'function') {
    return linkRenderer(link, children);
  }
  return children;
};

const MemoizedConditionalWrapper = React.memo(ConditionalWrapper);

const EventCard = ({
  responsive,
  title,
  type,
  image,
  description,
  venue,
  schedule,
  date,
  linkRenderer,
  eventLink,
  collection,
  tags,
}) => {
  return (
    <BSPCard
      data-testid="mch-event-card"
      className={classNames('event-card', { responsive, fixed: !responsive })}
    >
      {/* Image Frame */}
      <div className="image-frame">
        {!collection?.active && (
          <ButtonIcon
          icon="collections-add"
          onClick={collection.onClick}
          variant="fill"
          theme="dark"
        />
        )}
        <MemoizedConditionalWrapper
          linkRenderer={linkRenderer}
          condition={eventLink}
          link={eventLink}
        >
          <div className="overlay-gradient" />
          <div
            style={{ backgroundImage: `url(${image})` }}
            className={classNames('image', { 'ar-16_10': !responsive })}
          />
        </MemoizedConditionalWrapper>
      </div>

      {/* Body Text */}
      <BSPCard.Body>
        <MemoizedConditionalWrapper
          linkRenderer={linkRenderer}
          condition={eventLink}
          link={eventLink}
        >
          {/* Event Type */}
          <div className="type">{type}</div>
          {/* Event TItle */}
          <h3 className="title">{title}</h3>
          {/* Event Description */}
          {description && responsive && (
            <div className="d-none d-md-block">
              <span
                className="card-description text-medium truncate"
                title={description}
              >
                {description}
              </span>
            </div>
          )}
          <div className="items">
            {/* Event Venue */}
            {venue?.name && (
              <div className="item">
                <div className="card-item-icon">
                  <Icon name="map" />
                </div>
                <div className="card-item-data">
                  <span className="text-small">{venue?.name}</span>
                </div>
              </div>
            )}
            <div className="item">
              <div className="card-item-icon">
                <Icon name="pin" />
              </div>
              <div className="card-item-data">
                <span className="text-small">
                  {venue?.street}
                  <br />
                  {venue?.postCode} {venue?.city}
                </span>
              </div>
            </div>
            <div className="item">
              <div className="card-item-icon">
                <Icon name="calendar" />
              </div>
              <div className="card-item-data">
                <span className="text-small">{date}</span>
              </div>
            </div>
            {schedule && (
              <div className="item">
                <div className="card-item-icon">
                  <Icon name="time" />
                </div>
                <div className="card-item-data">
                  <span className="text-small">{schedule}</span>
                </div>
              </div>
            )}
          </div>
          {tags?.length && (
            <div className="tags">
              {tags.map((i) => (
                <Tag
                  label={i.label}
                  key={i.id}
                  type={i.type}
                  theme={i.theme}
                  size="s"
                />
              ))}
            </div>
          )}
        </MemoizedConditionalWrapper>
      </BSPCard.Body>
    </BSPCard>
  );
};

EventCard.propTypes = {
  responsive: PropTypes.bool,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  linkRenderer: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  eventLink: PropTypes.string.isRequired,
  description: PropTypes.string,
  venue: PropTypes.shape({
    name: PropTypes.string,
    street: PropTypes.string,
    postCode: PropTypes.string,
    city: PropTypes.string,
  }).isRequired,
  schedule: PropTypes.string,
  date: PropTypes.string.isRequired,
  collection: PropTypes.shape({
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func,
  }),
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      label: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['label', 'premium']),
      theme: PropTypes.oneOf(['light', 'dark']),
    }),
  ),
};

EventCard.defaultProps = {
  responsive: false,
};

export default EventCard;
