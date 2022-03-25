import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { DropdownButton } from 'react-bootstrap';
import Item from './Item';
import { Icon } from '../../utils/Icon';
import MenuContext from './MenuContext';

const ContextualMenu = ({
  icon,
  children,
  showLabel,
  position,
  align,
  theme,
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
  };

  return (
    <div
      className={classnames(
        'mch-contextual-menu',
        position,
        theme,
        {
          centered: align === 'center',
          'with-scroll': children?.length > 4,
        },
      )}
      data-testid="mch-contextual-menu"
    >
      <DropdownButton
        drop={drop[position]}
        align={alignment[align]}
        title={
          <Icon name={icon} size={24} />
        }
      >
        <MenuContext.Provider value={showLabel}>
          {children}
        </MenuContext.Provider>
      </DropdownButton>
    </div>
  );
};

ContextualMenu.propTypes = {
  icon: PropTypes.string.isRequired,
  showLabel: PropTypes.bool,
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  align: PropTypes.oneOf(['start', 'center', 'end']),
  children: PropTypes.arrayOf(Item).isRequired,
  theme: PropTypes.oneOf(['light', 'dark']),
};

ContextualMenu.defaultProps = {
  showLabel: true,
  icon: 'context',
  position: 'bottom',
  align: 'start',
  theme: 'light',
};

export default Object.assign(ContextualMenu, { Item });
