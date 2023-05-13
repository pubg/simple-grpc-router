client - envoyA - envoyB - server

```bash
docker build ../.. -t simple-grpc-router:latest

docker run -d \
  --name grpc-a \
  --network host \
  -e ROUTER_CONFIG_PATH=/tmp/grpc-a.yaml \
  -v ./grpc-a.yaml:/tmp/grpc-a.yaml \
  -v ../cert:/cert \
  simple-grpc-router:latest

docker run -d \
  --name grpc-b \
  --network host \
  -e ROUTER_CONFIG_PATH=/tmp/grpc-b.yaml \
  -v ./grpc-b.yaml:/tmp/grpc-b.yaml \
  -v ../cert:/cert \
  simple-grpc-router:latest
```