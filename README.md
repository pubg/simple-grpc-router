This is a gRPC Path-based Envoy Config Generator for Envoy Container Runtime.

It is designed to route to grpc hosts using minimal and simple routing syntax.

---

## Environment Variables

ENV | TYPE | DESCRIPTION | EXAMPLE | DEFAULT
---|---|---|---|---
PATH_REDIRECT | string | path to redirect. comma separated.<br/>/PATH/->HOST:PORT,/PATH/->HOST:PORT,... | /package.name.service/->127.0.0.1:50051|
NODE_ID | string | node id | node-1 | envoy
NODE_CLUSTER | string | node cluster | node-1 | envoy
ADMIN_PORT | number | admin port | 9901 | 9901
PORT | number | grpc listening port | 50051 | 50051

# License
MIT License

Copyright (c) 2022 Bum-Seok Hwang (bitofsky@naver.com)

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
