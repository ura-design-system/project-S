module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
    "@storybook/preset-scss"
  ],
  refs: {
    "SGDS": { 
      title: "SGDS", 
      url: "https://react.designsystem.tech.gov.sg/",
      expanded: false
    },
    // "OGP": { 
    //   title: "OGP", 
    //   url: "https://design.hack.gov.sg/",
    //   expanded: false
    // },
    // "ERSI": { 
    //   title: "ESRI Calcite", 
    //   url: "https://esri.github.io/calcite-components",
    //   expanded: false
    // },
   },

  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}