
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="container bottom-0 pt-5 mx-auto text-white bg-gray-800">
            <div className="container grid grid-cols-1 gap-8 px-10 py-10 mx-auto md:grid-cols-4">
                {/* About Section */}
                <div>
                    <h3 className="mb-4 text-lg font-bold">About TubaShope</h3>
                    <p className="text-sm text-gray-400">
                    At Tuba Shop, we are passionate about all things brass, and our specialty lies in offering a wide range of high-quality tubas for musicians of all levels.
                    </p>
                    <div className="flex mt-4 space-x-4">
                        <FaFacebookF className="text-xl hover:text-green-600" />
                        <FaTwitter className="text-xl hover:text-green-600" />
                        <FaInstagram className="text-xl hover:text-green-600" />
                        <FaLinkedinIn className="text-xl hover:text-green-600" />
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#shop" className="hover:text-green-600">Shop</a></li>
                        <li><a href="#about" className="hover:text-green-600">About Us</a></li>
                        <li><a href="#blog" className="hover:text-green-600">Blog</a></li>
                        <li><a href="#contact" className="hover:text-green-600">Contact Us</a></li>
                    </ul>
                </div>

                {/* My Account */}
                <div>
                    <h3 className="mb-4 text-lg font-bold">My Account</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#account" className="hover:text-green-600">My Account</a></li>
                        <li><a href="#orders" className="hover:text-green-600">Order History</a></li>
                        <li><a href="#wishlist" className="hover:text-green-600">Wishlist</a></li>
                        <li><a href="#settings" className="hover:text-green-600">Settings</a></li>
                    </ul>
                </div>

                {/* Subscribe */}
                <div>
                    <h3 className="mb-4 text-lg font-bold">Subscribe</h3>
                    <p className="mb-4 text-sm text-gray-400">
                        Subscribe to our newsletter and get the latest updates.
                    </p>
                    <form className="space-x-2 lg:space-y-5 ">
                        <input type="email" placeholder="Your email address" className="px-4 py-2 text-black rounded-md" />
                        <button className="px-4 py-2 text-white bg-green-600 rounded-md">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="py-4 text-center text-gray-500 bg-gray-900">
                <p>&copy; 2024 Ecobazar. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
