import * as path from 'path';
import { fileURLToPath } from 'url';
import throwFSError from './utils/FSError.js';
import { readdir } from 'node:fs';

const list = async () => {
    const dirName = path.dirname(fileURLToPath(import.meta.url));
    const srcName = path.resolve(dirName, 'files/');
    readdir(srcName, (err, files)=>{
        if(err){
            throwFSError();
        }
        console.log(files.join(', '));
    })
};

await list();