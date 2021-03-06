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

const stripTags = (str) => {
  return str ? str.replace(/(<([^>]+)>)/gi, '').replace('&nbsp;', ' ') : '';
};

const ContentCard = ({
  responsive,
  image,
  videoPlayer,
  videoIcon,
  title,
  subtitle,
  description,
  cta,
  reverse,
  urlVideo,
  isHtml,
}) => {
  const [playing, setPlaying] = useState(true);
  const hasOneCta = cta?.length === 1;
  const showImageContainer = (videoPlayer && urlVideo) || image;
  const firstCtaProps = hasOneCta
    ? { linkRenderer: cta[0].linkRenderer, contentLink: cta[0].contentLink }
    : { linkRenderer: () => {}, contentLink: null };

  const togglePlayer = () => {
    if (videoPlayer) {
      setPlaying(false);
    }
  };

  return (
    <BSPCard
      data-testid="mch-content-card"
      className={classNames('content-card', {
        responsive,
        fixed: !responsive,
        reverse: responsive ? reverse : false,
      })}
    >
      {showImageContainer && (
        <div className="image-frame" onClick={togglePlayer}>
          <MemoizedConditionalWrapper
            condition={hasOneCta}
            linkRenderer={firstCtaProps.linkRenderer}
            link={firstCtaProps.contentLink}
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
          {videoPlayer && playing && (
            <>
              <div className="overlay-video" role="button">
                <Icon name="play" height={40} width={40} color="white" />
              </div>
              <div className="overlay-fill" />
            </>
          )}
          {videoPlayer && (
            <VideoPlayer
              url={urlVideo}
              className="react-player"
              playing={!playing}
              controls={!playing}
            />
          )}
        </div>
      )}

      <BSPCard.Body>
        <MemoizedConditionalWrapper
          condition={hasOneCta}
          linkRenderer={firstCtaProps.linkRenderer}
          link={firstCtaProps.contentLink}
        >
          <BSPCard.Text as="h3" className="card-title" title={title}>
            {title}
          </BSPCard.Text>
          {subtitle && (
            <BSPCard.Text className="card-subtitle">{subtitle}</BSPCard.Text>
          )}
          {!isHtml && (
            <BSPCard.Text
              className={'card-description truncate'}
              title={stripTags(description)}
              as="div"
            >
              {description}
            </BSPCard.Text>
          )}
        </MemoizedConditionalWrapper>
        {isHtml && (
          <BSPCard.Text
            dangerouslySetInnerHTML={{ __html: description }}
            title={stripTags(description)}
            className={'card-description truncate is-html'}
            as="div"
          />
        )}

        {cta?.map(
          (i, index) => i?.contentLink && (
              <div className={classNames('card-cta', {
                'mt-7': index === 0,
              })} key={i.id}>
                <MemoizedConditionalWrapper
                  linkRenderer={i?.linkRenderer}
                  condition={i?.contentLink}
                  link={i?.contentLink}
                >
                  <TextLink href={null} icon="chevron-right" iconAlign="right">
                    {i?.label}
                  </TextLink>
                </MemoizedConditionalWrapper>
              </div>
          ),
        )}
      </BSPCard.Body>
    </BSPCard>
  );
};

ContentCard.propTypes = {
  responsive: PropTypes.bool,
  cta: PropTypes.arrayOf(
    PropTypes.shape({
      id: [PropTypes.oneOfType([PropTypes.string, PropTypes.number])]
        .isRequired,
      label: [PropTypes.string].isRequired,
      contentLink: [PropTypes.string].isRequired,
      linkRenderer: [PropTypes.func].isRequired,
    }),
  ),
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  videoPlayer: PropTypes.bool,
  videoIcon: PropTypes.bool,
  urlVideo: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
  isHtml: PropTypes.bool,
};

ContentCard.defaultProps = {
  responsive: false,
  subtitle: null,
  videoPlayer: false,
  reverse: false,
  isHtml: false,
  cta: [],
};

export default ContentCard;
