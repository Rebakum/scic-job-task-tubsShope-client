import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import MyProduct from "../MyProduct/MyProduct";
import PopularProduct from "../PopularProduct/PopularProduct";
import Slider from "../Slider/Slider";
import Testimonial from "../Testimonial/Testimonial";


const Home = () => {
    return (
        <div className="container mx-auto ">
           <Banner/>

           <PopularProduct/>
           <MyProduct/>
           <Category/>
           <Slider/>
           <Testimonial/>
        </div>
    );
};

export default Home;