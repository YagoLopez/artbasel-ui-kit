import React from 'react';
import PropTypes from 'prop-types';
import { Card as BSPCard } from 'react-bootstrap';
import classNames from 'classnames';
import { ButtonIcon } from '../../../actions/ButtonIcon';
import { Tag } from '../../../feedback/Tag';
import { Icon } from '../../../utils/Icon';
import { Checkbox } from '../../../inputs/Checkbox';

const RoomCard = ({
  title,
  collaboratedAccounts,
  ownerAccount,
  theme,
  sectorsData,
  linkRenderer,
  roomLink,
  ownerAccountLink,
  type,
  imageUrl,
  liveChat,
  openingSoon,
  visited,
  curator,
  show,
  unavailableToView,
  selectMode,
  onCollectionAdd,
}) => {
  const [isRoomSelected, setRoomSelected] = React.useState(
    selectMode?.checked,
  );
  const defaultState = !openingSoon?.active && !unavailableToView?.active && !selectMode?.active;

  const ConditionalWrapper = ({ condition, link, children }) => {
    if (condition && typeof linkRenderer === 'function') {
      return linkRenderer(link, children);
    }
    return children;
  };

  const onSelectRoom = (evt) => {
    setRoomSelected(evt?.target?.checked);
    selectMode.onChange();
  };

  return (
    <BSPCard
      data-testid="mch-room-card"
      className={classNames('card room-card', {
        [`theme-${theme}`]: theme,
        'default-state': defaultState,
        'opening-state': openingSoon?.active,
        'unavailable-state': unavailableToView?.active,
        'select-state': selectMode?.active,
        'selected-state': selectMode?.active && isRoomSelected,
      })}
    >
      {/* Image Frame */}
      <div className="image-frame">
        {/* overlay unavailable */}
        {unavailableToView?.active && (
          <div className="overlay-eye">
            <Icon name="eye-hide" />
          </div>
        )}

        {/* openingSoon */}
        {unavailableToView?.active && (
          <Tag
            label={unavailableToView.label}
            onClick={unavailableToView.onClick}
            className='tag-unavailableToView'
            icon="Info"
            iconAlign="left"
          />
        )}

        {/* openingSoon */}
        {openingSoon?.active && (
          <Tag
            label={openingSoon.label}
            onClick={openingSoon.onClick}
            className='tag-opening'
          />
        )}

        {/* visited */}
        {visited?.active && (
          <Tag
            label={visited.label}
            onClick={visited.onClick}
            className='tag-visited'
          />
        )}

        {/* add to collection */}
        {!selectMode?.active && (
          <ButtonIcon
            icon="collections-add"
            onClick={onCollectionAdd}
            variant="fill"
            theme="dark"
          />
        )}

        {selectMode?.active && (
          <Checkbox
            checked={isRoomSelected}
            disabled={selectMode.disabled}
            onChange={onSelectRoom}
            className='checkbox-select'
          />
        )}

        {/* curator */}
        {curator?.active && (
          <Tag
            label={curator.label}
            className='tag-curator'
            onClick={curator.onClick}
            type="curator"
          />
        )}

        {/* image + opacity blur/fill */}
        <ConditionalWrapper condition={defaultState} link={roomLink}>
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

      {/* Texts */}
      <div className="text-frame">
        <div className="text-frame-top">
          {/* room title */}
          {title && (
            <ConditionalWrapper condition={defaultState} link={roomLink}>
              <h4>{title}</h4>
            </ConditionalWrapper>
          )}
          {/* collaborated accounts */}
          {collaboratedAccounts && (
            <ConditionalWrapper condition={defaultState} link={roomLink}>
              <p className="text-medium truncate" title={collaboratedAccounts}>
                {collaboratedAccounts}
              </p>
            </ConditionalWrapper>
          )}
        </div>
        <div className="bottom-frame d-flex justify-content-between align-items-center">
          <div className="bottom-frame-left">
            {/* sectors */}
            {type === 'hybrid'
              && sectorsData?.length > 0
              && sectorsData?.map((i) => (
                <Tag
                  key={i.id}
                  label={i.name}
                  sector={i.name.toLowerCase()}
                  type="sectors"
                  theme={theme}
                  onClick={i.onClick}
                />
              ))}
            {/* account */}
            {/* TODO - we cant link to room, if no accountlink, when unavailable in collections */}
            {type === 'freestanding' && ownerAccount && (
              <ConditionalWrapper
                condition={
                  defaultState
                  || (unavailableToView?.active && ownerAccountLink)
                }
                link={ownerAccountLink || roomLink}
              >
                <p className="text-medium text-link mb-0">{ownerAccount}</p>
              </ConditionalWrapper>
            )}
          </div>
          <div className="bottom-frame-right d-flex align-items-center">
            {/* live chat */}
            {liveChat && !show?.active && (
              <Icon
                name="live-chat"
                size="16"
                color={
                  theme === 'dark'
                    ? 'var(--bs-mch-white)'
                    : 'var(--bs-mch-black)'
                }
              />
            )}
            {/* show name */}
            {show?.active && !liveChat && (
              <Tag
                type="label"
                variant="secondary"
                label={show.label}
                onClick={show.onClick}
                theme={theme}
              />
            )}
          </div>
        </div>
      </div>
    </BSPCard>
  );
};

RoomCard.propTypes = {
  title: PropTypes.string.isRequired,
  linkRenderer: PropTypes.func.isRequired,
  imageUrl: PropTypes.string.isRequired,
  collaboratedAccounts: PropTypes.string,
  ownerAccount: PropTypes.string,
  roomLink: PropTypes.string,
  ownerAccountLink: PropTypes.string,
  sectorsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      onClick: PropTypes.func,
    }),
  ),
  theme: PropTypes.oneOf(['light', 'dark']),
  type: PropTypes.oneOf(['freestanding', 'hybrid']),
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
  curator: PropTypes.shape({
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
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
  }),
  liveChat: PropTypes.bool,
  onCollectionAdd: PropTypes.func,
};

RoomCard.defaultProps = {
  theme: 'light',
  type: 'hybrid',
  liveChat: false,
  onCollectionAdd: () => {},
  selected: false,
};

export default RoomCard;