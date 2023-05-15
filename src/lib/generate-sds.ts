import type { Secret } from "./types";
import type { SDSResources } from "../interface";
import { join } from "node:path";

export function generateSDS(secret: Secret): SDSResources {
    return {
        resources: [{
            '@type': 'type.googleapis.com/envoy.extensions.transport_sockets.tls.v3.Secret',
            ...secret
        }],
    };
}

export function getSdsCertConfig(outputPath: string, name: string) {
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
