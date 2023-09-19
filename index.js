const express = require("express");
const bodyParser = require('body-parser');

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

app.use(bodyParser.json());

app.post('/bfhl', (req, res) => {
    let arr = req.body.data;
    let nums = [];
    let alpha = [];

    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i]) === false) {
            nums.push(arr[i]);
        }
        else {
            alpha.push(arr[i]);
        }
    }

    let highest = alpha.sort().pop();

    res.send({
        "is_success": true,
        "user_id": "subhendudash02",
        "email": "subhendu.dash2020@vitstudent.ac.in",
        "roll_number": "20BEE1004",
        "numbers": nums,
        "alphabets": alpha,
        "highest_alphabet": [highest]
    });
});

app.get('/bfhl', (req, res) => {
    res.send({'operation_code': 1});
});

app.listen(5000, (err) => {
    console.log("Listening...")
})