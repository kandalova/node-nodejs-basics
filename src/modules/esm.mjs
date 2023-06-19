import path from 'path';
import * as url from 'url';
import { release, version } from 'node:os';
import * as http from 'http'

import aFile from "./files/a.json" assert { type: "json" };
import bFile from "./files/b.json" assert { type: "json" };
import cFile from "./files/b.json" assert { type: "json" };

const random = Math.random();

export let unknownObject;

if (random > 0.5) {
    unknownObject = aFile;
} else {
    unknownObject = bFile;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

export const myServer = http.createServer((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});
