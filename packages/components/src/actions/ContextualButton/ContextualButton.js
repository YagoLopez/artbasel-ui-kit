import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { DropdownButton } from 'react-bootstrap';
import Item from './Item';
import { Icon } from '../../utils/Icon';
import ButtonContext from './ButtonContext';

const ContextualButton = ({
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
        <ButtonContext.Provider value={showLabel}>
          {children}
        </ButtonContext.Provider>
      </DropdownButton>
    </div>
  );
};

ContextualButton.propTypes = {
  icon: PropTypes.string.isRequired,
  showLabel: PropTypes.bool,
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  align: PropTypes.oneOf(['start', 'center', 'end']),
  children: PropTypes.arrayOf(Item).isRequired,
  theme: PropTypes.oneOf(['light', 'dark']),
};

ContextualButton.defaultProps = {
  showLabel: true,
  icon: 'context',
  position: 'bottom',
  align: 'start',
  theme: 'light',
};

export default Object.assign(ContextualButton, { Item });
