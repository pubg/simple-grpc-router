import type { Secret } from "./types";
import type { SDSResources } from "../interface";

export function generateSDS(secret: Secret): SDSResources {
    return {
        resources: [{
            '@type': 'type.googleapis.com/envoy.extensions.transport_sockets.tls.v3.Secret',
            ...secret
        }],
    };
}

export function getSdsCertConfig(name: string) {
    return {
        name,
        sds_config: {
            path: getSdsPath(name),
        }
    }
}

export function getSdsPath(name: string) {
    return `/tmp/sds-${name}.yaml`;
}
