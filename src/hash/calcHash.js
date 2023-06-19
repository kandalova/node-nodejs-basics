import * as path from 'path';
import { fileURLToPath } from 'url';
import { readFile } from 'node:fs';

const calculateHash = async () => {
    const dirName = path.dirname(fileURLToPath(import.meta.url));
    const srcName = path.resolve(dirName, 'files/fileToCalculateHashFor.txt');

    const {
        createHash,
    } = await import('node:crypto');
    const hash = createHash('sha256');

    

    readFile(srcName, 'utf8', (err, data) => {
        if (err) {
            throw err;
        };
        console.log(data);
        hash.update(data);
        console.log(hash.digest('hex'));
    });   
};

await calculateHash();