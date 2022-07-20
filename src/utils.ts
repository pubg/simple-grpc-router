import path from 'path';
import dotenv from 'dotenv';
import { debuglog } from 'util';

dotenv.config({ path: path.join(__dirname, '../.env') });

export const INFO = debuglog('INFO');
export const WARN = debuglog('WARN');
export const ERROR = debuglog('ERROR');

const ERROR_COMMON = `
Use 'export PATH_REDIRECT=<route>' to set it.

Example:
export PATH_REDIRECT=$PATH->$HOST:$PORT,$PATH->$HOST:$PORT,...
`.trim();

process.on('uncaughtException', (err) => {
    console.error(err.message + '\n\n' + ERROR_COMMON);
    process.exit(1);
});