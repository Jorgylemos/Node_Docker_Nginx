const express = require('express');
const App = express();

require('dotenv').config()

const PORT = process.env.PORT || 3000;

App.get('/calc', (req, res) => {
    res.status(200).json({
        res: 'calc está funcionando! Versão 1.0'
    });
});

App.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});