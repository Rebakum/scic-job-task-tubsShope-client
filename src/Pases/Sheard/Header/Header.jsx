import { useContext, useState } from 'react';
import { FaBars, FaMapMarkerAlt, FaPhoneAlt, FaShoppingCart, FaTimes, FaUser } from 'react-icons/fa';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../../../public/logo.jpg';
import { AuthContext } from '../../../Router/Provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = async () => {
        try {
            await logOut(); 
            navigate('/'); // Redirect to home after logging out
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <header className="fixed top-0 left-0 z-50 w-full bg-gray-100 shadow-md">
            <div className="container flex items-center justify-between mx-auto lg:px-8">
                {/* Logo */}
                <div className="flex items-center text-2xl font-bold text-green-500">
                    <img className="w-10 h-10 mr-2" src={logo} alt="Logo" />
                    <span className="hidden lg:inline-block">TubaShop</span>
                </div>

                {/* User Info */}
                <div className="hidden lg:flex lg:items-center lg:space-x-6">
                    <div className="flex items-center space-x-2">
                        <FaMapMarkerAlt className="text-green-600" />
                        <span className="text-sm text-gray-700">1234 Street Location, Chicago, USA</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaPhoneAlt className="text-green-600" />
                        <span className="text-sm text-gray-700">(123) 456-7890</span>
                    </div>
                </div>

                {/* User Actions */}
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        {user ? (
                            <>
                                <FaUser className="text-green-600" />
                                <button
                                    onClick={handleLogout}
                                    className="btn btn-sm btn-ghost"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to='/signIn' className="text-sm text-gray-700 hover:text-green-600">Sign In</Link>
                                <span className="text-sm text-gray-700">/</span>
                                <Link to='/signUp' className="text-sm text-gray-700 hover:text-green-600">Sign Up</Link>
                            </>
                        )}
                    </div>
                    {/* Mobile Menu Button */}
                    <button className="md:hidden" onClick={toggleMenu}>
                        {isOpen ? <FaTimes className="text-2xl text-green-600" /> : <FaBars className="text-2xl text-green-600" />}
                    </button>
                </div>
            </div>

            {/* Navbar */}
            <div className="bg-gray-100 shadow-lg">
                <div className="container flex items-center justify-between px-2 py-2 mx-auto lg:px-0">
                    {/* Desktop Menu */}
                    <nav className="hidden space-x-8 md:flex">
                        <NavLink to="/" className="text-gray-700 hover:text-green-600">Home</NavLink>
                        <NavLink to="/shop" className="text-gray-700 hover:text-green-600">Shop</NavLink>
                        <NavLink to="/about" className="text-gray-700 hover:text-green-600">About Us</NavLink>
                        <NavLink to="/blog" className="text-gray-700 hover:text-green-600">Blog</NavLink>
                        <NavLink to="/contact" className="text-gray-700 hover:text-green-600">Contact Us</NavLink>
                    </nav>

                    {/* Search and Cart */}
                    <div className="items-center hidden space-x-4 md:flex">
                        <input type="text" placeholder="Search..." className="px-4 py-2 border rounded-md" />
                        <button className="px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-500">Search</button>
                        <FaShoppingCart className="text-2xl text-green-600 hover:text-green-500" />
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-gray-100`}>
                    <nav className="flex flex-col items-center py-4 space-y-4">
                        <NavLink to="/" className="text-gray-700 hover:text-green-600">Home</NavLink>
                        <NavLink to="/shop" className="text-gray-700 hover:text-green-600">Shop</NavLink>
                        <NavLink to="/about" className="text-gray-700 hover:text-green-600">About Us</NavLink>
                        <NavLink to="/blog" className="text-gray-700 hover:text-green-600">Blog</NavLink>
                        <NavLink to="/contact" className="text-gray-700 hover:text-green-600">Contact Us</NavLink>
                    </nav>

                    {/* Mobile Search and Cart */}
                    <div className="flex flex-col items-center space-y-4">
                        <div className="flex space-x-2">
                            <input type="text" placeholder="Search..." className="px-4 py-2 border rounded-md" />
                            <button className="px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-500">Search</button>
                        </div>
                        <FaShoppingCart className="text-2xl text-green-600 hover:text-green-500" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
