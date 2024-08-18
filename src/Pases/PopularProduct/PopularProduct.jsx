import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import UseAxiosSecure from '../Hook/UseAxiosSecure';
import Pagination from "./Pagination";

const PopularProduct = () => {
    const axiosSecure = UseAxiosSecure();

    const [brand, setBrand] = useState(''); 
    const [category, setCategory] = useState('');  
    const [priceRange, setPriceRange] = useState(5);  
    const [sortOption, setSortOption] = useState('dateDesc');

    const { data: products = [], isLoading } = useQuery({
        queryKey: ['products', brand, category, priceRange, sortOption],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/products`, {
                params: {
                    brand,
                    category,
                    maxPrice: priceRange,
                    sort: sortOption
                }
            });
            return data;
        }
    });

    // Extract unique brands and categories from products for filtering
    const brands = [...new Set(products.map(product => product.brandName))];
    const categories = [...new Set(products.map(product => product.category))];

    if (isLoading) {
        return <div>Loading...</div>;
    }
    

    return (
        <div className="container mx-auto my-10">
            {/* Filter Section */}
            <div className="flex items-center justify-center gap-4 mb-6">
                {/* Brand Filter */}
                <div className="dropdown">
                    <button tabIndex={0} className="m-1 btn">Brand Name</button>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        {brands.map(brandItem => (
                            <li key={brandItem}><a onClick={() => setBrand(brandItem)}>{brandItem}</a></li>
                        ))}
                    </ul>
                </div>

                {/* Category Filter */}
                <div className="dropdown">
                    <button tabIndex={0} className="m-1 btn">Category Name</button>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        {categories.map(categoryItem => (
                            <li key={categoryItem}><a onClick={() => setCategory(categoryItem)}>{categoryItem}</a></li>
                        ))}
                    </ul>
                </div>

                {/* Price Range Filter */}
                <div className="flex flex-col">
                    <span className="mb-2 text-sm font-semibold">Price Range</span>
                    <input
                        type="range"
                        id="price-range"
                        min="0"
                        max="5"
                        step="0.5"
                        value={priceRange}
                        onChange={(e) => setPriceRange(Number(e.target.value))}
                        className="w-full"
                    />
                    <div className="flex justify-between mt-1 text-sm">
                        <span>$0</span>
                        <span>${priceRange}</span>
                        <span>$5</span>
                    </div>
                </div>

                {/* Sorting Dropdown */}
                <div className="dropdown">
                    <button tabIndex={0} className="m-1 btn">Sort By</button>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a onClick={() => setSortOption('priceAsc')}>Price: Low to High</a></li>
                        <li><a onClick={() => setSortOption('priceDesc')}>Price: High to Low</a></li>
                        <li><a onClick={() => setSortOption('dateDesc')}>Date Added: Newest First</a></li>
                        <li><a onClick={() => setSortOption('dateAsc')}>Date Added: Oldest First</a></li>
                    </ul>
                </div>
                <div className="flex flex-col items-center space-y-4">
                        <div className="flex space-x-2">
                            <input type="text" placeholder="Search..." className="px-4 py-2 border rounded-md" />
                            <button className="px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-500">Search</button>
                        </div>
                        
                    </div>

            </div>

            {/* Products Display */}
            <h1 className="mb-10 text-4xl font-bold text-green-600">Popular Products</h1>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
                {products.map(product => (
                    <div key={product._id} className="relative overflow-hidden bg-white rounded-lg shadow-lg">
                        <figure className="p-4 bg-gray-100">
                            <img className="object-cover w-full h-40 rounded-lg" src={product.productImage} alt={product.productName} />
                        </figure>
                        <div className="p-4">
                            <h2 className="mb-2 text-lg font-semibold">{product.productName}</h2>
                            <p className="mb-2 text-sm text-gray-600">Brand: <span className="font-medium text-green-600">{product.brandName}</span></p>
                            <div className="flex items-center justify-between">
                                <span className="text-2xl font-bold text-green-600">${product.price.toFixed(2)}</span>
                                <span className="text-gray-500 line-through">${(product.price * 1.25).toFixed(2)}</span>
                            </div>
                            <div className="flex items-center justify-between mt-4">
                                <div className="flex items-center">
                                    <span className="text-yellow-500">★★★★★</span>
                                    <span className="ml-2 text-sm text-gray-600">{product.ratings.toFixed(1)}</span>
                                </div>
                                <button className="text-green-600 hover:text-green-800">
                                    <FaShoppingCart size={20} />
                                </button>
                            </div>
                        </div>
                        <div className="absolute px-2 py-1 text-xs font-bold text-white bg-red-500 top-2 left-2">Sale 50%</div>
                    </div>
                ))}
            
            </div>
            <Pagination/>
        </div>
    );
};

export default PopularProduct;
