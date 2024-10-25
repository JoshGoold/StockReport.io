const path = require("path")
const traverseAndAppend = require('../../utils/traverse_and_append')
const fileName = "WinnersLosers";
const basePath = path.join(__dirname, "..", "..")
const filePath = path.join(basePath, "documents", `${fileName}.txt`)

function fetch_WinnerLoser(SYMBOL){
  fetch(`https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${process.env.API_KEY}`)
    .then(res => res.json())
    .then(data => {
      
      traverseAndAppend(data, "", filePath);

    })
    .catch(e => console.error(`Error fetching (Winners/Losers Data): ${e}`))   
}

module.exports = fetch_WinnerLoser

