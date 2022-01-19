import React from 'react';
import PropTypes from 'prop-types';
import { Card as BSPCard } from 'react-bootstrap';
import classNames from 'classnames';
import { Button } from '../../../actions/Button';
import { TextLink } from '../../../actions/TextLink';
import { Icon } from '../../../utils/Icon';
import { truncateText } from '../../../helpers/truncateText';

const truncateValues = {
  title: 60,
  description: 250,
};

const classHeight = {
  s: '234.37px',
  m: '404px',
  l: '624px',
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
  const truncated = {
    title: truncateText(title, truncateValues.title),
    description: truncateText(description, truncateValues.description),
  };

  const getSubtitle = () => {
    const authorText = author?.length > 0 ? author : null;
    const labelText = label?.length > 0 ? label : null;
    let subtitle;
    if (authorText && labelText) {
      subtitle = [authorText, labelText].join(', ');
    } else {
      subtitle = authorText || labelText;
    }
    return subtitle;
  };

  const buttonComponent = {
    textlink: button ? (
      <TextLink href={button?.link} icon="chevron-right" iconAlign="right">
        {button?.text}
      </TextLink>
    ) : null,
    primary: button ? (
      <Button primary href={button?.link}>
        {button?.text}
      </Button>
    ) : null,
  };

  const renderButton = () => buttonComponent[button.type];

  return (
    <BSPCard
      data-testid="mch-story-card"
      bsPrefix={cssInternalPrefix}
      style={cssStyles}
      className={classNames('story-card', `size-${size}`)}
    >
      <div className="hoverHandler">
        {video && (
          <div className="play-box">
            <Icon name="play" height={35} width={35} color="white" />
          </div>
        )}
        <div className="gradient" />
        <img
          src={image}
          width="100%"
          height={classHeight[size]}
          alt="picture"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <BSPCard.Body>
        <BSPCard.Text className="card-author">
          {getSubtitle()}
        </BSPCard.Text>
        <BSPCard.Title>
          {truncated.title.text}
          {truncated.title.state && <span title={title}>...</span>}
        </BSPCard.Title>
        <BSPCard.Text className="card-date">{date}</BSPCard.Text>
        <BSPCard.Text className="card-description">
          {truncated.description.text}
          {truncated.description.state && <span title={description}>...</span>}
        </BSPCard.Text>
        { button
          && <div
            className={classNames('button-box', {
              pt13: button?.type === 'next',
            })}
          >
            {renderButton()}
          </div>
        }
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
