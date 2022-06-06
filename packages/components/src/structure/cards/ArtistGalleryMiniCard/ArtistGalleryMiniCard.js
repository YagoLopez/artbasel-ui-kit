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
  unavailable, unavailableLabel
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
        'opacity-100': isSelected,
        'cursor-pointer': !unavailable,
      })}
      onClick={onClickCard}
    >
      {
        ((!selectMode.active || isSelected) && !unavailable) && (
          <>
            <MemoizedConditionalWrapper
              linkRenderer={linkRenderer}
              condition={collectionLink && !selectMode.active && !unavailable}
              link={collectionLink}
            >
              <div
                className={classNames('w-100 h-100 position-absolute d-flex justify-content-end p-5', className, {
                  'card-wrapper': !selectMode.active,
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
      <header className={classNames('d-flex justify-content-between align-items-center px-5', {
        headerArtist: variant === 'artist',
        headerGallery: variant === 'gallery',
      })}>
        <div>
          <MemoizedConditionalWrapper
            linkRenderer={linkRenderer}
            condition={collectionLink && !selectMode.active && !unavailable}
            link={collectionLink}
          >
            <h5 title={title} className={classNames('me-10 position-relative', {
              'mini-card-title opacity-100': variant === 'gallery',
              'mini-card-title opacity-50': variant === 'gallery' && selectMode.active && !isSelected,
              'text-white mini-card-title-artist': variant === 'artist',
              'mini-card-title-artist opacity-title': !selectMode.active && !unavailable,
              'mini-card-title-artist opacity-50': variant === 'artist' && selectMode.active && !isSelected,
              'mini-card-title-artist opacity-100': variant === 'artist' && isSelected,
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
      <main className='position-relative'>
        <div
          className={classNames('position-absolute w-100 h-100', {
            'bg-selected-card': selectMode.active,
          })}
          onClick={onClickCard}
        />
        <div className={classNames('w-100 h-100 position-absolute', {
          'blur-image': unavailable,
        })}/>
        {
          image
            ? <img src={image} alt="mini card image" className='w-100' />
            : (
              <div className='w-100 d-flex justify-content-center align-items-center title-without-image'>
                <h5>{title}</h5>
              </div>
            )
        }
        {
          unavailable && (
            <>
              <div className={classNames('info-text position-absolute d-flex', {
                'opacity-75': !isSelected && selectMode.active,
                'opacity-100': isSelected && selectMode.active,
              })}>
                <Icon
                  name="Info"
                  size={18}
                />
                <p className='text-label-small my-0'>{unavailableLabel}</p>
              </div>
              <div className='position-absolute h-100 w-100 top-0 unavailable-image d-flex justify-content-center align-items-center p-5'>
                <div className={classNames('eye-hide-box p-4 rounded-circle', {
                  'opacity-75': !isSelected && selectMode.active,
                  'opacity-100': isSelected && selectMode.active,
                })}>
                  <Icon
                    name="eye-hide"
                  />
                </div>
              </div>
            </>
          )
        }
      </main>
      <footer className='position-absolute bottom-0 start-0 ms-5 my-5 tag-z-position'>
        {
          (variant === 'gallery' && tagCities !== null && (tagCities instanceof Array)) && (
            tagCities.map((city, i) => (
              <Tag
                key={i}
                label={city}
                onClick={onClickTag}
                className={classNames('me-3', {
                  'opacity-75': !isSelected && selectMode.active,
                  'opacity-100': isSelected && selectMode.active,
                })}
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
  unavailableLabel: PropTypes.string,
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
