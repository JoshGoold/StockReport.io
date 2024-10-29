const fs = require('fs');

async function append_finalized_data(filePath, data) {
    try {
        const appendOperations = data.map(async innerArray => {
            if (innerArray.length === 2) { // Ensure there are exactly two elements
                const structuredRow = `${innerArray[0]}: ${innerArray[1]}\n\n`; // Format as key: value
                await fs.promises.appendFile(filePath, structuredRow);
            } else if (innerArray.length === 1) { // Handle cases where there's only one element
                const structuredRow = `${innerArray[0]}: \n`; // Value is empty
                await fs.promises.appendFile(filePath, structuredRow);
            }
        });

        await Promise.all(appendOperations);
    } catch (error) {
        console.error(`Error occurred in append_finalized_data function: ${error}`);
    }
}

module.exports = append_finalized_data
