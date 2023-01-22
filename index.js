const fs = require("fs");
const http = require("http");
let Your_Name = "Abhishek Verma";
fs.writeFile("index.html", `<h1> Hello World </h1>
<p> This is ${Your_Name}... </p>`,
()=>{

})
const server = http.createServer((req, res)=>{
    
    fs.readFile('index.html', (err, data)=>{
        res.writeHead(200,{
            "Content-type":"text/html",
            
           })
           console.log(err)
       res.write(data)
        res.end();
    })

    
})
server.listen(5000, ()=>{console.log("server started")})