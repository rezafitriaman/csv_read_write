let express = require('express');
//var bodyParser = require('body-parser');
//let readCsv = require("./read");
const csv = require('csv-parser');
const fs = require('fs');
const app = express();
const port = 2360;

// create application/json parser
//var jsonParser = bodyParser.json();

//app.get('/', jsonParser, (req, res) => res.send(readCsv))

app.use(express.static('./'));
app.get('/', function(req, res) {
	//res.render('./index.html');
	res.render("index.html")
});

app.get('/csv', function(req, res) {
	const array = [];
	fs.createReadStream(__dirname +'/csv/NS_BC_TOUCH_AND_TELL.csv')
		.pipe(csv())
		.on('data', (row) => {
			let readedCsv = JSON.stringify(row);
			array.push(readedCsv);
		})
		.on('end', () => {
			console.log('CSV file successfully processed');
			res.send(array);
		});
});

app.get('/script.js', function(req, res) {
	//res.render('./index.html');
	res.render("/script.js")
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
