const append_toFile = require('./append_to_file');

// Recursive function to traverse nested objects and arrays
async function traverseAndAppend(obj, parentKey = '', filePath) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            const fullKey = parentKey ? `${parentKey}.${key}` : key; // Construct full key path

            if (typeof value === 'object' && value !== null) {
                // If value is an object or array, recurse
                await traverseAndAppend(value, fullKey, filePath);
            } else {
                // Append each key-value pair to the file
                await append_toFile(fullKey, value, filePath);  // Await the append operation
            }
        }
    }
}

module.exports = traverseAndAppend;
