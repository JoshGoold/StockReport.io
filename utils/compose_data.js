const earnings = require('../routes/stock/stock_earnings')
const global_quotes = require('../routes/stock/stock_global_quote')
const overview = require('../routes/stock/stock_overview')
const sentiment = require('../routes/stock/stock_sentiment')
const winners_losers = require('../routes/stock/win_lose_stock_data')
const compose_document = require('../routes/server/finalize_document');


const funcs = [sentiment, earnings, global_quotes, overview, winners_losers]

async function compose(SYMBOL){
  try {
    for(const fn of funcs){
      await fn(SYMBOL)
    }
  } catch (error) {
    console.error(`Error during compose: ${error}`)
  }
  finally{
    compose_document()
  }
  
  
}

module.exports = compose

