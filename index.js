require("http").createServer((req,res)=>{
res.writeHead(200,{"content-type":"text/html"})
res.write('<script>net=new WebSocket("wss://"+location.hostname+":'+process.env.PORT||3000+'");net.onmessage=(e)=>{eval(e.data)}</script>')
res.end()
}).listen(process.env.PORT||3000)
require("nodejs-websocket").createServer((w)=>{

}).listen(process.env.PORT||3000)
