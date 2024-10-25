const fs = require('fs');
const path = require('path');

const basePath = path.join(__dirname, ".."); // Adjust as needed
const documentsDir = path.join(basePath, "documents"); // Path to your documents directory

// Function to delete all files in the documents directory
function clearDocumentsDirectory() {
    fs.readdir(documentsDir, (err, files) => {
        if (err) {
            console.error(`Error reading documents directory: ${err}`);
            return;
        }

        // Loop through each file in the directory
        files.forEach(file => {
            const filePath = path.join(documentsDir, file);
            fs.unlink(filePath, (err) => {
                if (err) {
                    console.error(`Error deleting file ${file}: ${err}`);
                } else {
                    console.log(`Deleted file: ${file}`);
                }
            });
        });
    });
}

module.exports = clearDocumentsDirectory