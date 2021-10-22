import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import classNames from 'classnames';

const Text = ({
  className, cssInternalPrefix, cssStyles, disabled, id, helpText, label,
}) => (
    <div data-testid="mch-text">
      <FloatingLabel controlId="floatingInput" label={label}>
        <Form.Control
          id="inputPassword5"
          type="text"
          placeholder="name@example.com"
          aria-describedby="passwordHelpBlock"
          disabled={disabled}
          style={cssStyles}
          className={classNames(
            // styles.button,
            // styles[variant],
            // styles[size],
            // { [styles.disabled]: disabled },
            className,
          )}
        />
      </FloatingLabel>
      <Form.Text id="passwordHelpBlock" muted>{helpText}</Form.Text>
    </div>
);

Text.propTypes = {
  className: PropTypes.string,
  cssStyles: PropTypes.string,
  cssInternalPrefix: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  helpText: PropTypes.string,
  label: PropTypes.string.isRequired,
};

Text.defaultProps = {
  cssInternalPrefix: 'form-check',
  disabled: false,
  label: 'label',
};

export default Text;
