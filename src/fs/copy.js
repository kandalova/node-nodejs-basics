import { cp } from 'node:fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import throwFSError from './utils/FSError.js';

const copy = async () => {
    const dirName = path.dirname(fileURLToPath(import.meta.url));
    const srcName = path.resolve(dirName, 'files/');
    const destName = path.resolve(dirName, 'files-copy/');

    // experimental but whatever
    cp(srcName, destName, { recursive: true, errorOnExist: true, force: false }, (err) => {
        if (err) {
            throwFSError();
        }
        console.log("The direcroty has been copied!")
    });
};

await copy();
