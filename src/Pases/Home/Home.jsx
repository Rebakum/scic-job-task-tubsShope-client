import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import MyProduct from "../MyProduct/MyProduct";
import PopularProduct from "../PopularProduct/PopularProduct";
import Slider from "../Slider/Slider";


const Home = () => {
    return (
        <div className="container mx-auto ">
           <Banner/>

           <PopularProduct/>
           <MyProduct/>
           <Category/>
           <Slider/>
        </div>
    );
};

export default Home;