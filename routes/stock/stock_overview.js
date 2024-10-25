const path = require("path")
const traverseAndAppend = require('../../utils/traverse_and_append')
const fileName = "Overview";
const basePath = path.join(__dirname, "..", "..")
const filePath = path.join(basePath, "documents", `${fileName}.txt`)

function fetch_overview(SYMBOL){
   fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${SYMBOL}&apikey=${process.env.API_KEY}`)
    .then(res => res.json())
    .then(data => {
        traverseAndAppend(data, "", filePath);
    })
    .catch(e => console.error(`Error fetching (Overview Data): ${e}`))  
}


module.exports = fetch_overview
