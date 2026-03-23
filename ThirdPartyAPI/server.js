const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

// Endpoint to get details for a specific game
app.get('/api/game/:id', async (req, res) => {
    try {
        const appId = req.params.id;
        const response = await axios.get(`https://store.steampowered.com/api/appdetails?appids=${appId}`);

        // Steam returns data in a format like { "440": { "success": true, "data": {...} } }
        const gameData = response.data[appId];

        if (gameData && gameData.success) {
            res.json(gameData.data);
        } else {
            res.status(404).json({ error: "Game not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "API connection failed" });
    }
});

app.listen(PORT, () => console.log(`Server: http://localhost:${PORT}`));