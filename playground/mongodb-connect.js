// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'something to do',
  //   completed: false
  // }, (err,result)=>{
  //
  //   if(err){
  //     return console.log ('Unable to insert todo',err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // })


  //insert new doc into USers [name, age, location]


  // db.collection('Users').insertOne({
  //   name: 'Nick',
  //   age: 19,
  //   location: 'Edinburgh'
  // }, (err, res) => {
  //
  //   if (err) {
  //     return console.log('Unable to insert user', err);
  //   }
  //   console.log(res.ops[0]._id.getTimestamp());
  // });

  db.close();
});
