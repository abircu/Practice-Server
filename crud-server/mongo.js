/*
Mongodb connection 

1.create account 
2.create an user with password 
3.whitelist IP Adress 
4.database> connect> driver> node> view full code
5.change the password 

---------------------------
POST operation 
1.Create ---POST
2.app.post('users/'/async (req,res)=>{});
3. make the function function async to use await it;
4.Make sure you use the express.json() middleware;
5.access data from the body: const user;
6.const result =await userCollection.insertOne(doc);
7.res.sent(result);

---------------------------------
CLIENT side
1.create fetch 
2.add section parameter as an object 
3.provide method:'POST'
4.add headers:{'content-type':'application/json'}
5.add body:JSON.Stringify(user)

----------------------------------
READ Many
-----------------------------------
1.create a cursor =userCollection.find()
2.const result =await cursor.toArray()

--------------------------------
DELETE
1. create app.delete('/users/:id',async(req,res)=>{})
2.specify unique ObjectID to Delete the right user 
3.const query={_id:new ObjectID(id)}
4.const result =await userCollection.deleteOne(query)

-------------------------
Client

1.create dynamic url with id
2.mention the DELETE method 
*/ 