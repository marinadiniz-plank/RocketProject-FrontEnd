import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "hztvv2",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:
      "https://rocketproject-frontend-ad39sjyeb-marinadiniz-plank.vercel.app/",
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
