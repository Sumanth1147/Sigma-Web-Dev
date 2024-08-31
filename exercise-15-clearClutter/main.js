// File: organizeDirectory.js

const fs = require('fs');
const path = require('path');

function organizeFiles(directory) {
    // Read all files from the given directory
    const files = fs.readdirSync(directory);

    files.forEach(file => {
        const filePath = path.join(directory, file);

        // Check if the current path is a file (not a directory)
        if (fs.lstatSync(filePath).isFile()) {
            const ext = path.extname(file).slice(1); // Get the file extension without the dot

            if ( ext !== 'js' && ext !== 'json') {
                // Create a new directory for the file extension if it doesn't exist
                const newDir = path.join(directory, ext);
                if (!fs.existsSync(newDir)) {
                    fs.mkdirSync(newDir);
                }
    
                // Move the file to the new directory
                const newFilePath = path.join(newDir, file);
                fs.renameSync(filePath, newFilePath);
            }
        }
    });
}

// Usage
const directoryPath = __dirname; // Replace with the path to your directory
organizeFiles(directoryPath);

console.log('Files have been organized.');

