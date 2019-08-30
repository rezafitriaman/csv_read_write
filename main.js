var browserSync = require('browser-sync').create();
var express = require('express');
var bodyParser = require('body-parser')
var readCsv = require("./read");


const app = express()
const port = 3000


// create application/json parser
var jsonParser = bodyParser.json()

//app.get('/', jsonParser, (req, res) => res.send(readCsv))

app.use(express.static('./'));
app.get('/', function(req, res) {
	res.render('./index.html');
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
