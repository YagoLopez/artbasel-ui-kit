import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import { Card as BSPCard } from 'react-bootstrap';
import classNames from 'classnames';
import { ButtonIcon } from '../../../actions/ButtonIcon';
import { Icon } from '../../../utils/Icon';
import { Tag } from '../../../feedback/Tag';
import { Checkbox } from '../../../inputs/Checkbox';

const ConditionalWrapper = ({
  linkRenderer, condition, link, children,
}) => {
  if (condition && typeof linkRenderer === 'function') {
    return linkRenderer(link, children);
  }
  return children;
};

const MemoizedConditionalWrapper = memo(ConditionalWrapper);

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
  unavailableToView,
  selectMode,
}) => {
  const defaultState = !selectMode?.active && !unavailableToView?.active;
  const collectionState = collection?.active && !responsive;
  const [isSelected, setSelected] = useState(selectMode?.checked);

  const toggleCardSelection = (value) => {
    if (selectMode?.active) {
      selectMode.checked = value;
      if (typeof selectMode?.onChange === 'function') {
        selectMode?.onChange();
      }
      setSelected(value);
    }
  };

  const onCheckCard = (evt) => {
    toggleCardSelection(evt?.target?.checked);
  };

  const onClickCard = () => {
    toggleCardSelection(!isSelected);
  };

  return (
    <BSPCard
      data-testid="mch-event-card"
      onClick={onClickCard}
      className={classNames('event-card theme-light', {
        responsive,
        fixed: !responsive,
        'default-state': defaultState,
        'unavailable-state': unavailableToView?.active,
        'select-state': selectMode?.active,
        'selected-state': isSelected,
        'collection-state': collection?.active,
      })}
    >
      <div className="image-frame">
        {collectionState && unavailableToView?.active && (
          <div className="tag-container">
            <Tag
              label={unavailableToView.label}
              onClick={unavailableToView.onClick}
              className="tag-unavailableToView"
              icon="Info"
              iconAlign="left"
            />
          </div>
        )}
        {unavailableToView?.active && collectionState && (
          <div className="overlay-eye">
            <Icon name="eye-hide" />
          </div>
        )}
        {!selectMode?.active && !collection?.active && (
          <ButtonIcon
            icon="collections-add"
            onClick={collection?.onClick}
            variant="fill"
            theme="dark"
          />
        )}
        {selectMode?.active && collectionState && (
          <Checkbox
            checked={isSelected}
            disabled={selectMode.disabled}
            onChange={onCheckCard}
            className="checkbox-select"
          />
        )}
        <MemoizedConditionalWrapper
          linkRenderer={linkRenderer}
          condition={
            eventLink && !unavailableToView?.active && !selectMode?.active
          }
          link={eventLink}
        >
          {collectionState && (
            <div
              className={classNames('overlay-blur', {
                light: unavailableToView?.active,
              })}
            />
          )}
          <div
            className={classNames('overlay-fill dark', {
              selected: selectMode?.active && isSelected,
            })}
          />
          <div
            style={{ backgroundImage: `url(${image})` }}
            className={classNames('image', { 'ar-16_10': !responsive })}
          />
        </MemoizedConditionalWrapper>
      </div>

      <BSPCard.Body>
        <MemoizedConditionalWrapper
          linkRenderer={linkRenderer}
          condition={
            eventLink && !unavailableToView?.active && !selectMode?.active
          }
          link={eventLink}
        >
          <div className="type">{type}</div>
          <h3 className="title truncate">{title}</h3>
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
            {venue?.street && (
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
            )}
            {date && (
              <div className="item">
                <div className="card-item-icon">
                  <Icon name="calendar" />
                </div>
                <div className="card-item-data">
                  <span className="text-small">{date}</span>
                </div>
              </div>
            )}
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
  unavailableToView: PropTypes.shape({
    active: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  }),
  selectMode: PropTypes.shape({
    active: PropTypes.bool.isRequired,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
  }),
};

EventCard.defaultProps = {
  responsive: false,
};

export default EventCard;
