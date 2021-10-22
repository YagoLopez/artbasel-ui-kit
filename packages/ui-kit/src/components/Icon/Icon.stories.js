import React from 'react';

import { withDesign } from 'storybook-addon-designs';

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
  decorators: [withDesign],
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

Icons.parameters = {
  design: {
    name: 'Figma Design',
    type: 'figma',
    url:
      'https://www.figma.com/file/TENnOP4K38G6r3vDL3emCP/AB---Style-Guide?node-id=77%3A3984',
  },
};
