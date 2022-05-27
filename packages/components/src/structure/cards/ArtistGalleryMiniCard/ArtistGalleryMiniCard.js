import React, { memo, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ButtonIcon from '../../../actions/ButtonIcon/ButtonIcon';
import Checkbox from '../../../inputs/Checkbox/Checkbox';
import Tag from '../../../feedback/Tag/Tag';

const ConditionalWrapper = ({
  linkRenderer, condition, link, children,
}) => {
  if (condition && typeof linkRenderer === 'function') {
    return linkRenderer(link, children);
  }
  return children;
};

const MemoizedConditionalWrapper = memo(ConditionalWrapper);

const ArtistGalleryMiniCard = ({
  selectMode, title, variant, tagCities,
  className, onClickTag, image,
  collection, linkRenderer, collectionLink,
}) => {
  if (!title || !image) return null;

  const [isSelected, setSelected] = useState(selectMode?.checked);

  const onCheckCard = (evt) => {
    setSelected(evt?.target?.checked);
  };

  const onClickCard = () => {
    if (typeof selectMode?.onChange === 'function') {
      selectMode?.onChange();
    }

    setSelected(!isSelected);
  };

  return (
    <section
      data-testid="mch-artist-gallery-card-mini"
      className={classNames('artist-mini-card position-relative', {
        'opacity-75': !isSelected && selectMode.active,
        'opacity-100': isSelected,
      })}
      onClick={onClickCard}
    >
      {
        (!selectMode.active || isSelected) && (
          <>
            <MemoizedConditionalWrapper
              linkRenderer={linkRenderer}
              condition={collectionLink && !selectMode.active}
              link={collectionLink}
            >
              <div
                className={classNames('w-100 h-100 position-absolute d-flex justify-content-end p-5', className, {
                  'card-wrapper': !selectMode.active,
                  'card-selected-wrapper': isSelected,
                })}
              />
            </MemoizedConditionalWrapper>
            {
              (!selectMode.active && collection.active)
                && (
                  <div className='show-icon position-absolute'>
                    <ButtonIcon icon="collections-add" theme={variant === 'artist' ? 'dark' : 'light'} variant="outline" onClick={collection.onClick} />
                  </div>
                )
            }
          </>
        )
      }
      <header className={classNames('d-flex justify-content-between px-5 py-7', {
        headerArtist: variant === 'artist',
        headerGallery: variant === 'gallery',
      })}>
        <div>
          <MemoizedConditionalWrapper
            linkRenderer={linkRenderer}
            condition={collectionLink && !selectMode.active}
            link={collectionLink}
          >
            <h5 title={title} className={classNames('me-10 position-relative', {
              'text-white mini-card-title-artist': variant === 'artist',
              'mini-card-title opacity-100': variant === 'gallery',
              'mini-card-title-artist': !selectMode.active,
            })}>{title}</h5>
          </MemoizedConditionalWrapper>
        </div>
        {
          selectMode.active && (
            <Checkbox
              onChange={onCheckCard}
              checked={isSelected}
              theme={variant === 'artist' ? 'dark' : 'light'}
              className='position-relative'
            />
          )
        }
      </header>
      <main>
        <img src={image} alt="mini card image" className="w-100"/>
      </main>
      <footer className='position-absolute bottom-0 start-0 ms-5 my-5'>
        {
          (variant === 'gallery' && tagCities !== null && (tagCities instanceof Array)) && (
            tagCities.map((city, i) => (
              <Tag
                key={i}
                label={city}
                onClick={onClickTag}
                className='me-3'
              />
            ))
          )
        }
      </footer>
    </section>
  );
};

ArtistGalleryMiniCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['artist', 'gallery']),
  className: PropTypes.string,
  selectMode: PropTypes.shape({
    active: PropTypes.bool,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
  }),
  collection: PropTypes.shape({
    active: PropTypes.bool,
    onClick: PropTypes.func,
  }),
  tagCities: PropTypes.arrayOf(PropTypes.string),
  onClickTag: PropTypes.func,
  linkRenderer: PropTypes.func,
  collectionLink: PropTypes.string,
};

ArtistGalleryMiniCard.defaultProps = {
  variant: 'artist',
  onClickTag: () => { },
  selectMode: {
    active: false,
    checked: false,
    onChange: () => { },
  },
  collection: {
    active: true,
    onClick: () => { },
  },
};

export default ArtistGalleryMiniCard;
