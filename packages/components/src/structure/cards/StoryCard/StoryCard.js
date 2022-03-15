import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Card as BSPCard } from 'react-bootstrap';
import classNames from 'classnames';
import { Button, TextLink } from '../../../actions';
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

const StoryCard = ({
  responsive,
  linkRenderer,
  storyLink,
  subtitle,
  image,
  video,
  title,
  date,
  description,
  button,
  equalHeight,
}) => {
  return (
    <BSPCard
      data-testid="mch-story-card"
      className={classNames('story-card', {
        responsive,
        fixed: !responsive,
        'equal-height': equalHeight,
      })}
    >
      <div className="image-frame">
        <MemoizedConditionalWrapper
          linkRenderer={linkRenderer}
          condition={storyLink}
          link={storyLink}
        >
          {video && (
            <div className="overlay-video">
              <Icon name="play" height={33} width={33} color="white" />
            </div>
          )}
          <div className="overlay-fill" />
          <div
            style={{ backgroundImage: `url(${image})` }}
            className={classNames('image', { 'ar-16_10': !responsive })}
          />
        </MemoizedConditionalWrapper>
      </div>

      <BSPCard.Body>
        <MemoizedConditionalWrapper
          linkRenderer={linkRenderer}
          condition={storyLink}
          link={storyLink}
        >
          <BSPCard.Text className="card-subtitle">{subtitle}</BSPCard.Text>
          <BSPCard.Text className="card-title truncate" title={title}>
            {title}
          </BSPCard.Text>
          <BSPCard.Text className="card-date">{date}</BSPCard.Text>
          <BSPCard.Text
            className="card-description truncate"
            title={description}
          >
            {description}
          </BSPCard.Text>
        </MemoizedConditionalWrapper>

        {button?.type === 'primary' && button?.label && (
          <MemoizedConditionalWrapper
            linkRenderer={linkRenderer}
            condition={storyLink}
            link={storyLink}
          >
            <div className="card-cta">
              <Button primary>{button?.label}</Button>
            </div>
          </MemoizedConditionalWrapper>
        )}

        {button?.type === 'textlink' && (
          <MemoizedConditionalWrapper
            linkRenderer={linkRenderer}
            condition={storyLink}
            link={storyLink}
          >
            <div className="card-cta">
              {/* TODO: remove href={null} when <TextLink /> deprecates it */}
              <TextLink href={null} icon="chevron-right" iconAlign="right">
                {button?.label}
              </TextLink>
            </div>
          </MemoizedConditionalWrapper>
        )}
      </BSPCard.Body>
    </BSPCard>
  );
};

StoryCard.propTypes = {
  responsive: PropTypes.bool,
  linkRenderer: PropTypes.func.isRequired,
  storyLink: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  video: PropTypes.bool,
  date: PropTypes.string,
  description: PropTypes.string.isRequired,
  button: PropTypes.shape({
    type: PropTypes.oneOf(['primary', 'textlink']).isRequired,
    label: PropTypes.string.isRequired,
  }),
  equalHeight: PropTypes.bool,
};

StoryCard.defaultProps = {
  responsive: false,
  button: null,
  date: null,
  video: false,
  equalHeight: false,
};

export default StoryCard;
