

const { MongoClient } = require('mongodb');
const mongodb = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'Proj-2';


  // Use connect method to connect to the server
   client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
//   const collection = db.collection('user1')

// db.collection('user1').insertOne({
//     fname:"mahmoud",
//     lname:"albardan",
//     city:"damascus",
//     age:25
// }
// ,(error,data)=>{
//     if(error){
//         console.log("unable to insert")
//     }
//     console.log(data.insertedId)
// })
// db.collection('user1').insertOne({
//     fname:"rasha",
//     lname:"mohamed",
//     city:"aleppo",
//     age:35
// }
// ,(error,data)=>{
//     if(error){
//         console.log("unable to insert")
//     }
//     console.log(data.insertedId)
// })

const doc = [
    
                {
                    fname:"nader",
                    lname:"mohamed",
                    city:"aleppo",
                    age:33},
                {
                    fname:"fayez",
                    lname:"mohamed",
                    city:"aleppo",
                    age:30},
                {
                    fname:"ahmed",
                    lname:"mohamed",
                    city:"aleppo",
                    age:44},
                {
                    fname:"moamen",
                    lname:"mohamed",
                    city:"aleppo",
                    age:40},
                {
                    fname:"radiaa",
                    lname:"mohamed",
                    city:"aleppo",
                    age:20},
                {
                    fname:"omr",
                    lname:"mohamed",
                    city:"aleppo",
                    age:25},
                {
                    fname:"kassem",
                    lname:"mohamed",
                    city:"aleppo",
                    age:25},
                {
                    fname:"mudather",
                    lname:"mohamed",
                    city:"aleppo",
                    age:25},
                {
                    fname:"hany",
                    lname:"mohamed",
                    city:"aleppo",
                    age:25},
                {
                    fname:"jasem",
                    lname:"mohamed",
                    city:"homs",
                    age:25},
                ]

//   db.collection('user1').insertMany(doc,(error , data)=>{
//             if(error){
//                 console.log("unable to insert")
//             }
//             console.log(data.insertedCount)
//         })
        ////find
        // db.collection('user1').find({age:25}).toArray ((error,users)=>{
        //     if(error){ return console.log("unable to find")}
        //     console.log(users)
        // })
                //////////find with condition
        // db.collection('user1').find({age:25}).limit(3).toArray ((error,users)=>{
        //     if(error){return console.log("unable to find")}
        //     console.log(users)
        // })
        //     //////////count with condition
        // db.collection('user1').find({age:25}).count ((error,users)=>{
        //     if(error){return console.log("unable to find")}
        //     console.log(users)
        // })

        // modify count count on how many documnet updated

        //update one

        db.collection("user1").updateOne({_id:mongodb.ObjectId("64d7eeddaca87bd9d6131dc2")},{
            $set:{fname:"name updated"},
            $inc:{age:4}
        
        }). then((data1)=> {console.log(data1.modifiedCount)})
          .catch((error)=> {console.log(error)})
          ////////////////inc many

          db.collection("user1").updateMany({},{
            $inc:{age:10}
        
        }). then((data2)=> {console.log(data2.modifiedCount)})
          .catch((error)=> {console.log(error)})

          ///// delete one

    db.collection("user1").deleteOne({_id:mongodb.ObjectId("64d7eeddaca87bd9d6131dc3")})
      .then((data1) =>{console.log(data1.deletedCount)})
      .catch((error)=> console.log(error))

      ///delete many

      db.collection("user1").deleteMany({age:35})
      .then((data3) =>{console.log(data3.deletedCount)})
      .catch((error)=> console.log(error))
