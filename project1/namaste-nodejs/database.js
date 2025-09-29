const {MongoClient} = require("mongodb")
const url = "mongodb+srv://yadavravi6451:lTBWYVx3XbtSVcXI@namastenodejs.cyviaht.mongodb.net/";
const client = new MongoClient(url);
const dbName = "HelloWorld";

async function main(){
    await client.connect();
    console.log("Connected Successfully to server");
    const db = client.db(dbName);
    const collection = db.collection('User');
   //How to inser Data in DataBase
   const data = {
    "first_name":"Ranjeet Yadav",
    "last_name":"Yadav",
    "city":"Delhi",
    "country":"India"
   }
    const insertResult = await
    collection.insertMany([data]);
    console.log('Inserted documents =>', insertResult);

    
    // Read Data from DataBase
    const findResult = await
    collection.find({}).toArray(); // empty object means find everything in database
    console.log("Found Documents =>",findResult)
    return 'done';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());