var http=require('http');
const express =require('express');
const app =express();
const cors =require('cors')

// let data=[
//     {id:1,name:"shubham",age:22,email:"tbn@gmail.com"},
//     {id:2,name:"udit",age:25,email:"udit@gmail.com"},
//     {id:3,name:"piyush",age:24,email:"tbn@gmail.com"},
//     {id:4,name:"aaksh",age:18,email:"aksh@gmail.com"}
// ];

app.use(
    cors({
        origin: "http://localhost:3000"
    })
)

// http.createServer(function(req,res){
//     res.writeHead(201,{"Content-Type":"application\json"})
//     res.write(JSON.stringify(data));
//     res.end();
// }).listen(8080)
app.get('/',(req,res)=>{
    res.json([
        {
          id: 1,
          name: "shubham",
          lname:"rana",
          email:"tbn@gmail.com",
         },
        {
            id: 1,
          name: "udit",
          lname:"tyagi",
          email:"dehchand@gmail.com",
        }
    ]);
})
app.listen(8080,()=>{
    console.log("listining........");
})