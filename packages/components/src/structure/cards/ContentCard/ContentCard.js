import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { Card as BSPCard } from 'react-bootstrap';
import classNames from 'classnames';
import { TextLink } from '../../../actions';
import { Icon } from '../../../utils/Icon';
import VideoPlayer from '../../mediaviewer/VideoPlayer/VideoPlayer';

const ConditionalWrapper = ({
  linkRenderer, condition, link, children,
}) => {
  if (condition && typeof linkRenderer === 'function') {
    return linkRenderer(link, children);
  }
  return children;
};

const MemoizedConditionalWrapper = memo(ConditionalWrapper);

const ContentCard = ({
  responsive,
  linkRenderer,
  contentLink,
  image,
  videoPlayer,
  videoIcon,
  title,
  subtitle,
  description,
  button,
  reverse,
  urlVideo,
}) => {
  const [playing, setPlaying] = useState(true);

  return (
    <BSPCard
      data-testid="mch-content-card"
      className={classNames('content-card', {
        responsive,
        fixed: !responsive,
        reverse: responsive ? reverse : false,
      })}
    >
      <div className="image-frame" onClick={() => setPlaying(false)}>
        <MemoizedConditionalWrapper
          linkRenderer={linkRenderer}
          condition={contentLink}
          link={contentLink}
        >
          {videoIcon && (
            <div className="overlay-video">
              <Icon name="play" height={40} width={40} color="white" />
            </div>
          )}
          {!videoPlayer && (
            <div
              style={{ backgroundImage: `url(${image})` }}
              className={classNames('image', { 'ar-16_9': !responsive })}
            />
          )}
        </MemoizedConditionalWrapper>
        {(videoPlayer && playing) && (
          <>
            <div className="overlay-video" role="button">
              <Icon name="play" height={40} width={40} color="white" />
            </div>
            <div className="overlay-fill" />
          </>
        )}
        {
          videoPlayer
            && <VideoPlayer url={urlVideo} className="react-player" playing={!playing} controls={!playing} setPlaying={setPlaying} />
        }
      </div>

      <MemoizedConditionalWrapper
        linkRenderer={linkRenderer}
        condition={contentLink}
        link={contentLink}
      >
        <BSPCard.Body>
          <BSPCard.Text className="card-title" title={title}>
            {title}
          </BSPCard.Text>
          {subtitle && (
            <BSPCard.Text className="card-subtitle">{subtitle}</BSPCard.Text>
          )}
          <BSPCard.Text
            className="card-description"
            title={description}
            dangerouslySetInnerHTML={{ __html: description }}
          />
          {button?.type === 'textlink' && contentLink && (
            <div className="card-cta">
              {/* TODO: remove href={null} when <TextLink /> deprecates it */}
              <TextLink href={null} icon="chevron-right" iconAlign="right">
                {button?.label}
              </TextLink>
            </div>
          )}
        </BSPCard.Body>
      </MemoizedConditionalWrapper>
    </BSPCard>
  );
};

ContentCard.propTypes = {
  responsive: PropTypes.bool,
  linkRenderer: PropTypes.func,
  contentLink: PropTypes.string,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  videoPlayer: PropTypes.bool,
  videoIcon: PropTypes.bool,
  urlVideo: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string.isRequired,
  button: PropTypes.shape({
    type: PropTypes.oneOf(['primary', 'textlink']).isRequired,
    label: PropTypes.string.isRequired,
  }),
  reverse: PropTypes.bool,
};

ContentCard.defaultProps = {
  responsive: false,
  button: null,
  subtitle: null,
  videoPlayer: false,
  reverse: false,
};

export default ContentCard;
