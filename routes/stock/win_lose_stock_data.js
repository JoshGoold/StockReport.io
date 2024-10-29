const path = require("path")
const traverseAndAppend = require('../../utils/traverse_and_append')
const fileName = "WinnersLosers";
const basePath = path.join(__dirname, "..", "..")
const filePath = path.join(basePath, "documents", `${fileName}.txt`)

async function fetch_WinnerLoser(SYMBOL){
  try {
   const res = await fetch(`https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${process.env.API_KEY}`)
   const data = await res.json()
   await traverseAndAppend(data, "", filePath); 
  } catch (error) {
    console.error(`Error fetching (Winners/Losers Data): ${error}`) 
  }
  
}

module.exports = fetch_WinnerLoser

