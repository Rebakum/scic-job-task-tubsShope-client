import { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../../../public/logo.jpg';

import { FaBars, FaShoppingCart, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);    };
   

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    return (
        <header className="fixed top-0 left-0 z-50 w-full bg-gray-100 shadow-md">
            <div className="container flex items-center justify-between mx-auto lg:px-8">
                {/* Logo */}
                <div className="text-2xl font-bold text-green-500">
                    <Link to="/">
                    <img className='w-10 h-10' src={logo} alt="" />
                    </Link>
                </div>

              
                {/* User Info and Mobile Menu Toggle */}
                <div className="flex items-center space-x-4 lg:space-x-6">
                    <div className="flex items-center hidden space-x-2 lg:flex">
                        <FaMapMarkerAlt className="text-green-600" />
                        <span className="text-sm text-gray-700">1234 Street Location, Chicago, USA</span>
                    </div>
                    <div className="flex items-center hidden space-x-2 lg:flex">
                        <FaPhoneAlt className="text-green-600" />
                        <span className="text-sm text-gray-700">(123) 456-7890</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaUser className="text-green-600" />
                        <Link to='/signIn' className="text-sm text-gray-700 hover:text-green-600">Sign In</Link>
                        <span className="text-sm text-gray-700">/</span>
                        <Link to='/signUp' className="text-sm text-gray-700 hover:text-green-600">Sign Up</Link>
                    </div>
                    
                </div>
                
            </div>          
           
        {/* navber */}
        <div className="left-0 w-full bg-gray-100 shadow-lg ">
            <div className="container flex items-center justify-between px-2 py-2 mx-auto shadow-lg md:px-0">
                {/* Logo */}
                <div className="text-2xl font-bold text-green-700">
                    TubaShope
                </div>

                {/* Desktop Menu */}
                <nav className="hidden space-x-8 md:flex">
                    <NavLink href="#home" className="text-gray-700 hover:text-green-600">Home</NavLink>
                    <NavLink href="#shop" className="text-gray-700 hover:text-green-600">Shop</NavLink>
                    <NavLink href="#about" className="text-gray-700 hover:text-green-600">About Us</NavLink>
                    <NavLink href="#blog" className="text-gray-700 hover:text-green-600">Blog</NavLink>
                    <NavLink href="#contact" className="text-gray-700 hover:text-green-600">Contact Us</NavLink>
                </nav>

                {/* Search and Cart */}
                <div className="items-center hidden space-x-4 md:flex">
                    <input type="text" placeholder="Search..." className="px-4 py-2 border rounded-md" />
                    <button className="px-4 py-2 text-white bg-green-600 rounded-md">Search</button>
                    <FaShoppingCart className="text-2xl text-green-600" />
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        {isOpen ? <FaTimes className="text-2xl text-green-600" /> : <FaBars className="text-2xl text-green-600" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-gray-100`}>
                <nav className="flex flex-col items-center py-4 space-y-4">
                    <NavLink href="#home" className="text-gray-700 hover:text-green-600">Home</NavLink>
                    <NavLink href="#shop" className="text-gray-700 hover:text-green-600">Shop</NavLink>
                    <NavLink href="#about" className="text-gray-700 hover:text-green-600">About Us</NavLink>
                    <NavLink href="#blog" className="text-gray-700 hover:text-green-600">Blog</NavLink>
                    <NavLink href="#contact" className="text-gray-700 hover:text-green-600">Contact Us</NavLink>
                </nav>

                {/* Mobile Search and Cart */}
                <div className="flex flex-col items-center pb-4 space-y-4">
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
