// Import Dependencies:
// This code imports necessary dependencies for building a web server using Express, connecting to MongoDB with Mongoose, and enabling CORS support.
import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

// an instance of the Express app is created. 
const app = express();
// Two middleware functions are added: one for parsing JSON request bodies (express.json())
// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY

app.use(cors());
// A simple route is defined for the root path ('/').
// When a GET request is made to the root path, it logs the request object and sends a response with a status code of 234 and a welcome message.
app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('Welcome To MERN Stack Tutorial');
});

// This line tells the app to use the booksRoute middleware for any paths starting with '/books'. This is likely where CRUD operations related to books are handled.
app.use('/books', booksRoute);

// This block connects to MongoDB using the URL specified in mongoDBURL. If the connection is successful, it logs a message and starts the Express app to listen on the port specified in PORT.
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

  // Overall, this code sets up an Express web server with middleware for parsing JSON and handling CORS. It defines routes for the root path and a 'books' path, and it connects to a MongoDB database using Mongoose.