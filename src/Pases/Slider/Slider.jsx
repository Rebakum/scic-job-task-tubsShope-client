// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay'; // Import autoplay styles
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// Import required modules
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';

const Slider = () => {
    return (
        <>
            <div>
                <h1 className='text-4xl font-bold text-green-600'>Newest Product</h1>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 1000, // 3 seconds delay between slides
                    disableOnInteraction: false, // Keep autoplay running even when user interacts
                }}
                modules={[FreeMode, Pagination, Autoplay]}
                className="my-20 mySwiper"
            >
                <SwiperSlide>
                    <img className='h-[350px]' src="https://d2jx2rerrg6sh3.cloudfront.net/image-handler/ts/20230712053950/ri/1000/src/images/news/ImageForNews_753423_16891547829825380.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[350px]' src="https://images.unsplash.com/photo-1595303499965-ae390aee5cca?q=80&w=2024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[350px]' src="https://img.freepik.com/free-photo/close-up-delicious-variety-cheese-with-grapes-table_23-2148430196.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[350px]' src="https://domf5oio6qrcr.cloudfront.net/medialibrary/5193/h0718g1620725736012.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[350px]' src="https://img.freepik.com/free-vector/realistic-red-ripe-raspberries-isolated-background-natural-summer-fruit_1441-1804.jpg?" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[350px]' src="https://www.uclahealth.org/sites/default/files/styles/landscape_3x2_024000_960x640/public/images/03/pomegranate-1-istock-612833996-1.jpg?f=68fffd9a&itok=FyhF7Pvy" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[350px]' src="https://img.freepik.com/free-photo/fresh-wet-pear-fruit_144627-17212.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[350px]' src="https://img.freepik.com/free-vector/breakfast-cereals-realistic-composition_1284-25934.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[350px]' src="https://img.freepik.com/free-vector/set-with-sprouted-head-garlic-half-bulb-peels-isolated-white-background_1441-2122.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Slider;
