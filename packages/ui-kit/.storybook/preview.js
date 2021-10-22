import '../../themes/dist/artbasel/artbasel.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
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
