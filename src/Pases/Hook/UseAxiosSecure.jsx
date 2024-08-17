import axios from "axios";



const UseAxiosSecure = () => {
    const axiosSecure = axios.create({
        baseURL: import.meta.env.VITE_API_URL,
        
    
    })
    return axiosSecure;
};

export default UseAxiosSecure;