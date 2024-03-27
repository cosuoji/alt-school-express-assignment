const express = require('express');
const bodyParser = require('body-parser');
const authorRoute = require('./routes/authors');

const PORT = 3000;
const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

app.use('/authors', authorRoute);


app.get('/', (req, res) => {
    res.end('Home Page');
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

