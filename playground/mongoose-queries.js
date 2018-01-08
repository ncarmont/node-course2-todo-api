const {ObjectID} = require('mongodb');

const {mongoose} =require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

var id = '5a5247125badda935eb7a421';


//
// if(!ObjectID.isValid(id)){
//   console.log('id not valid');
// }
//
//
// // Todo.find({
// //   _id: id
// // }).then((todos) => {
// //   console.log('Todos', todos);
// // })
// //
// // Todo.findOne({
// //   _id: id
// // }).then((todo) => {
// //   console.log('Todo', todo);
// // })
//
//
// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('id not found');
//   }
//   console.log('Todo by Id', todo);
// }).catch((e)=> console.log(e));


User.findById(id).then((user) =>{
  if(!user){
    return console.log('User not found');
  }
  console.log(`User by Id, ${JSON.stringify(user,undefined,2)}`);
},(e) => console.log('id not found'));
