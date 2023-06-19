import * as path from 'path';
import { fileURLToPath } from 'url';
import throwFSError from './utils/FSError.js';
import { unlink } from 'node:fs';

const remove = async () => {
    const dirName = path.dirname(fileURLToPath(import.meta.url));
    const srcName = path.resolve(dirName, 'files/fileToRemove.txt');

    unlink(srcName, (err) => {
        if (err /*&& err.code == 'ENOENT'*/) {
            throwFSError();
        } else {
            console.log("The file has been deleted!")
        }
    });

};

await remove();