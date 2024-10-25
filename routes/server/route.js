const express = require("express");
const route = express.Router();
const processEarnings = require('../../utils/stock/processEarnings');
const processGlobalQuote = require('../../utils/stock/processGlobalQuote');
const processOverview = require('../../utils/stock/processOverview');
const processSentiment = require('../../utils/stock/processSentiment');
const processWinLoss = require('../../utils/stock/processWinLoss');

// Define routes as an object of key-function pairs
const routes = {
    "Earnings": processEarnings,
    "GlobalQuote": processGlobalQuote,
    "Overview": processOverview,
    "Sentiment": processSentiment,
    "WinnersLosers": processWinLoss
};

// Dynamically create routes for each entry
Object.entries(routes).forEach(([key, handler]) => {
    route.get(`/${key}`, async (req, res) => {
        try {
            const data = await handler(); // Assuming each handler returns data
            res.send(data);
        } catch (error) {
            console.error(`Error occurred while creating Route - ${key} function: ${error}`);
            res.status(500).send(`Error processing ${key}`);
        }
    });
});

module.exports = route;