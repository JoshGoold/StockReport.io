const path = require("path")
const traverseAndAppend = require('../../utils/traverse_and_append')
const fileName = "Sentiment";
const basePath = path.join(__dirname, "..", "..")
const filePath = path.join(basePath, "documents", `${fileName}.txt`)

async function fetch_sentiment(SYMBOL){
  try {
    const res = await fetch(`https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${SYMBOL}&apikey=${process.env.API_KEY}`)
    const data = await res.json()
    await traverseAndAppend(data, "", filePath);
  } catch (error) {
    console.error(`Error fetching (Sentiment Data): ${error}`) 
  }
  
   
}

module.exports = fetch_sentiment