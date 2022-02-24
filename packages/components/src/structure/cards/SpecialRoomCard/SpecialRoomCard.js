import React from 'react';
import PropTypes from 'prop-types';
import { Card as BSPCard } from 'react-bootstrap';
import classNames from 'classnames';
import { ButtonIcon } from '../../../actions/ButtonIcon';
import { Tag } from '../../../feedback/Tag';
import { Icon } from '../../../utils/Icon';
import { Checkbox } from '../../../inputs/Checkbox';

const SpecialRoomCard = ({
  title,
  artistName,
  sectorsData,
  linkRenderer,
  roomLink,
  imageUrl,
  openingSoon,
  visited,
  show,
  unavailableToView,
  selectMode,
  onCollectionAdd,
}) => {
  const [isRoomSelected, setRoomSelected] = React.useState(selectMode?.checked);
  const defaultState = !openingSoon?.active && !unavailableToView?.active && !selectMode?.active;

  const ConditionalWrapper = ({ condition, link, children }) => {
    if (condition && typeof linkRenderer === 'function') {
      return linkRenderer(link, children);
    }
    return children;
  };

  const onSelectRoom = (evt) => {
    setRoomSelected(evt?.target?.checked);
    if (typeof selectMode.onChange === 'function') {
      selectMode.onChange();
    }
  };

  return (
    <BSPCard
      data-testid="mch-specialroom-card"
      className={classNames('card specialroom-card', {
        'default-state': defaultState,
        'opening-state': openingSoon?.active,
        'unavailable-state': unavailableToView?.active,
        'select-state': selectMode?.active,
        'selected-state': selectMode?.active && isRoomSelected,
      })}
    >
      {/* Image Frame */}
      <div className="image-frame">
        {/* tag / unavailable to view */}
        {unavailableToView?.active && (
          <Tag
            label={unavailableToView.label}
            onClick={unavailableToView.onClick}
            className="tag-unavailableToView"
            icon="Info"
            iconAlign="left"
          />
        )}

        {/* tag / openingSoon */}
        {openingSoon?.active && (
          <Tag
            label={openingSoon.label}
            onClick={openingSoon.onClick}
            className="tag-opening"
          />
        )}

        {/* tag / visited */}
        {visited?.active && (
          <Tag
            label={visited.label}
            onClick={visited.onClick}
            className="tag-visited"
          />
        )}

        {/* tag / sector */}
        {sectorsData?.length > 0 && (
          <div className="sectors">
            {sectorsData?.map((i) => (
              <Tag
                key={i.id}
                label={i.name}
                sector={i.name.toLowerCase()}
                type="sectors"
                theme="dark"
                onClick={i.onClick}
              />
            ))}
          </div>
        )}

        {/* tag / show name */}
        {show?.active && (
          <div className="showname">
            <Tag
              type="label"
              variant="secondary"
              label={show.label}
              onClick={show.onClick}
            />
          </div>
        )}

        {/* icon / add to collection */}
        {!selectMode?.active && (
          <ButtonIcon
            icon="collections-add"
            onClick={onCollectionAdd}
            variant="fill"
            theme="dark"
          />
        )}

        {/* Texts (room title and artist name) */}
        <div className="text-frame">
          {title && (
            <ConditionalWrapper condition={defaultState} link={roomLink}>
              <h3>{title}</h3>
            </ConditionalWrapper>
          )}
          {artistName && (
            <ConditionalWrapper condition={defaultState} link={roomLink}>
              <h5 className="truncate" title={artistName}>
                {artistName}
              </h5>
            </ConditionalWrapper>
          )}
        </div>

        {/* select mode */}
        {selectMode?.active && (
          <Checkbox
            checked={isRoomSelected}
            disabled={selectMode.disabled}
            onChange={onSelectRoom}
            className="checkbox-select"
          />
        )}

        {/* overlay / unavailable */}
        {unavailableToView?.active && (
          <div className="overlay-eye">
            <Icon name="eye-hide" />
          </div>
        )}

        {/* overlay / blur, fill, gradient */}
        <ConditionalWrapper condition={defaultState} link={roomLink}>
          <div className="overlay-gradient" />
          <div className="overlay-fill dark" />
          <div
            className={classNames('overlay-blur', {
              dark: openingSoon?.active,
              light: unavailableToView?.active,
            })}
          />
          <img src={imageUrl} title={title} alt={title} />
        </ConditionalWrapper>
      </div>
    </BSPCard>
  );
};

SpecialRoomCard.propTypes = {
  title: PropTypes.string.isRequired,
  linkRenderer: PropTypes.func.isRequired,
  imageUrl: PropTypes.string.isRequired,
  artistName: PropTypes.string,
  roomLink: PropTypes.string,
  sectorsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      onClick: PropTypes.func,
    }),
  ),
  openingSoon: PropTypes.shape({
    active: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  }),
  visited: PropTypes.shape({
    active: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  }),
  show: PropTypes.shape({
    active: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  }),
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
  onCollectionAdd: PropTypes.func,
};

SpecialRoomCard.defaultProps = {
  onCollectionAdd: () => {},
  selected: false,
};

export default SpecialRoomCard;
