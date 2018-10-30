const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5bd6b1fa7d5d6527c42ae6b81';

// if (!ObjectID.isValid(id)) {
//   return console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

userId = '5bd282c6b151fd2ef050be65';
User.findById(userId).then((user) => {
  if (!user) {
    return console.log('User ID not found!');
  }
  console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => {console.log(e)});
