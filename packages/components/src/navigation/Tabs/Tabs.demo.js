import React from 'react';
import Tabs from './Tabs';
import Tab from './Tab';

const TabsDemo = () => {
  return (
    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
      <Tab eventKey="home" title="Home">
        <p className="px-8 py-5 text-small">Home</p>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <p className="px-8 py-5 text-small">Profile</p>
      </Tab>
      <Tab eventKey="disabled" title="Disabled" disabled>
        <p className="px-8 py-5 text-small">Disabled</p>
      </Tab>
    </Tabs>
  );
};

export default TabsDemo;
