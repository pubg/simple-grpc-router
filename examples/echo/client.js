import path from 'path';
import protoLoader from '@grpc/proto-loader';
import { loadPackageDefinition, credentials, makeGenericClientConstructor } from '@grpc/grpc-js';

process.on('SIGTERM', () => {
    console.log('SIGTERM');
    process.exit(0);
});

const protoFileName = path.resolve('./Echo.proto');
const packageDefinition = protoLoader.loadSync(protoFileName, { longs: String });
const packageObject = loadPackageDefinition(packageDefinition);

const SERVER_ADDRESS = process.argv[2] || 'localhost:10000';

console.log('Connecting to server at', SERVER_ADDRESS);

const Client = makeGenericClientConstructor(packageObject.EchoService.service);
const client = new Client(SERVER_ADDRESS, credentials.createInsecure());

function Echo1(str, num) {
    return new Promise((resolve, reject) => {
        client.Echo1({ str, num }, (err, response) => {
            if (err) return reject(err);
            resolve(response);
        });
    });
}

function Echo2(str, num) {
    return new Promise((resolve, reject) => {
        client.Echo2({ str, num }, (err, response) => {
            if (err) return reject(err);
            resolve(response);
        });
    });
}

async function main() {

    do {
        try {
            const echo1 = await Echo1('Hello1', Date.now());
            console.log('Echo1', echo1);
            const echo2 = await Echo2('Hello2', Date.now());
            console.log('Echo2', echo2);
        } catch (e) {
            console.error(e);
        }
        await new Promise(resolve => setTimeout(resolve, 1000));
    } while (true);
}

main().catch(e => {
    console.error(e);
    process.exit(1);
});
