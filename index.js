const express = require('express');
const exphbs = require('express-handlebars');
const pizza = require('./function')

const app = express();
const PORT = process.env.PORT || 3017;

// enable the req.body object - to allow us to use HTML forms
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// enable the static folder...
app.use(express.static('public'));

// add more middleware to allow for templating support

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


const pizzaInsta = pizza();


app.get('/', function (req, res) {

	res.render('index', {
		total: 'R' + pizzaInsta.grandTotal(),
	});

});

app.post('/smallCount', function (req, res) {
	var qty1 = pizzaInsta.qtySmall();

	res.render('index', {
		small: qty1,
		smallprice: 'R' + pizzaInsta.priceForSmall(),
		total: 'R' + pizzaInsta.grandTotal(),

	})
});

app.post('/mediumCount', function (req, res) {
	var qty2 = pizzaInsta.qtyMedium();

	res.render('index', {
		medium: qty2,
		mediumprice: 'R' + pizzaInsta.priceForMedium(),
		total: 'R' + pizzaInsta.grandTotal(),

	})
});

app.post('/largeCount', function (req, res) {
	var qty3 = pizzaInsta.qtyLarge();

	res.render('index', {
		large: qty3,
		largeprice: 'R' + pizzaInsta.priceForLarge(),
		total: 'R' + pizzaInsta.grandTotal(),

	})
});

app.post('/addSmall', function (req, res) {
	var qty1 = pizzaInsta.qtySmall();

	res.render('index', {
		small: qty1,
		smallprice: 'R' + pizzaInsta.priceForSmall(),
		total: 'R' + pizzaInsta.grandTotal(),

	})
});

app.post('/addMedium', function (req, res) {
	var qty2 = pizzaInsta.qtyMedium();

	res.render('index', {
		medium: qty2,
		mediumprice: 'R' + pizzaInsta.priceForMedium(),
		total: 'R' + pizzaInsta.grandTotal(),

	})
});

app.post('/addLarge', function (req, res) {
	var qty3 = pizzaInsta.qtyLarge();

	res.render('index', {
		large: qty3,
		largeprice: 'R' + pizzaInsta.priceForLarge(),
		total: 'R' + pizzaInsta.grandTotal(),

	})
});

app.post('/minusSmall', function (req, res) {
	var qty1 = pizzaInsta.qtySmallMinus();

	res.render('index', {
		small: qty1,
		smallprice: 'R' + pizzaInsta.priceForSmall(),
		total: 'R' + pizzaInsta.grandTotal(),
	})
});

app.post('/minusMedium', function (req, res) {
	var qty1 = pizzaInsta.qtyMediumMinus();

	res.render('index', {
		medium: qty1,
		mediumprice: 'R' + pizzaInsta.priceForMedium(),
		total: 'R' + pizzaInsta.grandTotal(),
	})
});

app.post('/minusLarge', function (req, res) {
	var qty1 = pizzaInsta.qtyLargeMinus();

	res.render('index', {
		large: qty1,
		largeprice: 'R' + pizzaInsta.priceForLarge(),
		total: 'R' + pizzaInsta.grandTotal(),
	})
});

app.post('/orders', function (req, res) {

	res.render('actions')
});



// start  the server and start listening for HTTP request on the PORT number specified...
app.listen(PORT, function () {
	console.log(`App started on port ${PORT}`)
});