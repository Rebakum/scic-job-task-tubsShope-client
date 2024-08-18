import { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'; // Importing react-toastify for notifications
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../Router/Provider/AuthProvider';

const SignIn = () => {
    const { signInUser, googleLogIn } = useContext(AuthContext); 
    const navigate = useNavigate();

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then((result) => {
                toast.success('Yeah!! You are welcome');
                if (result.user) navigate('/');
            })
            .catch((error) => {
                console.log(error);
                toast.warn('Please check email and password');
            });
    };

    const handleGoogleSignIn = () => { // Renamed function for consistency
        googleLogIn()
            .then((result) => {
                console.log(result);
                navigate('/'); // Redirect after successful Google login
                toast.success('Successfully signed in with Google! Welcome!');
            })
            .catch((error) => {
                console.error('Failed to sign in with Google', error);
                toast.warn('Failed to sign in with Google');
            });
    };

    return (
        <>
            <Helmet>
                <title>TUBASHOP | SIGN IN</title>
            </Helmet>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md lg:p-8">
                    <h2 className="mb-6 text-2xl font-bold text-gray-900">Sign In</h2>
                    <form onSubmit={handleSignIn}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-2 font-semibold text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email" 
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block mb-2 font-semibold text-gray-700">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password" 
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                                required
                            />
                        </div>
                        <button type="submit" className="w-full py-2 text-white bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none">Sign In</button>
                    </form>
                    <div className='flex items-center justify-center gap-5 mt-4'>
                        <span>New here? Please </span>
                        <Link to='/signUp' className='text-red-600'>Sign Up</Link>
                    </div>
                    <div className="divider">OR</div>
                    <div className='flex items-center justify-center mt-4'>
                        <button onClick={handleGoogleSignIn} className='p-2 text-2xl text-red-500 border rounded-full'><FcGoogle /></button>
                    </div>
                </div>
            </div>
            <ToastContainer /> 
        </>
    );
};

export default SignIn;
