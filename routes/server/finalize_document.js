
const append_Finalized = require('../../utils/append_finalized')
const path = require("path")
const processEarnings = require('../../utils/stock/processEarnings');
const processGlobalQuote = require('../../utils/stock/processGlobalQuote');
const processOverview = require('../../utils/stock/processOverview');
const processSentiment = require('../../utils/stock/processSentiment');
const processWinLoss = require('../../utils/stock/processWinLoss');

const basePath = path.join(__dirname, "..", "..")
const filePath = path.join(basePath, "documents", "StockReport.txt")


// Define routes as an object of key-function pairs
const funcs = {
    "Overview": processOverview,
    "GlobalQuote": processGlobalQuote,
    "Sentiment": processSentiment,
    "Earnings": processEarnings,
    "WinnersLosers": processWinLoss
};

async function create_Documents(){
    Object.entries(funcs).forEach( async ([key, handler]) => {
        try {
            const data = await handler(); 
            append_Finalized(filePath, data)
        } catch (error) {
            console.error(`Error occurred while creating document - ${key} function: ${error}`);
            res.status(500).send(`Error processing ${key}`);
        }
    });
}


module.exports = create_Documents;