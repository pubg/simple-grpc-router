export type ENV = {
    PATH_REDIRECT: string;
    NODE_ID?: string;
    NODE_CLUSTER?: string;
    ADMIN_PORT?: string;
    PORT?: string;
    OUTPUT_PATH?: string;
}

export type Route = {
    path: string;
    address: string;
    clusterName: string;
}

export type Cluster = {
    clusterName: string;
    host: string;
    port: number;
}

export type Config = {
    nodeId: string,
    nodeCluster: string,
    adminPort: number,
    listenPort: number,
    routeList: Route[];
    clusterMap: Map<string, Cluster>;
    outputPath: string;
}

export function envToConfig({
    PATH_REDIRECT,
    NODE_ID,
    NODE_CLUSTER,
    ADMIN_PORT,
    PORT,
    OUTPUT_PATH,
}: ENV): Config {

    const pathSet = new Set<string>();
    const clusterMap = new Map<string, Cluster>();
    const getClusterName = (address: string) => `cluster-${address.replace(/[^a-zA-Z0-9]/g, '-')}`;

    const routeList = (PATH_REDIRECT || '').split(',').map(s => {
        const [path, address] = s.split('->');

        if (!path || !address || !address.includes(':')) throw new Error(`Invalid route (${s})\nRoute must be in format 'PATH->HOST:PORT'`);

        if (pathSet.has(path)) throw new Error(`Duplicate path (${path})`);

        pathSet.add(path);
        const clusterName = getClusterName(address);

        if (!clusterMap.has(clusterName)) {
            const [host, port] = address.split(':');
            clusterMap.set(clusterName, {
                clusterName,
                host,
                port: Number(port) || 50051,
            });
        }

        return { path, address, clusterName: getClusterName(address) };
    });

    return {
        nodeId: NODE_ID || 'envoy',
        nodeCluster: NODE_CLUSTER || 'envoy',
        adminPort: +(ADMIN_PORT || 9901),
        listenPort: +(PORT || 50051),
        clusterMap,
        routeList,
        outputPath: OUTPUT_PATH || '/tmp/config.yaml',
    };

}