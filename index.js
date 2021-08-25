let express=require('express');
let http=require('http');

let app=express();

let server=http.createServer(app);

app.get('/',(req,res)=>{
  res.send("WELCOME TO NODE JS");
});

let port=process.env.PORT || 80;

server.listen(port,()=>console.log(`server started at port ${port}`));
