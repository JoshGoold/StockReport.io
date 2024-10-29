const express = require("express");
const path = require('path');
const fs = require('fs').promises; // Use fs.promises for promise-based functions
const compose = require("../../utils/compose_data");
const clear_directory = require('../../utils/clear_directory')

const route = express.Router();

const basePath = path.join(__dirname, "..", "..");
const filePath = path.join(basePath, "documents", "StockReport.txt");

// POST route for stock report
route.post("/get-stock-report", async (req, res) => {
    const { symbol } = req.body;

    // Check if symbol is provided
    if (symbol && symbol.length > 0) {
        try {
            compose(symbol); // Wait for compose to finish
            res.send({Success: true, Message: "Report composed successfully!"}) // Send success message 
        } catch (error) {
            console.error(`Error occurred: ${error.message}`);
            res.status(500).send({Sucess: false, Message: "Server Error: failed to compose documents or read file"});
        }
    } else {
        res.status(400).send({Success: false, Message:"Bad Request: Symbol is required"});
    }
});

// Route to download the report
route.get("/download-report", (req, res) => {
    res.download(filePath, "StockReport.txt", (err) => {
        if (err) {
            console.error(`Error downloading file: ${err}`);
            res.status(500).send("Error downloading file");
        }
        // clear_directory()
    });
});

module.exports = route;
