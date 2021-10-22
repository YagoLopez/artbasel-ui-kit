// import 'bootstrap/dist/css/bootstrap.css'
import '../../themes/dist/artbasel/artbasel.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: {
      order: ['Basics', 'Components'],
    },
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
