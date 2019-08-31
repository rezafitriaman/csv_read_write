const csv = require('csv-parser');
const fs = require('fs');

const array = [];

	fs.createReadStream('../NS_BC_TOUCH_AND_TELL.csv')
		.pipe(csv())
		.on('data', (row) => {

		let readedCsv = JSON.stringify(row);

		exports.readedCsv = readedCsv;

		array.push(readedCsv);
		console.log('read', readedCsv);
	})
	.on('end', () => {
			console.log('CSV file successfully processed');
		console.log(array)
		fs.writeFileSync('csv.js', 'var csvObj = [' + array + ']');
	});


