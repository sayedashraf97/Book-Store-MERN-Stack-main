// Import three icons from the react-icons library: AiOutlineClose (close icon), PiBookOpenTextLight (book icon), and BiUserCircle (user circle icon). These icons will be used in the component.
import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
// Define a functional React component named BookModal. It takes two props: book (representing book information) and onClose (a function to close the modal).

const BookModal = ({ book, onClose }) => {
  return (
    // Create a fixed-positioned div that acts as a modal container covering the entire screen. It has a semi-transparent black background (bg-black bg-opacity-60) and is centered using Flexbox (flex justify-center items-center).
    <div
      className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
      // The onClick event is set to the onClose function, meaning clicking outside the modal will close it.
      onClick={onClose}
    >
      {/* Create a div for the modal content. It has a white background, rounded corners, and a maximum width of 600 pixels. The onClick event is used to prevent the modal from closing when clicking inside it by stopping the propagation of the click event. */}
      <div
        onClick={(event) => event.stopPropagation()}
        className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative'
      >
        {/* Place a close icon (AiOutlineClose) in the top-right corner of the modal. It has a red color (text-red-600) and becomes a pointer on hover. Clicking the close icon triggers the onClose function. */}
        <AiOutlineClose
          className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer'
          onClick={onClose}
        />
        {/* Display the book's publish year in a rounded tag with a red background. */}


        <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg'>
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
        {/* Include placeholder text content in two paragraphs. */}
        <p className='mt-4'>Anything You want to show</p>
        <p className='my-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quia
          voluptatum sint. Nisi impedit libero eveniet cum vitae qui expedita
          necessitatibus assumenda laboriosam, facilis iste cumque a pariatur
          nesciunt cupiditate voluptas? Quis atque earum voluptate dolor nisi
          dolorum est? Deserunt placeat cumque quo dicta architecto, dolore
          vitae voluptate sequi repellat!
        </p>
      </div>
    </div>
  );
};


export default BookModal;
// This component is designed to display a modal with information about a book. It includes details such as the publish year, book ID, title, author, and additional text content. The modal can be closed by clicking outside it or on a close icon. The styling is achieved using Tailwind CSS classes.
