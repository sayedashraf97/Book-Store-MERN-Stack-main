// Link from react-router-dom for creating links.
import { Link } from 'react-router-dom';
//Icons from various libraries (react-icons/pi, react-icons/bi, react-icons/ai, react-icons/bs, react-icons/md).
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
// BookSingleCard component from the './BookSingleCard' file.
import BookSingleCard from './BookSingleCard';

// Define a functional React component named BooksCard. It takes a prop books representing an array of book objects.
const BooksCard = ({ books }) => {
  return (
    // Create a grid layout with different column counts based on the screen size. It uses Tailwind CSS classes to set the number of columns (sm:grid-cols-2, lg:grid-cols-3, xl:grid-cols-4).
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {/* Map through the books array and render a BookSingleCard component for each book. The key prop is set to the book's _id to ensure uniqueness. */}
      {books.map((item) => (
        <BookSingleCard key={item._id} book={item} />
      ))}
    </div>
  );
};
// Export the BooksCard component for use in other parts of the application.
export default BooksCard;
// The BookSingleCard component is expected to receive a book prop, representing a single book, and render its details.
// The imported icons (PiBookOpenTextLight, BiUserCircle, AiOutlineEdit, BsInfoCircle, MdOutlineDelete) are not used directly in this component but might be utilized within the BookSingleCard component.
