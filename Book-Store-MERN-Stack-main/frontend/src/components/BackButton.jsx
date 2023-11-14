import { Link } from 'react-router-dom';
// BsArrowLeft from react-icons/bs for the left arrow icon.
import { BsArrowLeft } from 'react-icons/bs';
// Define a functional React component named BackButton. It takes a prop destination with a default value of '/'.
const BackButton = ({ destination = '/' }) => {
  return (
    // Render a div with the flex class to create a flex container.
    <div className='flex'>
      {/* Inside the flex container, render a Link component that points to the specified destination. */}
      <Link
        to={destination}
        // The Link component contains a styled button with a sky-blue background (bg-sky-800), white text (text-white), padding (px-4 py-1), rounded corners (rounded-lg), and a width that fits its content (w-fit).
        className='bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'
      >
        {/* Inside the link, render the left arrow icon (<BsArrowLeft />) with a text size of text-2xl. */}
        <BsArrowLeft className='text-2xl' />
      </Link>
    </div>
  );
};

export default BackButton;
// The BackButton component is a reusable component that creates a styled button with a left arrow icon. It uses React Router's Link component to navigate to the specified destination when the button is clicked. The default destination is '/'. This component is useful for creating a back button in a navigation context.
