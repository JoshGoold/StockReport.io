const express = require("express");
const path = require('path');
const fs = require('fs').promises; // Use fs.promises for promise-based functions
const compose = require("../../utils/compose_data");
const compose_document = require('./finalize_document');
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
            await compose(symbol); // Wait for compose to finish
            await compose_document(); // Wait for document finalization

            // Read the stock report file
            const data = await fs.readFile(filePath, "utf-8"); // Use await to read the file
            res.send(data); // Send the file data back to the client
        } catch (error) {
            console.error(`Error occurred: ${error.message}`);
            res.status(500).send("Server Error: failed to compose documents or read file");
        }
    } else {
        res.status(400).send("Bad Request: Symbol is required");
    }
});

// Route to download the report
route.get("/download-report", (req, res) => {
    res.download(filePath, "StockReport.txt", (err) => {
        if (err) {
            console.error(`Error downloading file: ${err}`);
            res.status(500).send("Error downloading file");
        }
        clear_directory()
    });
});

module.exports = route;
