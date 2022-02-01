import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Col } from '../../Grid';

const ConditionalWrapper = ({ condition, wrapper, children }) => {
  return condition ? wrapper(children) : children;
};

const TeaserCard = ({
  variant, title, subTitle, imageUrl, link,
}) => {
  return (
    <ConditionalWrapper
      condition={link}
      wrapper={(children) => (
        <a data-testid="link" href={link}>
          {children}
        </a>
      )}
    >
      <Col
        className={classnames('card', 'teaser-card', {
          'type-h': variant === 'h',
          'type-v': variant === 'v',
        })}
      >
        <div className="image-frame">
          <img data-testid="image" src={imageUrl} />
        </div>

        <div className="text-frame">
          {variant === 'v' ? (
            <h4 className="mt-auto mb-3 text-white">{subTitle}</h4>
          ) : (
            <p className="text-small text-white mt-auto mb-3">{subTitle}</p>
          )}

          <h4 className="my-0 text-white">{title}</h4>
        </div>
        <div className="gradient" />
      </Col>
    </ConditionalWrapper>
  );
};

TeaserCard.propTypes = {
  variant: PropTypes.oneOf(['h', 'v']),
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  link: PropTypes.string,
};

TeaserCard.defaultProps = {
  variant: 'h',
};

export default TeaserCard;
