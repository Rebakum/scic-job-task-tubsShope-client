import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-100">
            <h1 className="mb-4 text-6xl font-bold text-red-500">404</h1>
            <h2 className="mb-4 text-3xl font-semibold text-gray-700">Page Not Found</h2>
            <p className="mb-8 text-gray-600">The page you are looking for does not exist.</p>
            <Link to="/" className="px-6 py-2 text-white bg-green-600 rounded hover:bg-green-700">
                <FaHome className="inline mr-2" /> Go Back Home
            </Link>
        </div>
    );
};

export default NotFound;
