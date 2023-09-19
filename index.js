const express = require("express");

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

// app.post('/bfhl', (req, res) => {
//     console.log(res.body);
//     res.send(req.body);
// });

app.get('/bfhl', (req, res) => {
    res.send({'operation_code': 1});
});

app.listen(5000, (err) => {
    console.log("Listening...")
})