const mongoose = require("mongoose");

// Replace with your MongoDB connection string with the database name included
mongoose.connect("mongodb+srv://pranavkulkarni779:Pranav%409@cluster0.qhi9eub.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const Todo = mongoose.model('Todo', todoSchema); 

module.exports = {
  todo: Todo
};
