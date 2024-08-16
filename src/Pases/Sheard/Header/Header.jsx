import { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../../../public/logo.jpg';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
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
           
        </header>
    );
};

export default Header;
