import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../Hook/UseAxiosSecure";

const Testimonial = () => {
    const axiosSecure = UseAxiosSecure();
    const { data: testimonials = [], isLoading } = useQuery({
        queryKey: ['testimonials'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/testimonials');
            return data;
        }
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars.push(<span key={i} className="text-yellow-500">★</span>);
            } else {
                stars.push(<span key={i} className="text-gray-300">★</span>);
            }
        }
        return stars;
    };

    return (
        <div className="container px-5 mx-auto my-20">
            <h2 className="mb-12 text-4xl font-bold text-green-600">Client Testimonials</h2>
            <div className="grid gap-10 lg:grid-cols-3">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="p-8 transition-shadow duration-300 ease-in-out bg-white rounded-lg shadow-lg hover:shadow-2xl">
                        <div className="flex flex-col items-center justify-center mb-4 space-y-4">
                            <img className="mr-4 rounded-full w-28 h-28" src={testimonial.image} alt={`${testimonial.name}`} />
                            <div>
                                <h3 className="text-xl font-semibold text-center">{testimonial.name}</h3>
                                <p className="text-center text-green-600">{testimonial.role}</p>
                            </div>
                        </div>
                        <p className="text-justify text-gray-600">{testimonial.description}</p>
                        <div className="mt-4 text-center">
                            {renderStars(testimonial.rating)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonial;
