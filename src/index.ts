import { ENV, envToConfig } from "./env-to-config";
import { generateConfig } from "./generate-config";
import { yamlDump } from "./yaml";
import fs from "fs";

console.log('Generating config...');

const config = envToConfig(process.env as ENV);
const yaml = yamlDump(generateConfig(config));

fs.writeFileSync(config.outputPath, yaml);

console.log(`\n${yaml}`);
console.log(`Wrote config to ${config.outputPath}`);

process.exit(0);
