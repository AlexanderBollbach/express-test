var express = require('express');
var app = express();




var server = app.listen(8080, function () {
   var {host, port} = server.address()
   console.log(`listening at http://${host}:${port}`)
})



app.use(express.static('./dist'));




// app.get("demos", (req,res) => {
// 	console.log("demos")
// 	res.sendFile(__dirname + "/dist/index.html")
// })

// app.get("demos/:name", (req,res) => {
// 	console.log("demos/:name")
// 	const { name } = req.params
// 	res.sendFile(__dirname + `./demos/${name}.html`);

// })
