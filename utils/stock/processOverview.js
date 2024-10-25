const path = require('path')
const fs = require('fs')
const convert_toArray = require('../convert_array')

const basePath = path.join(__dirname, "..", "..")
const filePath = path.join(basePath, "documents", "Overview.txt")

async function processOverview(){
    try {
        const data = await fs.promises.readFile(filePath, 'utf-8'); // Read file with promises
        const arr = convert_toArray(data.toString()); // Convert data to array
        return arr; // Return the array as expected
    } catch (error) {
        console.error(`Error Occured while processing earings: ${error}`)
    }
}

module.exports = processOverview