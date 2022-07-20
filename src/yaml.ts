import type { EnvoyConfig } from "./interface";
import { dump } from 'js-yaml';

export function yamlDump(envoyConfig: EnvoyConfig): string {
    return dump(envoyConfig);
}
