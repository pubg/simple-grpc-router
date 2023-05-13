import { envToConfig } from '../src/lib/env-to-config';
import type { RouterConfig } from '../src/lib/types';

type TEST = {
    name: string;
    routerConfig: RouterConfig;
}

const defaultEnv = {
};

const tests: TEST[] = [
    {
        name: 'basic',
        routerConfig: {
            ...defaultEnv,
            filters: [
                { path: '/', host: 'localhost', port: 50051 },
                { path: '/test1/', host: 'localhost', port: 50051 },
                { path: '/test2/', host: 'localhost', port: 50053 },
            ],
        }
    },
    {
        name: 'listener-tls',
        routerConfig: {
            ...defaultEnv,
            caName: 'ca-cert',
            certName: 'listener-cert',
            filters: [
                { path: '/', host: 'localhost', port: 50051 },
            ],
            secrets: [
                {
                    name: 'listener-cert',
                    tls_certificate: {
                        certificate_chain: {
                            filename: 'listener-cert/cert',
                        },
                        private_key: {
                            filename: 'listener-cert/key',
                        },
                    },
                },
                {
                    name: 'ca-cert',
                    validation_context: {
                        trusted_ca: {
                            filename: 'ca-cert/ca',
                        },
                    },
                },
            ],
        }
    },
    {
        name: 'cluster-tls',
        routerConfig: {
            ...defaultEnv,
            filters: [
                { path: '/', host: 'localhost', port: 50051, certName: 'cluster-cert', caName: 'ca-cert' },
            ],
            secrets: [
                {
                    name: 'cluster-cert',
                    tls_certificate: {
                        certificate_chain: {
                            filename: 'cluster-cert/cert',
                        },
                        private_key: {
                            filename: 'cluster-cert/key',
                        },
                    },
                },
                {
                    name: 'ca-cert',
                    validation_context: {
                        trusted_ca: {
                            filename: 'ca-cert/ca',
                        },
                    },
                },
            ],
        }
    },
    {
        name: 'mtls',
        routerConfig: {
            ...defaultEnv,
            caName: 'ca-cert',
            certName: 'listener-cert',
            filters: [
                { path: '/', host: 'localhost', port: 50051, certName: 'cluster-cert', caName: 'ca-cert' },
            ],
            secrets: [
                {
                    name: 'cluster-cert',
                    tls_certificate: {
                        certificate_chain: {
                            filename: 'cluster-cert/cert',
                        },
                        private_key: {
                            filename: 'cluster-cert/key',
                        },
                    },
                },
                {
                    name: 'listener-cert',
                    tls_certificate: {
                        certificate_chain: {
                            filename: 'listener-cert/cert',
                        },
                        private_key: {
                            filename: 'listener-cert/key',
                        },
                    },
                },
                {
                    name: 'ca-cert',
                    validation_context: {
                        trusted_ca: {
                            filename: 'ca-cert/ca',
                        },
                    },
                },
            ],
        }
    }
];

describe('envToConfig', () => {
    for (const test of tests) {
        it(test.name, () => {
            expect(envToConfig(test.routerConfig)).toMatchSnapshot();
        });
    }
});
