import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import { Card as BSPCard } from 'react-bootstrap';
import classNames from 'classnames';
import { ButtonIcon } from '../../../actions/ButtonIcon';
import { Tag } from '../../../feedback/Tag';
import { Icon } from '../../../utils/Icon';
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
  collection,
}) => {
  const defaultState = !selectMode?.active && !unavailableToView?.active && !openingSoon?.active;
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
      data-testid="mch-room-card"
      className={classNames('card room-card', {
        [`theme-${theme}`]: theme,
        'default-state': defaultState,
        'opening-state': openingSoon?.active,
        'unavailable-state': unavailableToView?.active,
        'select-state': selectMode?.active,
        'selected-state': isSelected,
      })}
      onClick={onClickCard}
    >
      <div className="room-card-wrapper">
        <div className="image-frame">
          <div className="tag-container">
            {visited?.active && (
              <Tag
                label={visited.label}
                onClick={visited.onClick}
                className="tag-visited"
              />
            )}
            {openingSoon?.active && (
              <Tag
                label={openingSoon.label}
                onClick={openingSoon.onClick}
                className="tag-opening"
              />
            )}
            {unavailableToView?.active && (
              <Tag
                label={unavailableToView.label}
                onClick={unavailableToView.onClick}
                className="tag-unavailableToView"
                icon="Info"
                iconAlign="left"
              />
            )}
          </div>

          {unavailableToView?.active && (
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
              className="d-none d-lg-flex"
            />
          )}
          {selectMode?.active && (
            <Checkbox
              checked={isSelected}
              disabled={selectMode.disabled}
              onChange={onCheckCard}
              className="checkbox-select"
            />
          )}
          {curator?.active && (
            <Tag
              label={curator.label}
              className="tag-curator"
              onClick={curator.onClick}
              type="curator"
            />
          )}

          <MemoizedConditionalWrapper
            linkRenderer={linkRenderer}
            condition={defaultState}
            link={roomLink}
          >
            <div
              className={classNames('overlay-fill dark', {
                selected: selectMode?.active && isSelected,
              })}
            />
            <div
              className={classNames('overlay-blur', {
                dark: openingSoon?.active,
                light: unavailableToView?.active,
              })}
            />
            <img src={imageUrl} title={title} alt={title} />
          </MemoizedConditionalWrapper>
        </div>

        <div className="text-frame">
          {title && (
            <MemoizedConditionalWrapper
              linkRenderer={linkRenderer}
              condition={defaultState}
              link={roomLink}
            >
              <h4 className="truncate" title={title}>
                {title}
              </h4>
            </MemoizedConditionalWrapper>
          )}
          {collaboratedAccounts && (
            <MemoizedConditionalWrapper
              linkRenderer={linkRenderer}
              condition={defaultState}
              link={roomLink}
            >
              <p className="text-medium truncate" title={collaboratedAccounts}>
                {collaboratedAccounts}
              </p>
            </MemoizedConditionalWrapper>
          )}
        </div>
      </div>

      <div className="bottom-frame d-flex justify-content-between">
        <div className="bottom-frame-left">
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
          {type === 'freestanding' && ownerAccount && (
            <MemoizedConditionalWrapper
              linkRenderer={linkRenderer}
              condition={
                defaultState || (unavailableToView?.active && ownerAccountLink)
              }
              link={ownerAccountLink || roomLink}
            >
              <p className="text-medium text-link mb-0">{ownerAccount}</p>
            </MemoizedConditionalWrapper>
          )}
        </div>
        {((liveChat && !show?.active) || (show?.active && !liveChat)) && (
          <div className="bottom-frame-right d-flex align-items-center">
            {liveChat && !show?.active && (
              <Icon
                name="live-chat"
                size={16}
                color={
                  theme === 'dark'
                    ? 'var(--bs-mch-white)'
                    : 'var(--bs-mch-black)'
                }
              />
            )}
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
        )}
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
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
  }),
  liveChat: PropTypes.bool,
  collection: PropTypes.shape({
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func,
  }),
};

RoomCard.defaultProps = {
  theme: 'light',
  type: 'hybrid',
  liveChat: false,
  selected: false,
  selectMode: {
    active: false,
    checked: false,
    onChange: () => {},
    disabled: false,
  },
};

export default RoomCard;
