var express = require("express");
var app = express();
var path = require("path");

// app.get('/demos/:name', (req, res) => {
// 	const { name } = req.params
// 	res.sendFile(__dirname + `/demos/${name}/`)
// })



// var filePath = path.join(__dirname, 'relative/path/to/file');

// app.get("*",  (req, res) => {
// 	res.sendFile(path.join(__dirname, '/dist/index.html'))
// })

// app.use(express.static(path.join(__dirname, '/dist'))

















// latest

app.all("*", (req, res, next) => {
	console.log(" a request ")
	console.log(req.url)
	next()
})

// for some urls
app.use("/demos", (req, res, next) => {
	console.log(req.url);
	res.sendFile(path.join(__dirname, `/dist/demos${req.url}index.html`))
});


app.use("/", express.static(path.join(__dirname, 'dist')))

// for all others
// app.use((req, res, next) => res.sendFile(path.join(__dirname, "dist/index.html")));

var server = app.listen(8080, function() {
	var { host, port } = server.address(); console.log(`listening at http://${host}:${port}`);
});
