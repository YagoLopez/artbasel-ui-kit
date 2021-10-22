import React from 'react';

import Radio from './Radio';
import RadioMdx from './Radio.mdx';

export default {
  title: 'Components/Inputs/Radio',
  component: Radio,
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
      page: RadioMdx,
    },
  },
};

const Template = (args) => <Radio {...args} />;

export const Default = Template.bind({});
Default.args = {
  checked: false,
  label: 'label',
};
Default.storyName = 'Default';

export const Hover = Template.bind({});
Hover.args = {
  checked: false,
  label: 'label',
};
Hover.storyName = 'Hover';

export const LeadingIcon = Template.bind({});
LeadingIcon.args = {
  checked: true,
  label: 'label',
};
LeadingIcon.storyName = 'Active';
