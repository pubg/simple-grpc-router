export type RouterConfig = {
    filters: Filter[],
    nodeId?: string,
    nodeCluster?: string,
    adminPort?: number,
    /** Listener port */
    port?: number,
    /** Listener TLS cert name (sds resource name) */
    certName?: string,
    /** Listener CA cert name (sds resource name) */
    caName?: string,
    /** SDS config resources */
    secrets?: Secret[]
}

export type Filter = {
    path: string,
    host: string,
    port: number,
    certName?: string,
    caName?: string
}

export type Secret = SecretTLS | SecretCA

export type SecretTLS = {
    name: string,
    tls_certificate: {
        certificate_chain: {
            filename: string
        },
        private_key: {
            filename: string
        }
    }
}

export type SecretCA = {
    name: string,
    validation_context: {
        trusted_ca: {
            filename: string
        }
    }
}

export type RouteOpt = {
    path: string,
    address: string,
    clusterName: string,
}

export type ClusterOpt = {
    clusterName: string,
    host: string,
    port: number,
    certName?: string,
    caName?: string,
}

export type EnvConfig = {
    nodeId: string,
    nodeCluster: string,
    adminPort: number,
    listenPort: number,
    routeList: RouteOpt[],
    clusterMap: Map<string, ClusterOpt>,
    outputPath: string,
    sdsConfigResources: Secret[],
    listenerCertName?: string,
    listenerCAName?: string,
}