import React from 'react';

import Text from './Text';
import TextMdx from './Text.mdx';

export default {
  title: 'Components/Inputs/Text',
  component: Text,
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
      page: TextMdx,
    },
  },
};

const Template = (args) => <Text {...args} />;

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
