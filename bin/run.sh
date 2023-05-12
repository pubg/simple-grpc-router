#!/bin/bash
set -e

cd /app

npm run start

echo ""
echo "Starting Envoy..."
echo ""
/usr/local/bin/envoy -c /tmp/config.yaml --use-dynamic-base-id
