import React, { useMemo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Icon } from '../../../utils/Icon';

const LinkCard = ({
  variant,
  title,
  description,
  showDescription,
  onClick,
}) => {
  const isSecondary = useMemo(() => variant === 'secondary', [variant]);

  return (
    <div
      data-testid="mch-link-card"
      className={classNames('link-card d-flex justify-content-between',
        { secondary: isSecondary })}
      onClick={onClick}
    >
      <div>
        <div className="headline">
          <span className="headline-underline">{title}</span>
        </div>
        {showDescription
          && <p className="description mb-0 mt-3">{description}</p>
        }
        <div className="d-flex flex-column justify-content-end icon-wrapper">
          <Icon name="chevron-right" size={24} />
        </div>
      </div>
    </div>
  );
};

LinkCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  showDescription: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  onClick: PropTypes.func,
};

LinkCard.defaultProps = {
  variant: 'primary',
  description: '',
  showDescription: false,
  onClick: () => {},
};

export default LinkCard;
