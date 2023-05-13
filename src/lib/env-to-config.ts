import { Cluster, Config, RouterConfig, Secret } from "./types";

export function envToConfig(rc: RouterConfig): Config {

    const pathSet = new Set<string>();
    const clusterMap = new Map<string, Cluster>();
    const getClusterName = (address: string) => `cluster-${address.replace(/[^a-zA-Z0-9]/g, '-')}`;

    const routeList = rc.filters.map(r => {

        if (pathSet.has(r.path)) throw new Error(`Duplicate path (${r.path})`);
        if(r.caName && !r.certName) throw new Error(`CA name (${r.caName}) without cert name`);
        if(r.caName && !rc.secrets?.find(s => s.name === r.caName)) throw new Error(`CA name (${r.caName}) not found in SDS config`);
        if(r.certName && !rc.secrets?.find(s => s.name === r.certName)) throw new Error(`Cert name (${r.certName}) not found in SDS config`);

        pathSet.add(r.path);
        const address = r.host + ':' + r.port;
        const clusterName = getClusterName(address);

        if (!clusterMap.has(clusterName)) {
            clusterMap.set(clusterName, {
                clusterName,
                host: r.host,
                port: +r.port,
                certName: r.certName,
                caName: r.caName,
            });
        } else {
            const cluster = clusterMap.get(clusterName);
            if (cluster?.certName !== r.certName) throw new Error(`Duplicate cluster name (${clusterName}) with different cert name`);
        }

        return { path: r.path, address, clusterName };
    });

    const sdsConfigResources: Secret[] = rc.secrets || [];

    if(rc.certName && !sdsConfigResources.find(r => r.name === rc.certName))
        throw new Error(`Cert name (${rc.certName}) not found in SDS config`);

    if(rc.caName && !sdsConfigResources.find(r => r.name === rc.caName))
        throw new Error(`CA name (${rc.caName}) not found in SDS config`);

    return {
        nodeId: rc.nodeId || 'envoy',
        nodeCluster: rc.nodeCluster || rc.nodeId || 'envoy',
        adminPort: +(rc.adminPort || 9901),
        listenPort: +(rc.port || 50051),
        clusterMap,
        routeList,
        listenerCertName: rc.certName,
        listenerCAName: rc.caName,
        sdsConfigResources,
        outputPath: '/tmp/',
    };

}
