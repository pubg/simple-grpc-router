#!/bin/bash -e
# This script is used to generate the typescript types for the envoy proto files.

# Install the dependencies
echo "Installing dependencies"
npm install -g @grpc/proto-loader

# Clone the repos
echo "Cloning repos"
[ ! -d '.repos/envoy' ] && git clone --depth=1 git@github.com:envoyproxy/envoy.git .repos/envoy 
[ ! -d '.repos/udpa' ] && git clone --depth=1 git@github.com:cncf/udpa.git .repos/udpa
[ ! -d '.repos/protoc-gen-validate' ] && git clone --depth=1 git@github.com:bufbuild/protoc-gen-validate.git .repos/protoc-gen-validate
[ ! -d '.repos/xds' ] && git clone --depth=1 git@github.com:cncf/xds.git .repos/xds

# Generate the types
echo "Generating types"
proto-loader-gen-types \
    --keepCase \
    --enums=string \
    --json=true \
    --grpcLib=@grpc/grpc-js \
    -I .repos/envoy/api .repos/udpa .repos/protoc-gen-validate .repos/xds \
    --outDir=types/ \
    .repos/envoy/api/envoy/config/bootstrap/v3/bootstrap.proto \
    .repos/envoy/api/envoy/extensions/filters/network/http_connection_manager/v3/http_connection_manager.proto \
    .repos/envoy/api/envoy/extensions/filters/network/tcp_proxy/v3/tcp_proxy.proto \
    .repos/envoy/api/envoy/extensions/access_loggers/file/v3/file.proto \
    .repos/envoy/api/envoy/extensions/transport_sockets/tls/v3/tls.proto

# Cleanup
# echo "Cleaning up"
# rm -rf .repos

# Fix the generated types
echo "Fixing BoolValue"
cat > types/google/protobuf/BoolValue.ts << 'EOT'
// generate-types.sh generated
export type BoolValue = boolean;
export type BoolValue__Output = boolean;
EOT

echo "Fixing UInt32Value"
cat > types/google/protobuf/UInt32Value.ts << 'EOT'
// generate-types.sh generated
export type UInt32Value = number;
export type UInt32Value__Output = number;
EOT

echo "Fixing Duration"
cat > types/google/protobuf/Duration.ts << 'EOT'
// generate-types.sh generated
export type Duration = string;
export type Duration__Output = string;
EOT
