const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the "public" directory (or wherever your HTML files are)
app.use(express.static(path.join(__dirname, 'public')));

// Example route
app.get('/api/versions', (req, res) => {
    res.json({
        "versions": ["v1", "v2", "v3"],
        "language": "NodeJS",
        "memoryUsage": 8.68,
        "project": {
            "name": "bare-server-node",
            "description": "TOMPHTTP NodeJS Bare Server",
            "repository": "https://github.com/tomphttp/bare-server-node",
            "version": "2.0.3"
        }
    });
});

// Serve the index.html on the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
