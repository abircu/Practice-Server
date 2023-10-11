
const express=require('express');
const cors=require('cors')
const app=express();
const port=process.env.PORT || 3000;
// middleWare
app.use(cors())
app.use(express.json());

const users=[
    {id:1,name:'sabana',email:'sabana@gmail.com'},
    {id:2,name:'jabana',email:'jabana@gmail.com'},
    {id:3,name:'kabana',email:'kabana@gmail.com'},
    {id:4,name:'nabana',email:'nabana@gmail.com'},
    {id:5,name:'pabana',email:'pabana@gmail.com'},
    {id:6,name:'mabana',email:'mabana@gmail.com'},
    {id:7,name:'gabana',email:'gabana@gmail.com'},
]

app.get('/',(req,res)=>{
    res.send('User management server is running')
});

app.get('/users',(req,res)=>{
    res.send(users);
});

app.post('/users',(req,res)=>{
    console.log('post api hitting')
    console.log(req.body); 
    const entryUser=req.body;
    entryUser.id= users.length+1; 
    users.push(entryUser);
    res.send(entryUser);
})

app.listen(port,()=>{
    console.log(`Server is runing on port:${port}`)
})