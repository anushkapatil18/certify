import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    var navigate = useNavigate();
    const handleFormSubmit = (e) => {
        e.preventDefault();

        let email = e.target.elements.email?.value;
        let password = e.target.elements.password?.value;

        console.log(email, password);
        navigate("/user/home");
    };
    return (
        <div className='h-screen flex bg-gray-bg1 bg-blue-300'>
            <div className='w-full max-w-md m-auto bg-white rounded-lg  shadow-cyan-700 shadow-2xl py-10 px-16'>
                <h1 className='text-2xl font-medium font-mono text-primary mt-4 mb-12 text-center'>
                    Log in to Certif
                </h1>

                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor='username' className='font-mono'>Username</label>
                        <input
                            type='username'
                            className={` font-mono w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='username'
                            placeholder='Your Username'
                        />
                    </div>
                    <div>
                        <label htmlFor='password' className='font-mono'>Password</label>
                        <input
                            type='password'
                            className={`font-mono w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password'
                            placeholder='Your Password'
                        />
                    </div>

                    <div className='flex justify-center items-center mt-6'>
                        <button className={` font-mono bg-green py-2 px-4 text-sm text-black rounded border border-green focus:outline-none focus:border-green-dark`}
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
