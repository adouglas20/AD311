const express = require('express');
const dogFacts = require('./dog_facts.js');
const app = express();
const PORT = 3000;

app.get('/facts', (req, res) => {
    try {
        const { number } = req.query;

        // If no number is provided, return all facts
        if (!number) {
            return res.status(200).json({
                facts: dogFacts,
                success: true
            });
        }

        // Parse number and validate it is an integer
        const count = parseInt(number);

        if (isNaN(count) || count < 0) {
            return res.status(400).json({
                success: false,
                message: "Invalid request: 'number' must be a non-negative integer."
            });
        }

        // Slice the array to return the requested amount
        const slicedFacts = dogFacts.slice(0, count);

        res.status(200).json({
            facts: slicedFacts,
            success: true
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
});

app.listen(PORT, () => {
    console.log(`Dog Fact Server is running on http://localhost:${PORT}`);
});