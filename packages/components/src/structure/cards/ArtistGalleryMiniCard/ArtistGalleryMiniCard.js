import React, { memo, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ButtonIcon from '../../../actions/ButtonIcon/ButtonIcon';
import Checkbox from '../../../inputs/Checkbox/Checkbox';
import Tag from '../../../feedback/Tag/Tag';
import { Icon } from '../../../utils/Icon';

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
  unavailable,
}) => {
  if (!title) return null;

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
              'mini-card-title-artist opacity-title': !selectMode.active,
              'mini-card-title-artist opacity-100': selectMode.active,
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
      <main className={classNames({
        'position-relative': unavailable,
      })}>
        {
          image
            ? <img src={image} alt="mini card image" className={classNames('w-100', {
              'blur-image': unavailable,
            })} />
            : (
              <div className='w-100 d-flex justify-content-center align-items-center title-without-image'>
                <h5>{title}</h5>
              </div>
            )
        }
        {
          unavailable && (
            <>
              <div className='info-text position-absolute d-flex'>
                <Icon
                  name="Info"
                  size={18}
                />
                <p className='text-label-small my-0'>Unavailable to view</p>
              </div>
              <div className='position-absolute h-100 w-100 top-0 unavailable-image d-flex justify-content-center align-items-center p-5'>
                <div className='eye-hide-box p-4 rounded-circle'>
                  <Icon
                    name="eye-hide"
                  />
                </div>
              </div>
            </>
          )
        }
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
  unavailable: PropTypes.bool,
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
  unavailable: false,
};

export default ArtistGalleryMiniCard;
