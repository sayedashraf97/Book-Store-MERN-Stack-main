// Link from react-router-dom for creating links.
import { Link } from 'react-router-dom';
//Icons from various libraries (react-icons/pi, react-icons/bi, react-icons/ai, react-icons/bs, react-icons/md).
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
// useState from React for managing component state.
import { useState } from 'react';
// BookModal component from the './BookModal' file.
import BookModal from './BookModal';
// Define a functional React component named BookSingleCard. It takes a prop book representing a single book.
const BookSingleCard = ({ book }) => {
  // Use the useState hook to manage the visibility of the modal. The state variable showModal is initially set to false.
  const [showModal, setShowModal] = useState(false);

  return (
    // Create a div representing a book card. It has a border, rounded corners, padding, margin, and a relative position. Additionally, it applies a shadow on hover.
    <div className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'>
      {/* Display the book's publish year in a rounded tag with a red background. It is positioned absolutely in the top-right corner of the card. */}
      <h2 className='absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg'>
        {book.publishYear}
      </h2>
      {/* Show the book's ID in a smaller text, followed by a section with a book icon (PiBookOpenTextLight) and the book's title. */}
      <h4 className='my-2 text-gray-500'>{book._id}</h4>
      <div className='flex justify-start items-center gap-x-2'>
        <PiBookOpenTextLight className='text-red-300 text-2xl' />
        <h2 className='my-1'>{book.title}</h2>
      </div>
      {/* Display the author's name with a user circle icon (BiUserCircle). */}
      <div className='flex justify-start items-center gap-x-2'>
        <BiUserCircle className='text-red-300 text-2xl' />
        <h2 className='my-1'>{book.author}</h2>
      </div>
      <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
      {/* BiShow: Opens the modal (BookModal) when clicked. */}
        <BiShow
          className='text-3xl text-blue-800 hover:text-black cursor-pointer'
          onClick={() => setShowModal(true)}
        />
        {/* BsInfoCircle: Links to the details page of the book. */}
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className='text-2xl text-green-800 hover:text-black' />
        </Link>
        {/* AiOutlineEdit: Links to the edit page of the book. */}
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black' />
        </Link>
        {/* MdOutlineDelete: Links to the delete page of the book. */}

        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className='text-2xl text-red-600 hover:text-black' />
        </Link>
      </div>
      {/* Conditionally render the BookModal component if showModal is true. Pass the book details and a function to close the modal as props. */}
      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default BookSingleCard;
// This component (BookSingleCard) represents a single book card with information such as the book's publish year, ID, title, and author. It includes action buttons for showing details in a modal, navigating to details/edit/delete pages, and utilizes local state to manage the modal's visibility.
