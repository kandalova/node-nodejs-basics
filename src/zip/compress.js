import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import * as path from 'path';
import { fileURLToPath } from 'url';


const compress = async () => {
    const dirName = path.dirname(fileURLToPath(import.meta.url));
    const srcName = path.resolve(dirName, 'files/fileToCompress.txt');
    const destName = path.resolve(dirName, 'files/archive.gz');

    const gzip = createGzip();
    const srcStream = createReadStream(srcName);
    const destStream = createWriteStream(destName);

    pipeline(srcStream, gzip, destStream, (err) => {
        if (err) {
            console.error('An error occurred:', err);
            process.exitCode = 1;
        }
    });
};

await compress();