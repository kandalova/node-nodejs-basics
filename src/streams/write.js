import { createWriteStream } from "node:fs"
import * as path from 'path';
import { fileURLToPath } from 'url';

const write = async () => {
    const dirName = path.dirname(fileURLToPath(import.meta.url));
    const srcName = path.resolve(dirName, 'files/fileToWrite.txt');

    const writerStream = createWriteStream(srcName);

    console.log('Write something to file. Press CTRL+C to exit');

    process.stdin.pipe(writerStream);

    writerStream.on('error', (error) => {
        console.error('Error writing to file:', error);
        writerStream.end();
    });
};

await write();