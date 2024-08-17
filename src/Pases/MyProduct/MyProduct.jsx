import food2 from '../../assets/images/banner/food2.jpg';
import './MyProduct.css';

const MyProduct = () => {
    return (
        <div className="container min-h-screen mx-auto my-20 text-white bg-fixed bg-item opacity-55">
            <h1 className="pt-20 pl-10 mb-10 text-4xl font-bold text-center lg:text-left">My Product</h1>
            <div className="flex flex-col items-center justify-between p-10 space-y-10 lg:flex-row lg:space-y-0 lg:space-x-10">
                <div className="flex-1">
                    <img className="object-cover transition-shadow duration-300 ease-in-out transform rounded-lg shadow-lg hover:shadow-2xl hover:scale-105" src={food2} alt="Product Image" />
                </div>
                <div className="flex-1 text-justify">
                    <p className="mb-5">Our products blend quality, innovation, and style across categories like electronics, home essentials, and fashion. Each item is carefully selected to offer top performance and value. From cutting-edge gadgets to trendy apparel, we ensure that every product meets high standards, enhancing your everyday experience with reliability and flair.</p>
                    <p className="mb-5">Our electronics selection features the latest gadgets and devices, combining cutting-edge technology with user-friendly designs. </p>
                    <div className="text-center lg:text-left">
                        <button className="px-6 py-3 mt-4 text-lg font-semibold text-white transition-colors duration-300 ease-in-out rounded-lg bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800">
                            Order Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProduct;
