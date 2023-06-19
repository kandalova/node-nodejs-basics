import * as path from 'path';
import { fileURLToPath } from 'url';
import throwFSError from './utils/FSError.js';
import { readFile } from 'node:fs';

const read = async () => {
    const dirName = path.dirname(fileURLToPath(import.meta.url));
    const srcName = path.resolve(dirName, 'files/fileToRead.txt');

    readFile(srcName, 'utf8', (err, data) => {
        if (err){
            throwFSError();
        };
        console.log(data);
    });
};

await read();