# basic grpc mTLS test
echo-client (insecure) -> simple-grpc-router (mTLS) -> simple-grpc-router (mTLS) -> echo-server (insecure)

```bash
npm run grpc-mtls
```
```bash
...
grpc-mtls-client-1  | Connecting to server at grpc-a:10000
grpc-mtls-grpc-b-1  | [2023-05-15T09:03:52.704Z] "POST /EchoService/Echo1 HTTP/2" 200 - 22 22 6 5 "-" "grpc-node-js/1.8.14" "2ae01764-351b-4283-8494-023685d41a04" "grpc-a:10000" "172.21.0.2:10000"
grpc-mtls-grpc-a-1  | [2023-05-15T09:03:52.701Z] "POST /EchoService/Echo1 HTTP/2" 200 - 22 22 10 8 "-" "grpc-node-js/1.8.14" "2ae01764-351b-4283-8494-023685d41a04" "grpc-a:10000" "172.21.0.4:10000"
grpc-mtls-server-1  | Echo1 { str: 'Hello1', num: 1684141432690 }
grpc-mtls-client-1  | Echo1 { str: 'Hello1', num: 1684141432690 }
grpc-mtls-server-1  | Echo2 { str: 'Hello2', num: 1684141432715 }
grpc-mtls-client-1  | Echo2 { str: 'Hello2', num: 1684141432715 }
```
