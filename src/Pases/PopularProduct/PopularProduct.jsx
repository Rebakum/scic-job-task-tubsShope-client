import { useQuery } from "@tanstack/react-query";
import { FaShoppingCart } from "react-icons/fa";
import UseAxiosSecure from '../Hook/UseAxiosSecure';

const PopularProduct = () => {
    const axiosSecure = UseAxiosSecure();
    const { data: products = [], isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/products');
            return data;
        }
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto my-10">
            <h1 className="mb-10 text-4xl font-bold text-green-600">Popular Products</h1>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4 ">
                {products.map(product => (
                    <div key={product._id} className="overflow-hidden bg-white rounded-lg shadow-lg ">
                        <figure className="p-4 bg-gray-100">
                            <img className="object-cover w-full h-40 rounded-lg" src={product.productImage} alt={product.productName} />
                        </figure>
                        <div className="p-4">
                            <h2 className="mb-2 text-lg font-semibold">{product.productName}</h2>
                            <div className="flex items-center justify-between">
                                <span className="text-2xl font-bold text-green-600">${product.price.toFixed(2)}</span>
                                <span className="text-gray-500 line-through">${(product.price * 1.25).toFixed(2)}</span>
                            </div>
                            <div className="flex items-center justify-between mt-4">
                                <div className="flex items-center">
                                    <span className="text-yellow-500">
                                        ★★★★★
                                    </span>
                                    <span className="ml-2 text-sm text-gray-600">{product.ratings.toFixed(1)}</span>
                                </div>
                                <button className="text-green-600 hover:text-green-800">
                                    <FaShoppingCart size={20} />
                                </button>
                            </div>
                        </div>
                        <div className="absolute px-2 py-1 text-xs font-bold text-white bg-red-500 top-2 left-2">
                            Sale 50%
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularProduct;
