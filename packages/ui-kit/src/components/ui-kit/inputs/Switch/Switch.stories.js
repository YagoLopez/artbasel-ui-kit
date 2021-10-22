import React from 'react';

import Switch from './Switch';
import SwitchMdx from './Switch.mdx';

export default {
  title: 'Components/Inputs/Switch',
  component: Switch,
  // argTypes: {
  //   onClick: {
  //     table: {
  //       category: 'Events',
  //       subcategory: 'Button Events',
  //     },
  //   },
  // },
  parameters: {
    docs: {
      page: SwitchMdx,
    },
  },
};

const Template = (args) => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {
  checked: false,
};
Default.storyName = 'Default';

export const Active = Template.bind({});
Active.args = {
  checked: true,
};
Active.storyName = 'Active';
