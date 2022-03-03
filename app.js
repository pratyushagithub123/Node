require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });
const http = require('http');
let express = require('express');
let app = express();

app.use('/', (req, res)=>{
	console.log(req)
	res.send({'helloworld': process.env.NODE_ENV})
});


const server = http.createServer(app);
const confirmationCallback = () => {
	console.log('Server is running..');
}
server.listen(process.env.PORT, confirmationCallback);

