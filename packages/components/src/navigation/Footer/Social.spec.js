import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Social from './Social';

const testElementId = 'mch-footer-social';
const linkRenderer = (link, label, target) => <a href={link} target={target}>{label}</a>;

const socialMedia = {
  title: 'FOLLOW US',
  entries: [
    {
      label: 'Instagram',
      icon: 'instagram',
      link: '#',
      target: '_blank',
    },
    {
      label: 'Facebook',
      icon: 'facebook',
      link: '#',
      target: '_blank',
    },
    {
      label: 'Twitter',
      icon: 'twitter',
      link: '#',
      target: '_blank',
    },
    {
      label: 'LinkedIn',
      icon: 'linkedin',
      link: '#',
      target: '_blank',
    },
    {
      label: 'Youtube',
      icon: 'youtube',
      link: '#',
      target: '_blank',
    },
    {
      label: 'Wechat',
      icon: 'wechat',
      link: '#',
      target: '_blank',
    },
    {
      label: 'Weebo',
      icon: 'weebo',
      link: '#',
      target: '_blank',
    },
  ],
};

const Component = (props) => (
  <Social
    socialMediaData={socialMedia}
    linkRenderer={linkRenderer}
  />
);

describe('Social component', () => {
  test('render Social', () => {
    render(<Component/>);

    const el = screen.getByTestId(testElementId);

    expect(el).toBeInTheDocument();
  });
});
