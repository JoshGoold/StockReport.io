const path = require("path")
const traverseAndAppend = require('../../utils/traverse_and_append')
const fileName = "Earnings";
const basePath = path.join(__dirname, "..", "..")
const filePath = path.join(basePath, "documents", `${fileName}.txt`)

async function fetch_earnings(SYMBOL) {
    try {
      const res = await fetch(`https://www.alphavantage.co/query?function=EARNINGS&symbol=${SYMBOL}&apikey=${process.env.API_KEY}`);
      const data = await res.json();
      await traverseAndAppend(data, "", filePath);  
    } catch (error) {
        console.error(`error fetching earnings: ${error}`)
    }
    
}



module.exports = fetch_earnings


