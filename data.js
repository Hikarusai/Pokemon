const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('./data/data.json');
const db = low(adapter);
db.defaults({ users: []})
  .write();

 module.exports=db;