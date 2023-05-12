
```bash
# ca-trust
openssl req -x509 -nodes -newkey rsa:2048 -keyout ca-trust.key -out ca-trust.crt -days 36500 -subj "/CN=test"

# grpc-a
openssl req -new -nodes -newkey rsa:2048 -keyout grpc-a.key -out grpc-a.csr -subj "/CN=GRPC-a"
openssl x509 -req -in grpc-a.csr -CA ca-trust.crt -CAkey ca-trust.key -CAcreateserial -out grpc-internal.crt -days 36500

# grpc-b
openssl req -new -nodes -newkey rsa:2048 -keyout grpc-b.key -out grpc-b.csr -subj "/CN=GRPC-b"
openssl x509 -req -in grpc-b.csr -CA ca-trust.crt -CAkey ca-trust.key -CAcreateserial -out grpc-b.crt -days 36500

# unknown-ca
openssl req -x509 -nodes -newkey rsa:2048 -keyout unknown-ca.key -out unknown-ca.crt -days 36500 -subj "/CN=test"

# grpc-unknown
openssl req -new -nodes -newkey rsa:2048 -keyout grpc-unknown.key -out grpc-unknown.csr -subj "/CN=GRPC-b"
openssl x509 -req -in grpc-unknown.csr -CA unknown-ca.crt -CAkey unknown-ca.key -CAcreateserial -out grpc-unknown.crt -days 36500
```
