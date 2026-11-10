import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || "1jndvjps",
    dataset: process.env.SANITY_STUDIO_DATASET || "production",
  },
  // Hosted (free) at https://<studioHost>.sanity.studio after `npm run deploy`.
  studioHost: process.env.SANITY_STUDIO_HOST || "cocoacapital",
  deployment: { appId: "w85bq0wcuyls9nogq39kww5w", autoUpdates: true },
});
