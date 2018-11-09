const express = require('express');
const app = express();
const XLSX = require('xlsx');
const workbook = XLSX.readFile('Indicadores.xlsx');
const sheet_name_list = workbook.SheetNames;

app.get('/', function (req,res) {
	
	res.status(200).send("Hello world");
});

app.get('/api/file', function (req,res) {
	res.status(200).send(XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]))
})

app.listen(8080);