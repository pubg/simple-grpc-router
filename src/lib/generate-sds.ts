import { join } from "node:path";
import { SdsSecretConfig, Secret } from "../interface";
import { Secret as EnvSecret } from "./types";

export function generateSDS(secret: EnvSecret): { resources: (Secret & { "@type": string })[] } {
    return {
        resources: [{
            '@type': 'type.googleapis.com/envoy.extensions.transport_sockets.tls.v3.Secret',
            ...secret
        }],
    };
}

export function getSdsCertConfig(outputPath: string, name: string): SdsSecretConfig {
    return {
        name,
        sds_config: {
            resource_api_version: "V3" as const,
            path_config_source: {
                path: getSdsPath(outputPath, name),
            },
        }
    }
}

export function getSdsPath(outputPath: string, name: string) {
    return join(outputPath, `sds-${name}.yaml`);
}
