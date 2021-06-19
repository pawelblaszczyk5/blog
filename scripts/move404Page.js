import { rename } from 'fs';
import { join } from 'path';

const currentPath = join('./', 'build', '404', 'index.html');
const destinationPath = join('./', 'build', '404.html');

rename(currentPath, destinationPath, (err) => {
	if (err) {
		throw err;
	} else {
		console.log('Successfully moved the 404 file!');
	}
});
