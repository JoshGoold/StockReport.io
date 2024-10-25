
const fs = require("fs")

function append_toFile(key, value, filePath){
    const data = `|\n${key}\n${value}\n`
    try {
        fs.appendFile(filePath, data, (error) => {
            if (error) {
                console.error("Error occurred in append_toFile function:", error);
            } else {
                console.log(`Data successfully appended to ${filePath}`);
            }
        });
    } catch (error) {
        console.error("Error occured in append_toFile function: ",error)
    }
}

module.exports = append_toFile