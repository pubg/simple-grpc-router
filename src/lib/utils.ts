import path from 'path';
import dotenv from 'dotenv';
import { debuglog } from 'util';

dotenv.config({ path: path.join(__dirname, '../.env') });

export const INFO = debuglog('INFO');
export const WARN = debuglog('WARN');
export const ERROR = debuglog('ERROR');

process.on('uncaughtException', (err) => {
    console.error(err.message);
    console.error(err.stack);
    process.exit(1);
});