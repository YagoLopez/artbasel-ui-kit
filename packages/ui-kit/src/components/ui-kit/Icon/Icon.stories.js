import React from 'react';

import Icon from './Icon';
import IconMdx from './Icon.mdx';

export default {
  component: Icon,
  title: 'Components/Icons',
  parameters: {
    docs: {
      page: IconMdx,
    },
  },
  argTypes: {
    color: { control: 'color' },
  },
};

const Template = (args) => <Icon {...args} />;

export const Icons = Template.bind({});
Icons.args = {
  name: 'youtube',
  color: '#1D2327',
  size: 24,
};
