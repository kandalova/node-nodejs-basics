import { fork } from "node:child_process"
import * as path from 'path';
import { fileURLToPath } from 'url';

const spawnChildProcess = async (args) => {
    const dirName = path.dirname(fileURLToPath(import.meta.url));
    const scriptPath = path.resolve(dirName, 'files/script.js');

    const childProcess = fork(scriptPath, args, { stdio: 'pipe' });
    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
