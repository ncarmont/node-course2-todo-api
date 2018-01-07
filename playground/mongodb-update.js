// const MongoClient = require('mongodb').MongoClient;
const {
  MongoClient,
  ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to MongoDB server');

// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID('5a510bee8cf1094482a54330')
// },{
//   $set: {
//     completed: true
//   }
// },{
//   returnOriginal: false
// }).then((result)=> {
//   console.log(result);
// });


db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('5a50fe36c2bb8c53a9a5c2b5')
},{
  $set: {
    name: 'Nick'
  },
  $inc: {
    age: 1
  }
},{
  returnOriginal: false
}).then((result)=> {
  console.log(result);
});

  //  db.close();
});
