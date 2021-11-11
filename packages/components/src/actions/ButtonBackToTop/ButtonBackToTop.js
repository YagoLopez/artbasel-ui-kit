import React from 'react';
import PropTypes from 'prop-types';
import { Button as BSPButton } from 'react-bootstrap';
import classNames from 'classnames';
import { Icon } from '../../utils/Icon';

const ButtonBackToTop = ({
  className,
  cssInternalPrefix,
  cssStyles,
  onClick,
}) => (
  <>
    <BSPButton
      variant=""
      data-testid="mch-button-backtotop"
      className={classNames('btn-backtotop position-relative', className)}
      style={cssStyles}
      bsPrefix={cssInternalPrefix}
      onClick={onClick}
    >
      <Icon name="backtotoparrow" size={24} />
    </BSPButton>
  </>
);

ButtonBackToTop.propTypes = {
  cssStyles: PropTypes.string,
  className: PropTypes.string,
  cssInternalPrefix: PropTypes.string,
  onClick: PropTypes.func,
};

ButtonBackToTop.defaultProps = {
  cssInternalPrefix: 'btn',
  onClick: () => {},
};

export default ButtonBackToTop;
