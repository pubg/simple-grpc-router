import path from 'path';
import protoLoader from '@grpc/proto-loader';
import { loadPackageDefinition, Server, ServerCredentials } from '@grpc/grpc-js';

process.on('SIGTERM', () => {
    console.log('SIGTERM');
    process.exit(0);
});

const protoFileName = path.resolve('./Echo.proto');
const packageDefinition = protoLoader.loadSync(protoFileName, { longs: String });
const packageObject = loadPackageDefinition(packageDefinition);

const ADDRESS = process.argv[2] || '0.0.0.0:10000';

const exampleServer = {
    Echo1(call, callback) {
        console.log('Echo1', call.request);
        callback(null, { str: call.request.str, num: call.request.num });
    },
    Echo2(call, callback) {
        console.log('Echo2', call.request);
        callback(null, { str: call.request.str, num: call.request.num });
    },
};

const server = new Server();
server.addService(packageObject.EchoService.service, exampleServer);

server.bindAsync(ADDRESS, ServerCredentials.createInsecure(), (err, port) => {
    if (err) throw err;
    console.log(`Server running at grpc://${ADDRESS}`);
    server.start();
});
