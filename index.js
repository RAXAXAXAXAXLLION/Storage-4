require("http").createServer((req,res)=>{
res.writeHead(200,{"content-type":"text/html"})
res.write('Hello world!')
res.end()
}).listen(process.env.PORT||3000)
require("nodejs-websocket").createServer((w)=>{}).listen("8888")
