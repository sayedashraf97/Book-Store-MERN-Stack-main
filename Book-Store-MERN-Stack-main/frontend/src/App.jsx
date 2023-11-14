import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateBook from './pages/CreateBooks';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';

const App = () => {
  return (
    // Use the Routes component to define different routes in the application.
    <Routes>
      {/* Set up individual Route components for each route, specifying the route path and the corresponding component to render. */}
      {/* For the root path '/', render the Home component. */}
      <Route path='/' element={<Home />} />
      {/* For the path /books/create, render the CreateBook component */}
      {/* similarly for others */}
      <Route path='/books/create' element={<CreateBook />} />
      <Route path='/books/details/:id' element={<ShowBook />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
      <Route path='/books/delete/:id' element={<DeleteBook />} />
    </Routes>
  );
};

export default App;
