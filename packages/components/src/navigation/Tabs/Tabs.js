import React from 'react';
import PropTypes from 'prop-types';

import { Tabs as BSTabs } from 'react-bootstrap';
import classNames from 'classnames';

const Tabs = ({
  children,
  className,
  id,
  defaultActiveKey,
  onSelect,
  activeKey,
  bottomDividerColor,
}) => (
  <BSTabs
    variant="tabs"
    className={classNames(
      className,
      bottomDividerColor && `divider-color-grey-${bottomDividerColor}`,
    )}
    id={id}
    defaultActiveKey={defaultActiveKey}
    data-testid="mch-tabs"
    activeKey={activeKey}
    onSelect={onSelect}
  >
    {children}
  </BSTabs>
);

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
  activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  id: PropTypes.string,
  defaultActiveKey: PropTypes.string,
  onSelect: PropTypes.func,
  bottomDividerColor: PropTypes.oneOf(['100', '200']),
};

Tabs.defaultProps = {
  bottomDividerColor: '200',
  onSelect: () => null,
};

export default Tabs;
