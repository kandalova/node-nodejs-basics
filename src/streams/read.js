import {createReadStream} from "node:fs"
import * as path from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
    const dirName = path.dirname(fileURLToPath(import.meta.url));
    const srcName = path.resolve(dirName, 'files/fileToRead.txt');

    const readerStream = createReadStream(srcName);
    readerStream.setEncoding('UTF8');

    readerStream.on('data', ((chunk) => {
        process.stdout.write(chunk);
    }));

    readerStream.on('end', (() => {
        console.log('');
        console.log('File reading complete.');
    }));

    readerStream.on('error', ((err) => {
        console.log(err);
    }));

};

await read();