import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'; // Assuming you are using react-toastify for notifications
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../Router/Provider/AuthProvider';

const SignUp = () => {
    const navigate = useNavigate();
    const { createUser, googleLogIn } = useContext(AuthContext);

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
            .then((result) => {
                navigate('/'); // Redirect after successful signup
                console.log(result);
                toast.success('Successfully signed up! Welcome!');
            })
            .catch((error) => {
                console.error('Failed to create user', error);
                toast.warn('Failed to create user');
            });
    };

    const handleGoogleSigIn = () => {
        googleLogIn()
            .then((result) => {
                console.log(result);
                navigate('/'); // Redirect after successful Google login
                toast.success('Successfully signed up with Google! Welcome!');
            })
            .catch((error) => {
                console.error('Failed to sign in with Google', error);
                toast.warn('Failed to sign in with Google');
            });
    };

    return (
        <>
            <Helmet>
                <title>TUBASHOPE | SIGN UP</title>
            </Helmet>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md lg:p-8">
                    <h2 className="mb-6 text-2xl font-bold text-gray-900">Sign Up</h2>
                    <form onSubmit={handleSignUp}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block mb-2 font-semibold text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                                required
                            />
                        </div>
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
                                minLength="6"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                                required
                            />
                        </div>
                        <button type="submit" className="w-full py-2 text-white bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none">Sign Up</button>
                    </form>
                    <div className='flex items-center justify-center gap-5 mt-4'>
                        <span>Have an account? </span>
                        <Link to='/signIn' className='text-red-600'>Sign In</Link>
                    </div>
                    <div className="divider">OR</div>
                    <div className='flex items-center justify-center'>
                        <button onClick={handleGoogleSigIn} className='text-2xl border-red-500 btn'><FcGoogle /></button>
                    </div>
                    <ToastContainer />
                </div>
            </div>
        </>
    );
};

export default SignUp;
