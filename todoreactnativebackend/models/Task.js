const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
});

//Mongo db schema
module.exports = mongoose.model('todoslists', TaskSchema);