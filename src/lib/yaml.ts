import { dump, load } from 'js-yaml';

export function yamlDump(envoyConfig: any): string {
    return dump(envoyConfig, { noRefs: true });
}

export function yamlParse(yaml: string): any {
    return load(yaml);
}