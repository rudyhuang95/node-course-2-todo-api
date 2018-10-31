const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove().then((result) => {
//   console.log(result);
// });

Todo.findOneAndRemove({_id: '5bd92586de15dbad230fcc62'}).then((todo) => {
  console.log(todo);
});

// Todo.findByIdAndRemove('5bd92586de15dbad230fcc62').then((todo) => {
//   console.log(todo);
// });
