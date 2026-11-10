import fs from "node:fs";
import path from "node:path";
import { Client } from "basic-ftp";

/**
 * Uploads the static export in out/ to Bluehost over FTPS — the manual
 * alternative to .github/workflows/deploy.yml.
 *
 * Reads FTP_SERVER, FTP_USERNAME, FTP_PASSWORD and optional FTP_SERVER_DIR
 * (default "public_html/") from .env.local / .env.
 *
 * Run with: npm run deploy   (builds first)
 */

const ROOT = process.cwd();
const LOCAL_DIR = path.join(ROOT, "out");
// State file kept on the server by the GitHub Action to upload only changes.
const ACTION_STATE_FILE = ".ftp-deploy-sync-state.json";

for (const file of [".env.local", ".env"]) {
  const envPath = path.join(ROOT, file);
  if (fs.existsSync(envPath)) process.loadEnvFile(envPath);
}

const { FTP_SERVER, FTP_USERNAME, FTP_PASSWORD } = process.env;
const serverDir = process.env.FTP_SERVER_DIR || "public_html/";

if (!FTP_SERVER || !FTP_USERNAME || !FTP_PASSWORD) {
  console.error("Set FTP_SERVER, FTP_USERNAME and FTP_PASSWORD in .env.local (see .env.example).");
  process.exit(1);
}
if (!fs.existsSync(path.join(LOCAL_DIR, "index.html"))) {
  console.error("out/ has no build. Run `npm run build` first (or use `npm run deploy`).");
  process.exit(1);
}

const client = new Client(60_000);
client.ftp.verbose = process.env.FTP_VERBOSE === "true";

const countFiles = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).reduce(
    (total, entry) =>
      total + (entry.isDirectory() ? countFiles(path.join(dir, entry.name)) : 1),
    0
  );

try {
  await client.access({
    host: FTP_SERVER,
    port: Number(process.env.FTP_PORT) || 21,
    user: FTP_USERNAME,
    password: FTP_PASSWORD,
    secure: true,
  });
  console.log(`Connected to ${FTP_SERVER}. Uploading ${countFiles(LOCAL_DIR)} files from out/ to ${serverDir} ...`);
  // Upload only; never clear the remote folder (public_html may hold host files).
  await client.ensureDir(serverDir);
  await client.uploadFromDir(LOCAL_DIR);
  // Files changed outside the Action: make its next run upload everything.
  await client.remove(ACTION_STATE_FILE).catch(() => {});
  console.log(`Deployed to ${FTP_SERVER}/${serverDir}`);
} catch (error) {
  const message = String(error?.message ?? error?.code ?? error);
  console.error(`Deploy failed: ${message}`);
  if (/cert|altname/i.test(message)) {
    console.error(
      "The FTP server's TLS certificate was rejected. On Bluehost, set FTP_SERVER to the server hostname shown in cPanel → FTP Accounts → Configure FTP Client (e.g. boxNNNN.bluehost.com); its certificate is valid for that name."
    );
  }
  process.exitCode = 1;
} finally {
  client.close();
}
