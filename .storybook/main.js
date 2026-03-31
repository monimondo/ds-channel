/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],

  staticDirs: [
    { from: '../src/assets', to: '/assets' }
  ],

  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
    "@chromatic-com/storybook"
  ],

  framework: {
    name: "@storybook/html-vite",
    options: {}
  }
};

export default config;