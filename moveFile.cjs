const fs = require('fs');
const path = require('path');

const currentPath = path.join(__dirname, 'build', '404', 'index.html');
const destinationPath = path.join(__dirname, 'build', '404.html');

fs.rename(currentPath, destinationPath, (err) => {
	if (err) {
		throw err;
	} else {
		console.log('Successfully moved the file!');
	}
});
