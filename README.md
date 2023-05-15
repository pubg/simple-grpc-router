This is a gRPC Path-based Envoy Config Generator for Envoy Container Runtime.

It is designed to route gRPC hosts using a minimal and simple routing syntax.

---

## Environment Variables

ENV | TYPE | DESCRIPTION | EXAMPLE
---|---|---|---|
ROUTER_CONFIG_PATH | string | Router Config File Path. if not set, use ROUTER_CONFIG | /config/router.json or /config/router.yaml
ROUTER_CONFIG | string | Router Config JSON | see below

## Router Config
### Types
```typescript
type RouterConfig = {
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

type Filter = {
    path: string,
    host: string,
    port: number,
    certName?: string,
    caName?: string
}

type Secret = SecretTLS | SecretCA

type SecretTLS = {
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

type SecretCA = {
    name: string,
    validation_context: {
        trusted_ca: {
            filename: string
        }
    }
}
```

### Example
```json
{
    "certName": "client_cert", // enable TLS listener
    "caName": "ca_cert",       // enable TLS Validation Context
    "filters": [
        {
            "path": "/package.name.service/",
            "host": "localhost",
            "port": 50051
        },
        {
            "path": "/package.with.mtls/",
            "host": "localhost",
            "port": 50051,
            "certName": "server_cert", // enable TLS for this route
            "caName": "ca_cert"        // enable TLS Validation Context for this route
        }
    ],
    "secrets": [
        {
            "name": "client_cert",
            "tls_certificate": {
                "certificate_chain": {
                    "filename": "/certs/client.crt"
                },
                "private_key": {
                    "filename": "/certs/client.key"
                }
            }
        },
        {
            "name": "server_cert",
            "tls_certificate": {
                "certificate_chain": {
                    "filename": "/certs/server.crt"
                },
                "private_key": {
                    "filename": "/certs/server.key"
                }
            }
        },
        {
            "name": "ca_cert",
            "validation_context": {
                "trusted_ca": {
                    "filename": "/certs/ca.crt"
                }
            }
        }
    ]
}
```

# Have a problem?
If you have any problems, please [create an issue](https://github.com/pubg/simple-grpc-router/issues/new).

# Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
[Contributing Guide](./CONTRIBUTING.md)

# Code of Conduct
[Code of Conduct](./CODE_OF_CONDUCT.md)

# License
MIT License

Copyright (c) 2023 Bum-Seok Hwang (bitofsky@naver.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
