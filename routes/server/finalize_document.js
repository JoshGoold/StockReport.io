
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

async function create_Documents() {
    for (const [key, handler] of Object.entries(funcs)) {
        try {
            const data = await handler(); // Wait for the handler to complete
            append_Finalized(filePath, data); // Append the finalized data
        } catch (error) {
            console.error(`Error occurred while creating document - ${key} function: ${error}`);
            throw new Error(`Error processing ${key}`); // Rethrow error to be caught in the route
        }
    }
}


module.exports = create_Documents;