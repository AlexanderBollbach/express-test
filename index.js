var express = require('express');
var app = express();


// app.get('/demos/:name', (req, res) => {
// 	const { name } = req.params
// 	res.sendFile(__dirname + `/demos/${name}/`)
// })

app.use(express.static('./dist'));

var server = app.listen(8080, function () {
   var {host, port} = server.address()
   console.log(`listening at http://${host}:${port}`)
})

app.get("*",  (req, res) => {
	res.sendFile(__dirname + "/dist/index.html")
})





