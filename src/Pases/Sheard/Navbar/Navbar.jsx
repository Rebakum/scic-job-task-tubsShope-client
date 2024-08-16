import { useState } from 'react';
import { FaBars, FaShoppingCart, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="fixed left-0 w-full bg-gray-100 shadow-lg z-100 top-10">
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
                        <button className="px-4 py-2 text-white bg-green-600 rounded-md">Search</button>
                    </div>
                    <FaShoppingCart className="text-2xl text-green-600" />
                </div>
            </div>
        </header>
    );
};

export default Navbar;
