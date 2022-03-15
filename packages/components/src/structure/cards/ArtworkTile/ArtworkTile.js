import React, { useState, memo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { Button } from '../../../actions/Button';
import { ButtonIcon } from '../../../actions/ButtonIcon';
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

const ArtworkTile = ({
  imageType,
  pageType,
  collection,
  theme,
  artworkTitle,
  artistName,
  year,
  price,
  status,
  galleryName,
  inquiry,
  imageUrl,
  showsData,
  artworkLink,
  artistLink,
  galleryLink,
  linkRenderer,
  viewAtFair,
  onlineExclusive,
  curator,
  show,
  selectMode,
}) => {
  const [isSelected, setSelected] = useState(selectMode?.checked);

  const toggleCardSelection = (value) => {
    selectMode.checked = value;
    if (typeof selectMode?.onChange === 'function') {
      selectMode?.onChange();
    }
    setSelected(value);
  };

  const onCheckCard = (evt) => {
    toggleCardSelection(evt?.target?.checked);
  };

  const onClickCard = () => {
    toggleCardSelection(!isSelected);
  };

  return (
    <Card
      data-testid="mch-artwork-card"
      className={classNames('card artwork-card', {
        [`theme-${theme}`]: theme,
        [`layout-${imageType}`]: imageType,
        [`page-${pageType}`]: pageType,
        'inquiry-state': inquiry?.active,
        'default-state': !selectMode?.active,
        'select-state': selectMode?.active,
        'selected-state': isSelected,
      })}
      onClick={onClickCard}
    >
      <div className="image-container">
        {!selectMode?.active && !collection?.active && (
          <ButtonIcon
            icon="collections-add"
            onClick={collection?.onClick}
            variant="fill"
            theme="dark"
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
        {onlineExclusive?.active && (
          <Tag
            label={onlineExclusive.label}
            onClick={onlineExclusive.onClick}
            className="tag-exclusive"
          />
        )}
        {viewAtFair?.active && (
          <Tag
            label={viewAtFair.label}
            onClick={viewAtFair.onClick}
            className="tag-viewfair"
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
        {inquiry?.active && (
          <Button
            iconAlign="left"
            variant="primary"
            theme="dark"
            onClick={inquiry?.onClick}
            className="btn-inquiry"
          >
            {inquiry?.label}
          </Button>
        )}
        <MemoizedConditionalWrapper
          linkRenderer={linkRenderer}
          condition={!selectMode?.active}
          link={artworkLink}
        >
          <div
            className={classNames('overlay-fill dark', {
              selected: selectMode?.active && isSelected,
            })}
          />
        </MemoizedConditionalWrapper>
        <div className="image-wrapper">
          <div
            className="image-frame"
            style={
              imageType === 'square'
                ? { backgroundImage: `url(${imageUrl})` }
                : {}
            }
          >
            {imageType !== 'square' && (
              <img src={imageUrl} title={artistName} alt={artistName} />
            )}
          </div>
        </div>
      </div>

      <div className="text-frame">
        <div className="text-frame-top">
          {artistName && (
            <MemoizedConditionalWrapper
              linkRenderer={linkRenderer}
              condition={artworkLink}
              link={artistLink || artworkLink}
            >
              <h5 className="truncate" title={artistName}>
                {artistName}
              </h5>
            </MemoizedConditionalWrapper>
          )}
          {artworkTitle && (
            <MemoizedConditionalWrapper
              linkRenderer={linkRenderer}
              condition={artworkTitle}
              link={artworkLink}
            >
              <p className="text-medium truncate" title={artworkTitle}>
                {`${artworkTitle}${year ? `, ${year}` : ''}`}
              </p>
            </MemoizedConditionalWrapper>
          )}
        </div>
        <div className="text-frame-middle">
          {galleryName && ['listing', 'catalogue'].includes(pageType) && (
            <MemoizedConditionalWrapper
              linkRenderer={linkRenderer}
              condition={galleryName}
              link={galleryLink || artworkLink}
            >
              <p className="text-medium text-link mb-0">{galleryName}</p>
            </MemoizedConditionalWrapper>
          )}
          {price && (
            <MemoizedConditionalWrapper
              linkRenderer={linkRenderer}
              condition={price}
              link={artworkLink}
            >
              <p className="text-medium text-link mb-0 text-uppercase">
                {`${price} ${status ? `| ${status}` : ''}`}
              </p>
            </MemoizedConditionalWrapper>
          )}
        </div>
        {((show?.active && collection?.active)
          || ['catalogue'].includes(pageType)) && (
          <div className="text-frame-bottom">
            <div className="shows">
              {show?.active && collection?.active && (
                <Tag
                  type="label"
                  variant="secondary"
                  label={show.label}
                  onClick={show.onClick}
                  theme={theme}
                />
              )}
              {['catalogue'].includes(pageType)
                && showsData?.length > 0
                && showsData?.map((i) => (
                  <Tag
                    key={i.id}
                    label={i.name}
                    type="label"
                    variant="secondary"
                    theme={theme}
                    onClick={i.onClick}
                  />
                ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

ArtworkTile.propTypes = {
  artworkTitle: PropTypes.string.isRequired,
  artistName: PropTypes.string,
  year: PropTypes.string,
  price: PropTypes.string,
  status: PropTypes.string,
  galleryName: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  showsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      onClick: PropTypes.func,
    }),
  ),
  imageType: PropTypes.oneOf(['square', 'contained', 'masonry']),
  pageType: PropTypes.oneOf(['room', 'listing', 'catalogue']),
  collection: PropTypes.shape({
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func,
  }),
  theme: PropTypes.oneOf(['light', 'dark']),
  selectMode: PropTypes.shape({
    active: PropTypes.bool.isRequired,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
  }),
  inquiry: PropTypes.shape({
    active: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  }),
  viewAtFair: PropTypes.shape({
    active: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  }),
  onlineExclusive: PropTypes.shape({
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
  artworkLink: PropTypes.string.isRequired,
  artistLink: PropTypes.string,
  galleryLink: PropTypes.string,
  linkRenderer: PropTypes.func.isRequired,
};

ArtworkTile.defaultProps = {
  imageType: 'square',
  pageType: 'room',
  galleryName: '',
  theme: 'light',
  selected: false,
  selectMode: {
    active: false,
    checked: false,
    onChange: () => {},
    disabled: false,
  },
};

export default ArtworkTile;
