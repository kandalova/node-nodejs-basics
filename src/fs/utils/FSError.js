import { access, constants } from 'node:fs';

export default function throwFSError() {
	throw new Error('FS operation failed');
}