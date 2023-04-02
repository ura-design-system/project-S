// import '!style-loader!css-loader!sass-loader!../src/scss/sgds-ura.scss';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Introduction', 'Foundation', 'Components', 'Patterns', 'Pages']
    }
  },
}

