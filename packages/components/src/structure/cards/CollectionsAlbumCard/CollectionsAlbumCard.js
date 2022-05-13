import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Icon from '../../../utils/Icon/Icon';
import ContextualButton from '../../../actions/ContextualButton/ContextualButton';
import Item from '../../../actions/ContextualButton/Item';
import { truncateText } from '../../../helpers/truncateText';

const ConditionalWrapper = ({
  linkRenderer, condition, link, children,
}) => {
  if (condition && typeof linkRenderer === 'function') {
    return linkRenderer(link, children);
  }
  return children;
};

const MemoizedConditionalWrapper = memo(ConditionalWrapper);

const CollectionsAlbumCard = ({
  variant, images, collectionName, numberOfFollowers,
  author, editContextMenu, deleteContextMenu, viewpoint,
  noCollectionText, followerText, byText, newCollectionText, itemsText,
  hideContextMenu, linkRenderer, collectionLink, numberOfItems, unfollowContextMenu,
}) => {
  const truncated = truncateText(collectionName, 30);

  return variant === 'new' ? (
    <div data-testid="mch-collections-album-card" className="collection-album-card">
      <div className='new rounded-1 d-flex justify-content-center align-items-center'>
        <div className='text-center position-relative'>
          <Icon name='add' />
          <p className='text-label-xlarge mt-2 px-12 m-0'>{newCollectionText}</p>
          <div className='d-flex justify-content-center'>
            {noCollectionText && <p className='text-small position-absolute pt-8'>{noCollectionText}</p>}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <MemoizedConditionalWrapper
      linkRenderer={linkRenderer}
      condition={collectionLink && variant === 'album'}
      link={collectionLink}
    >
      <div className='collection-album-card text-center position-relative'>
        <div className='album'>
          <div className='position-relative'>
            <div className='w-100 h-100 box-effect position-absolute' />
            <div className='principal-image' style={{ backgroundImage: `url(${images[0]})` }} />
            <div className='d-flex'>
              {images[1] ? <img src={images[1]} className='secondary-image' /> : <div className='empty-box' />}
              {images[2] ? <img src={images[2]} className='secondary-image' /> : <div className='empty-box' />}
              {images[3] ? <img src={images[3]} className='secondary-image' /> : <div className='empty-box' />}
            </div>
          </div>
          <div className='d-flex justify-content-between pt-5'>
            <div className='text-start'>
              {truncated.state ? <h5>{truncated.text}...</h5> : <h5>{collectionName}</h5>}
              <p className='text-medium'>{numberOfItems} {itemsText} {viewpoint === 'follower' && `• ${byText} ${author}`} {(viewpoint === 'creator' && numberOfFollowers !== 0) && `• ${numberOfFollowers} ${followerText}`}</p>
            </div>
            {
              !hideContextMenu && (
                <ContextualButton
                  align='end'
                >
                  {
                    viewpoint === 'creator' && (
                      <>
                        <Item
                          icon="edit"
                          onClick={editContextMenu?.onClick}
                        >
                          {editContextMenu?.label}
                        </Item>
                        <Item
                          icon="delete"
                          onClick={deleteContextMenu?.onClick}
                        >
                          {deleteContextMenu?.label}
                        </Item>
                      </>
                    )
                  }
                  {
                    viewpoint === 'follower' && (
                      <Item
                        icon="close"
                        onClick={unfollowContextMenu?.onClick}
                      >
                        {unfollowContextMenu?.label}
                      </Item>
                    )}
                </ContextualButton>
              )
            }
          </div>
        </div>
      </div>
    </MemoizedConditionalWrapper>
  );
};

CollectionsAlbumCard.propTypes = {
  variant: PropTypes.oneOf(['new', 'album']),
  viewpoint: PropTypes.oneOf(['creator', 'follower']),
  images: PropTypes.array,
  collectionName: PropTypes.string,
  author: PropTypes.string,
  numberOfFollowers: PropTypes.number,
  editContextMenu: PropTypes.shape({
    label: PropTypes.string,
    onClick: PropTypes.func,
  }),
  deleteContextMenu: PropTypes.shape({
    label: PropTypes.string,
    onClick: PropTypes.func,
  }),
  onDelete: PropTypes.func,
  noCollectionText: PropTypes.string,
  followerText: PropTypes.string,
  byText: PropTypes.string,
  itemsText: PropTypes.string,
  newCollectionText: PropTypes.string,
  hideContextMenu: PropTypes.bool,
  linkRenderer: PropTypes.func,
  collectionLink: PropTypes.string,
  numberOfItems: PropTypes.number,
  unfollowContextMenu: PropTypes.shape({
    label: PropTypes.string,
    onClick: PropTypes.func,
  }),
};

CollectionsAlbumCard.defaultProps = {
  variant: 'new',
  viewpoint: 'creator',
  followerText: 'followers',
  byText: 'by',
  newCollectionText: 'Create new collection',
  itemsText: 'items',
  numberOfItems: 0,
};

export default CollectionsAlbumCard;
