import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Icon, IconList } from '../../utils/Icon';
import sectorsList from '../../helpers/sectorsList';

const IconComponent = ({ icon, className, size }) => {
  return (
    <div className={classNames('d-flex justify-content-center align-items-center tag-icon', className)}>
      <Icon name={icon} size={size} />
    </div>
  );
};

IconComponent.propTypes = {
  icon: PropTypes.oneOf(IconList),
  className: PropTypes.string,
  size: PropTypes.number,
};

IconComponent.defaultProps = {
  icon: 'certificate',
};

const Tag = ({
  variant,
  type,
  size,
  theme,
  icon,
  iconAlign,
  sector,
  label,
  className,
  onClick,
  cssStyles,
}) => {
  const Element = type === 'premium' ? 'h5' : 'p';

  return (
    <div
      data-testid='mch-tag'
      onClick={onClick}
      style={sectorsList.includes(sector) ? { borderColor: `var(--bs-mch-${sector})`, ...cssStyles } : {}}
      className={classNames('tag tag-radius d-inline-flex align-items-center', {
        [`variant-${variant}`]: variant,
        [`type-${type}`]: type,
        [`size-${size}`]: size,
        [`theme-${theme}`]: theme,
        [`icon-${iconAlign}`]: icon && iconAlign && type === 'label',
        'tag-shadow': type === 'label',
        'cursor-pointer': type === 'filterable',
      }, className)}>
      {icon && iconAlign === 'left' && type === 'label' && <IconComponent icon={icon} className='py-0 px-0' />}
      <Element className={classNames('mb-0', {
        'text-small': type === 'filterable',
        'text-label-small': !['curator', 'filterable'].includes(type),
        'text-label-medium': type === 'curator',
        'header-uppercase-2': type === 'premium',
      })}>
        {label}
      </Element>
      {type === 'filterable' && <IconComponent icon='close-small' size={22}/>}
      {icon && iconAlign === 'right' && type === 'label' && <IconComponent icon={icon} className='py-0 px-0' />}
    </div>
  );
};

Tag.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  type: PropTypes.oneOf(['label', 'curator', 'premium', 'filterable', 'sectors']),
  size: PropTypes.oneOf(['s', 'm']),
  theme: PropTypes.oneOf(['light', 'dark']),
  sector: PropTypes.oneOf(sectorsList),
  label: PropTypes.string.isRequired,
  icon: PropTypes.oneOf(IconList),
  iconAlign: PropTypes.oneOf(['left', 'right']),
  className: PropTypes.string,
  onClick: PropTypes.func,
  cssStyles: PropTypes.object,
};

Tag.defaultProps = {
  variant: 'primary',
  type: 'label',
  size: 's',
  theme: 'light',
  icon: null,
  onClick: () => {},
};

export default Tag;
