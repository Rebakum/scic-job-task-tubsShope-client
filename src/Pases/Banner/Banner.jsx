import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner04 from '../../assets/images/banner/banner04.jpg';
import banner05 from '../../assets/images/banner/banner05.jpeg';
import banner06 from '../../assets/images/banner/banner06.jpg';
import banner07 from '../../assets/images/banner/banner07.jpg';

const Banner = () => {
    return (
        <div className="container top-0 left-0 mx-auto mt-10 lg:mt-20 md:mt-16 carousel-container">
            <Carousel showThumbs={false} autoPlay infiniteLoop>
                <div className='w-full'>
                    <img className='lg:h-[420px]  md:h-[300px]  w-full h-[200px] object-cover' src={banner06} alt="Banner 06" />
                </div>
               <div className='w-full'>
                    <img className='lg:h-[420px]   md:h-[300px]  h-[200px] w-full object-cover' src={banner05} alt="Banner 07" />
                </div>
               <div className='w-full'>
                    <img className='lg:h-[420px]   md:h-[300px]  h-[200px] w-full object-cover' src={banner04} alt="Banner 05" />
                </div>
               <div className='w-full'>
                    <img className='lg:h-[430px]   md:h-[310px] p-5 h-[210px] w-full object-cover' src={banner07} alt="Banner 05" />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;
