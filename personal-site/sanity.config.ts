import { deskTool } from "sanity/desk";
import { defineConfig } from "sanity";

const config = defineConfig({
  projectId: "pj5zqsej",
  dataset: "production",
  title: "My Personal Site",
  apiVersion: "2021-03-25",
  basePath: "/admin",
  plugins: [deskTool()],
});

export default config;
