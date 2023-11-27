const express = require('express');
const app = express();
const port = 3000;

import menuJson from '../../../public/images/cloudpot-menu/menuJson.json'

const menu = menuJson;

// Endpoint to get the entire menu
app.get('/api/menu', (req, res) => {
    res.json(menu);
});

// Endpoint to get a specific menu item by ID
app.get('/api/menu/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const menuItem = menu.find(item => item.STT === itemId);

    if (menuItem) {
        res.json(menuItem);
    } else {
        res.status(404).json({ error: 'Item not found' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
