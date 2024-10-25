const path = require("path")
const traverseAndAppend = require('../../utils/traverse_and_append')
const fileName = "GlobalQuote";
const basePath = path.join(__dirname, "..", "..")
const filePath = path.join(basePath, "documents", `${fileName}.txt`)

function fetch_global(SYMBOL){
   fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${SYMBOL}&apikey=${process.env.API_KEY}`)
    .then(res => res.json())
    .then(data => {
        traverseAndAppend(data, "", filePath);
    })
    .catch(e => console.error(`Error fetching (Global Quote Data): ${e}`))  
}


module.exports = fetch_global




