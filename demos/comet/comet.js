var http = require("http")
var fs = require('fs')
http.createServer(function(req,res){
	if(~req.url.indexOf('html')) {
		fs.createReadStream('./comet.html').pipe(res)
		return;
	}
	if(~req.url.indexOf('data')){
		res.write("123")
		let n = 0;
		let t = setInterval(function(){
			res.flushHeaders()
			res.write('456')
			if(n++ == 3) {
				clearInterval(t)
				res.end('789')
			}
		},1000)
	}
}).listen(3030)