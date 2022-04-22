const express = require('express');
const App = express();

require('dotenv').config()

const PORT = process.env.PORT || 3000;

App.get('/sub', (req, res) => {
    var op1 = `${req.query.op1}`
    var op2 = `${req.query.op2}`

    function soma(op1, op2) {
        var total = +op1 - +op2;

        res.json({
            op1,
            op2,
            total
        });
    }
    soma(op1, op2);
});

App.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});