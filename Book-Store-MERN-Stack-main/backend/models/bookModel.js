import mongoose from 'mongoose';
// Import the Mongoose library, which is a MongoDB object modeling tool designed to work in an asynchronous environment.
//Define a Mongoose schema for a Book.
//The schema specifies the structure of a document in the Book collection. It includes three fields: title, author, and publishYear. Each field has a specified data type (String for title and author, Number for publishYear), and the required property indicates that these fields are mandatory.
const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
      required: true,
    },
  },
  // The second parameter to mongoose.Schema is an options object. In this case, it includes the timestamps: true option, which automatically adds createdAt and updatedAt 
  {
    timestamps: true,
  }
);
// Create a Mongoose model for the Book schema using mongoose.model. This model represents the collection of documents in MongoDB and provides an interface for interacting with the database.
//The first argument ('Book') is the singular name of the collection. Mongoose will automatically pluralize this to create the collection name in the database.
//The second argument (bookSchema) is the schema definition.
export const Book = mongoose.model('Book', bookSchema);
//This code sets up a Mongoose schema for a Book and exports a Mongoose model based on that schema. The model can be used to perform CRUD (Create, Read, Update, Delete) operations on the MongoDB collection associated with books. The timestamps option adds automatic timestamp fields to track the creation and modification times of each document.