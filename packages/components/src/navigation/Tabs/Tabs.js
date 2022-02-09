import React from 'react';
import PropTypes from 'prop-types';

import { Tabs as BSTabs } from 'react-bootstrap';

const Tabs = ({
  children,
  className,
  id,
  defaultActiveKey,
  onSelect,
  activeKey,
}) => {
  return (
    <BSTabs
      variant="tabs"
      className={className}
      id={id}
      defaultActiveKey={defaultActiveKey}
      data-testid="mch-tabs"
      activeKey={activeKey}
      onSelect={onSelect}
    >
      {children}
    </BSTabs>
  );
};

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
  activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  id: PropTypes.string,
  defaultActiveKey: PropTypes.string,
  onSelect: PropTypes.func,
};

Tabs.defaultProps = {
  onSelect: () => null,
};

export default Tabs;
