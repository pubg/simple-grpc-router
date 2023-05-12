import type { RouterConfig } from "./lib/types";
import { envToConfig } from "./lib/env-to-config";
import { generateConfig } from "./lib/generate-config";
import { generateSDS, getSdsPath } from "./lib/generate-sds";
import { yamlDump, yamlParse } from "./lib/yaml";
import fs from "fs";

export function writeEnvoyConfig() {

    console.log('Generating config...');

    let rc: RouterConfig;

    if (process.env.ROUTER_CONFIG_PATH) {
        const path = process.env.ROUTER_CONFIG_PATH;
        const content = fs.readFileSync(path, 'utf8');

        if (path.endsWith('.json'))
            rc = JSON.parse(content);
        else if (path.endsWith('.yaml') || path.endsWith('.yml'))
            rc = yamlParse(content);
        else
            throw new Error('ROUTER_CONFIG_PATH env var must end with .json or .yaml');
    }
    else
        rc = JSON.parse(process.env.ROUTER_CONFIG || 'null');

    if (!rc) throw new Error('ROUTER_CONFIG env var is required');

    console.log('Router config: ', rc);

    const config = envToConfig(rc);
    const configYaml = yamlDump(generateConfig(config));
    const path = `${config.outputPath}/config.yaml`;

    fs.writeFileSync(path, configYaml);

    console.log(`\n${configYaml}`);
    console.log(`Wrote envoy config to ${path}`);

    for (const secret of config.sdsConfigResources) {
        const path = getSdsPath(secret.name);
        const sdsYaml = yamlDump(generateSDS(secret));
        fs.writeFileSync(path, yamlDump(generateSDS(secret)));
        console.log(`\n${sdsYaml}`);
        console.log(`Wrote sds config to ${path}`);
    }

}