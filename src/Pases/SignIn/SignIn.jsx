

const SignIn = () => {
    const handleSignIn = (e) => {
        e.preventDefault();

    };
    return (
        <div className="">
            <div className="flex items-center justify-center bg-gray-100">
                <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md lg:p-8">
                    <h2 className="mb-6 text-2xl font-bold text-gray-900">Sign In</h2>
                    <form onSubmit={handleSignIn}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-2 font-semibold text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                                value="email"

                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block mb-2 font-semibold text-gray-700">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                                value="password"

                                required
                            />
                        </div>
                        <button type="submit" className="w-full py-2 text-white bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none">Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;