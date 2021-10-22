import React from 'react';

import Checkbox from './Checkbox';
import CheckboxMdx from './Checkbox.mdx';

export default {
  title: 'Components/Inputs/Checkbox',
  component: Checkbox,
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
      page: CheckboxMdx,
    },
  },
};

const Template = (args) => <Checkbox {...args} />;

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
