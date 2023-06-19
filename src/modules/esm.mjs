import path from 'path';
import * as url from 'url';
import { release, version } from 'node:os';
import * as http from 'http'
import { readFile } from 'fs/promises';

const getJSON = async function(path){
	return JSON.parse(
  await readFile(
    new URL(path, import.meta.url)
  )
)};

const bFile = await getJSON('./files/b.json');
const aFile = await getJSON('./files/a.json');

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
