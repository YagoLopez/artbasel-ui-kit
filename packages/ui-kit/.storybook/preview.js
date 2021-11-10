import '@mch-ui-kit/themes/dist/artbasel/artbasel.css';

const customViewports = {
  iPhoneX: {
    name: 'Breakpoint xs (Iphone X - 375px)',
    styles: {
      width: '375px',
      height: '812px',
    },
  },
  sm: {
    name: 'Breakpoint sm - 413px',
    styles: {
      width: '413px',
      height: '963px',
    },
  },
  md: {
    name: 'Breakpoint md - 768px',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  lg: {
    name: 'Breakpoint lg - 1024px',
    styles: {
      width: '1024px',
      height: '768px',
    },
  },
  xl: {
    name: 'Breakpoint xl - 1280px',
    styles: {
      width: '1280px',
      height: '900px',
    },
  },
  xxl: {
    name: 'Breakpoint xxl - 1536px',
    styles: {
      width: '1536px',
      height: '1080px',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: { viewports: customViewports },
  options: {
    storySort: {
      order: ['Introduction', 'Basic', 'Components'],
    },
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
