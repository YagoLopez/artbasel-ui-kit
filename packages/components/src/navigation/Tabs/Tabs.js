import React from 'react';
import PropTypes from 'prop-types';

import { Tabs as BSTabs } from 'react-bootstrap';

const Tabs = ({
  children,
  className,
  id,
  defaultActiveKey,
}) => {
  return (
    <BSTabs
      variant="tabs"
      className={className}
      id={id}
      defaultActiveKey={defaultActiveKey}
      data-testid='mch-tabs'
    >
      {children}
    </BSTabs>
  );
};

Tabs.propTypes = {
  children: PropTypes.object.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  defaultActiveKey: PropTypes.string,
};

export default Tabs;
