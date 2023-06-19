import { writeFile } from 'node:fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import throwFSError from './utils/FSError.js';

const create = async () => {
  const data = 'I am fresh and young';
  const dirName = path.dirname(fileURLToPath(import.meta.url));
  const fileName = path.resolve(dirName, 'files/fresh.txt');

  writeFile(fileName, data, { flag: 'wx' }, (err) => {
    if (err) {
      throwFSError();
    }
    console.log('The file has been saved!');
  });
};

await create();