import * as path from 'path';
import { fileURLToPath } from 'url';
import throwFSError from './utils/FSError.js';
import { stat, rename as fs_raname } from 'node:fs/promises';

const rename = async () => {
    const dirName = path.dirname(fileURLToPath(import.meta.url));
    const srcName = path.resolve(dirName, 'files/wrongFilename.txt');
    const destName = path.resolve(dirName, 'files/properFilename.md');

    Promise.allSettled([
        stat(srcName),
        stat(destName),
    ])
        .then(([src, dest]) => {
            if (src.status !== 'fulfilled' || !src.value.isFile() || dest.status !== 'rejected') {
                throwFSError();
            }
            fs_raname(srcName, destName);
        })
        .then(() => {
            console.log("The file has been renamed!")
        })
        .catch((err) => {
            console.error(err);
        })
};

await rename();