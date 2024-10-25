const fs = require('fs');

function append_finalized_data(filePath, data) {
    try {
        data.forEach(innerArray => {
            if (innerArray.length === 2) { // Ensure there are exactly two elements
                const structuredRow = `${innerArray[0]}: ${innerArray[1]}\n\n`; // Format as key: value
                fs.promises.appendFile(filePath, structuredRow)
                    .catch(error => console.error(`Error appending finalized data: ${error}`));
            } else if (innerArray.length === 1) { // Handle cases where there's only one element
                const structuredRow = `${innerArray[0]}: \n`; // Value is empty
                fs.promises.appendFile(filePath, structuredRow)
                    .catch(error => console.error(`Error appending finalized data: ${error}`));
            }
        });
    } catch (error) {
        console.error(`Error occurred in append_finalized_data function: ${error}`);
    }
}

module.exports = append_finalized_data;