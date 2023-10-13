const  express=require('express');
const cors=require('cors');
const app=express();
const port=process.env.PORT ||5000;
// midleware
app.use(cors());
app.use(express.json());

// mongodb setup 

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://mdabircse4873:lYmwyxr3rUd1vTK1@cluster0.wj189yg.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
  
    const usersCollection=client.db('usersDB').collection('users');
    app.get('/users',async(req,res)=>{
        const cursor=usersCollection.find()
        const result=await cursor.toArray();
        res.send(result);
    })
    
    app.post('/users',async(req,res)=>{
        const user=req.body;
        console.log('new user',user);
        // const result=await usersCollection.insertOne(user);
        // res.send(result);
        const result=await usersCollection.insertOne(user);
        res.send(result);
    })
    // Delete operations o
    app.delete('/users/:id', async(req,res)=>{
        const id=req.params.id;
        console.log('please delete id',id);
        const query={_id: new ObjectId(id)}
        const result= await usersCollection.deleteOne(query);
        res.send(result)
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/',(req,res)=>{
    res.send('simple CRUD is running ');
})
app.listen(port,()=>{
    console.log(`simple crud is running on port,${port}`)
})