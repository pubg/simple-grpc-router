# basic grpc test
echo-client - echo-server

```bash
docker-compose up
```
```bash
...
Attaching to grpc-test-client-1, grpc-test-server-1
grpc-test-server-1  | Server running at http://0.0.0.0:10000
grpc-test-client-1  | Connecting to server at server:10000
grpc-test-server-1  | Echo1 { str: 'Hello1', num: 1684120482863 }
grpc-test-client-1  | Echo1 { str: 'Hello1', num: 1684120482863 }
grpc-test-server-1  | Echo2 { str: 'Hello2', num: 1684120482885 }
grpc-test-client-1  | Echo2 { str: 'Hello2', num: 1684120482885 }
```
