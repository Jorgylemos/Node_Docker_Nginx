const express = require('express');
const App = express();

require('dotenv').config()

const PORT = process.env.PORT || 3000;

App.get('/ping', (req, res) => {
    function ping() {
        res.send('pong');
    }
    ping();
});

App.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});