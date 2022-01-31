import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Popover, OverlayTrigger } from 'react-bootstrap';
import classnames from 'classnames';
import { ButtonIcon } from '../../actions/ButtonIcon';

const Tooltip = ({
  title, content, placement, arrow, children,
}) => {
  const [showTrigger, setShowTrigger] = useState(false);

  const toggleTooltip = (show) => {
    if (!showTrigger && show) {
      setShowTrigger(true);
    }
  };

  useEffect(() => {
    const escFunction = (event) => {
      if (event.keyCode === 27) {
        setShowTrigger(false);
      }
    };
    document.addEventListener('keydown', escFunction);
    return () => {
      document.removeEventListener('keydown', escFunction);
    };
  }, []);

  return (
    <OverlayTrigger
      trigger={['hover', 'focus']}
      placement={`${placement}-start`}
      show={showTrigger}
      onToggle={toggleTooltip}
      overlay={
        <Popover data-testid="mch-popover" className={classnames({ 'no-arrow': !arrow })}>
          <Popover.Header data-testid="mch-popover-header">
            <span data-testid="mch-popover-title">{title}</span>
            <ButtonIcon size="s" icon="close" onClick={() => setShowTrigger(false)} className="btn-close" />
          </Popover.Header>
          <Popover.Body data-testid="mch-popover-body">{content}</Popover.Body>
        </Popover>
      }
    >
      <div>{children}</div>
    </OverlayTrigger>
  );
};

Tooltip.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  placement: PropTypes.oneOf(['top', 'bottom']).isRequired,
  arrow: PropTypes.bool,
  children: PropTypes.element.isRequired,
};

Tooltip.defaultProps = {
  placement: 'top',
  arrow: true,
};

export default Tooltip;
