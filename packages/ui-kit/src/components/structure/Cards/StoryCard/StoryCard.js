import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Card as BSPCard } from 'react-bootstrap';
import classNames from 'classnames';
import { Button } from '../../../actions/Button';
import { TextLink } from '../../../actions/TextLink';
import { Icon } from '../../../Icon';

const truncated = {
  title: false,
  description: false,
};

const truncateValues = {
  title: 60,
  description: 250,
};

const classHeight = {
  s: '234.37px',
  m: '404px',
  l: '624px',
};

const truncateText = (text, textType) => {
  truncated[textType] = text?.length > truncateValues[textType];
  return truncated[textType] ? text.substring(0, truncateValues[textType] - 3) : text;
};

const StoryCard = ({
  cssInternalPrefix,
  cssStyles,
  size,
  author,
  label,
  image,
  video,
  title,
  date,
  description,
  button,
}) => {
  const [thumbnailHeight, setthumbnailHeight] = useState(classHeight[size]);

  useEffect(() => {
    setthumbnailHeight(classHeight[size]);
  }, [size]);

  const buttonComponent = {
    textlink: button
      ? <TextLink href={button?.link} icon="linkarrow" iconAlign="right">{button?.text}</TextLink>
      : null,
    primary: button
      ? <Button primary href={button?.link}>{button?.text}</Button>
      : null,
  };

  const renderButton = () => (buttonComponent[button.type]);

  return (
    <BSPCard
      data-testid="mch-story-card"
      bsPrefix={cssInternalPrefix}
      style={cssStyles}
      className={classNames('story-card', `size-${size}`)}
    >
      <div className="hoverHandler">
        {video
          && <div className="play-box">
            <Icon name="play" height="35" width="35" color="white"/>
          </div>}
        <div className="gradient" />
        <img
          src={image}
          width="100%"
          height={thumbnailHeight}
          alt="picture"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <BSPCard.Body>
        <BSPCard.Text className="card-author">{author}, {label}</BSPCard.Text>
        <BSPCard.Title>
          {truncateText(title, 'title')}
          {truncated.title
            && <span title={title}>...</span>}
        </BSPCard.Title>
        <BSPCard.Text className="card-date">{date}</BSPCard.Text>
        <BSPCard.Text className="card-description">
          {truncateText(description, 'description')}
          {truncated.description
            && <span title={description}>...</span>}
        </BSPCard.Text>
        <div
          className={
            classNames('button-box', { pt13: button?.type === 'next' })
          }>
          {button
          && renderButton()}
        </div>
      </BSPCard.Body>
    </BSPCard>
  );
};

StoryCard.propTypes = {
  size: PropTypes.oneOf(['s', 'm', 'l']),
  author: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  video: PropTypes.bool,
  date: PropTypes.string,
  description: PropTypes.string.isRequired,
  button: PropTypes.shape({
    link: PropTypes.string,
    type: PropTypes.oneOf(['primary', 'textlink']).isRequired,
    text: PropTypes.string.isRequired,
  }),
  cssStyles: PropTypes.string,
  cssInternalPrefix: PropTypes.string,
};

StoryCard.defaultProps = {
  size: 's',
  link: null,
  button: null,
  date: null,
  video: false,
  cssInternalPrefix: 'card',
  cssStyles: null,
};

export default StoryCard;
