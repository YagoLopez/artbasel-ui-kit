import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Dropdown } from 'react-bootstrap';
import Item from './Item';
import { ButtonIcon } from '../ButtonIcon';
import ButtonContext from './ButtonContext';
import { IconList } from '../../utils/Icon';

const CustomToggle = forwardRef(({ onClick, children }, ref) => {
  return (
  <div ref={ ref } onClick={(e) => {
    e.preventDefault();
    onClick(e);
  }}>{children}</div>
  );
});

const ContextualButton = ({
  icon,
  size,
  variant,
  theme,
  title,
  position,
  align,
  showLabel,
  scrollbar,
  children,
}) => {
  const drop = {
    top: 'up',
    bottom: 'down',
    left: 'start',
    right: 'end',
  };
  const alignment = {
    start: 'start',
    end: 'end',
    center: 'start',
  };

  return (
    <div data-testid="mch-btn-contextual"
    >
      <Dropdown drop={ drop[position] } align={alignment[align]} className='btn-contextual'>
        <Dropdown.Toggle as={ CustomToggle }>
          <ButtonIcon
            icon={ icon }
            theme={ theme }
            size={ size }
            variant={ variant }
            title={ title }
          />
        </Dropdown.Toggle>
        <ButtonContext.Provider value={ showLabel }>
          <Dropdown.Menu className={classnames(
            position, size, theme,
            {
              centered: align === 'center',
              'with-scroll': scrollbar && children?.length > 4,
            },
          )}>
            { children }
          </Dropdown.Menu>
        </ButtonContext.Provider>
      </Dropdown>
    </div>
  );
};

CustomToggle.displayName = 'CustomToggle';

CustomToggle.propTypes = {
  onClick: PropTypes.func,
};

ContextualButton.propTypes = {
  icon: PropTypes.oneOf(IconList),
  size: PropTypes.oneOf(['xs', 's', 'm', 'lg']),
  variant: PropTypes.oneOf(['default', 'outline', 'fill']),
  theme: PropTypes.oneOf(['light', 'dark']),
  title: PropTypes.string,
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  align: PropTypes.oneOf(['start', 'center', 'end']),
  showLabel: PropTypes.bool,
  scrollbar: PropTypes.bool,
  children: PropTypes.arrayOf(Item).isRequired,
};

ContextualButton.defaultProps = {
  icon: 'context',
  size: 'm',
  variant: 'default',
  theme: 'light',
  position: 'bottom',
  align: 'start',
  showLabel: true,
  scrollbar: false,
};

export default Object.assign(ContextualButton, { Item });
