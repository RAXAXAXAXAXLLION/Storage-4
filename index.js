require("socket.io").listen(
require("http").createServer((req,res)=>{
res.writeHead(200,{"content-type":"text/html"})
res.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.3/socket.io.js"></script>')
res.write('<script>io().on("msg",()=>{eval(e.script)})</script>')
res.end()
}).listen(process.env.PORT || 3000)
).on("connection",(window)=>{
window.emit('msg',{script:'alert("Hello world!")'})
})
