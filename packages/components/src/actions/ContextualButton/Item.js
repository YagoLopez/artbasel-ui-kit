import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Dropdown } from 'react-bootstrap';
import { Icon, IconList } from '../../utils/Icon';
import ButtonContext from './ButtonContext';

const Item = ({
  icon,
  children,
  onClick,
  cssStyles,
}) => {
  const showLabel = useContext(ButtonContext);

  return (
    <Dropdown.Item
      className={classnames(
        'mch-contextual-item',
        { labeled: showLabel },
      )}
      data-testid="mch-contextual-item"
      onClick={onClick}
      style={cssStyles}
    >

      <div className="icon-wrapper">
        {icon && <Icon name={icon} size={24} />}
      </div>

      {showLabel
        && <span>{children}</span>
      }
    </Dropdown.Item>
  );
};
Item.propTypes = {
  icon: PropTypes.oneOf(IconList),
  label: PropTypes.string,
  onClick: PropTypes.func,
  cssStyles: PropTypes.string,
};

Item.defaultProps = {
  icon: null,
  label: null,
  onClick: () => {},
  cssStyles: null,
};

export default Item;
