const express =require('express')
const cors=require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');
const port =process.env.PORT || 5000

const app=express();

app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send("Welcome to Bike Bazaar")
})



const uri = `mongodb+srv://bikebazaar:8gtXNp6c3UXolnMd@cluster0.gjamq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

console.log(uri)
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

    const AprilliaCollection=client.db("bikeBazaar").collection("Aprillia");
    // Connect the client to the server	(optional starting in v4.7)
   // await client.connect();
    // Send a ping to confirm a successful connection

    
    //get all the Aprillia bike 
    app.get('/aprillia',async(req,res)=>{
        const result=await AprilliaCollection.find().toArray()
        res.send(result);
    })
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
   // await client.close();
  }
}
run().catch(console.dir);


app.listen(port,()=>{
    console.log(`Server is running from the port :${port}`)
})

