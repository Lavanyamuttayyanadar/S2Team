// index.js
const express = require('express');

const app = express();
app.use(express.json());

app.post('/mytest', (req, res) => {
    console.log('Got body:', req.body);
    res.sendStatus(200);
});

app.listen(8080, () => console.log(`Started server at http://localhost:8080!`));