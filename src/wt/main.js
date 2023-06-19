import { Worker } from "node:worker_threads"
import { cpus } from "node:os"
import * as path from 'path';
import { fileURLToPath } from 'url';

const performCalculations = async () => {
    const dirName = path.dirname(fileURLToPath(import.meta.url));
    const workerPath = path.resolve(dirName, 'worker.js');
    const systemCpus = cpus();

    function createWorkerThread(workerData) {
        return new Promise((resolve, reject) => {
            const worker = new Worker(workerPath, { workerData });

            worker.on('message', (value)=>{
                resolve({status: 'resolved', data: value})
            });
            worker.on('error', (err)=>{
                resolve({status: 'error', data: null})
            });
            worker.on('exit', (code) => {
                if (code !== 0) {
                    reject(new Error(`Worker stopped with exit code ${code}`));
                }
            });
        });
    };

    const workerPromises = [];
    const initialN = 10;

    for (let i = 0; i < systemCpus.length; i++) {
        workerPromises.push(createWorkerThread({ n: initialN + i }));
    }

    Promise.allSettled(workerPromises)
        .then((results) => {
            console.log('Fibonacci results:', results.map(item=>item.value));
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

await performCalculations();