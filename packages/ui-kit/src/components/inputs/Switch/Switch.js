import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import classNames from 'classnames';

const Switch = ({
  checked,
  className,
  cssInternalPrefix,
  cssStyles,
  disabled,
  id,
  inline,
  onChange,
}) => (
      <Form.Switch
        data-testid="mch-switch"
        className={classNames(
          // styles.button,
          { disabled },
          className,
        )}
        checked={checked}
        style={cssStyles}
        disabled={disabled}
        bsPrefix={cssInternalPrefix}
        id={id}
        inline={inline}
        onChange={onChange || (() => {})}
      ></Form.Switch>
);

Switch.propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.string,
  cssStyles: PropTypes.string,
  cssInternalPrefix: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  inline: PropTypes.bool,
  onChange: PropTypes.func,
};

Switch.defaultProps = {
  cssInternalPrefix: 'form-check',
  disabled: false,
  inline: false,
  onChange: () => {},
};

export default Switch;
