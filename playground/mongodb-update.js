// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5bd144b0a9cf34e4d8c10b62')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: true
  // }).then((result) => {
  //   console.log(result);
  // });
    db.collection('Users').findOneAndUpdate({
      _id: new ObjectID('5bcedcf064e533065848d4b4')
    }, {
      $set: {
        name: 'Rudy Huang',
        address: 'Jl Surabaya No.8 Medan'
      },
      $inc: {
        age: 1
      }
    }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    });

  // client.close();
});
