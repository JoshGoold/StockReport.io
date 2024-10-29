const path = require("path")
const traverseAndAppend = require('../../utils/traverse_and_append')
const fileName = "Overview";
const basePath = path.join(__dirname, "..", "..")
const filePath = path.join(basePath, "documents", `${fileName}.txt`)

async function fetch_overview(SYMBOL){
    try {
       const res = await fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${SYMBOL}&apikey=${process.env.API_KEY}`)
       const data = await res.json();
       await traverseAndAppend(data, "", filePath); 
    } catch (error) {
        console.error(`Error fetching (Overview Data): ${error}`) 
    } 
     
}


module.exports = fetch_overview
