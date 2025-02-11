import { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    interface FormErrors {
        username?: string;
        email?: string;
        password?: string;
        confirmPassword?: string;
    }
    
    const [errors, setErrors] = useState<FormErrors>({});
    
    const handleChange = (e: { target: { name: string; value: string; }; }) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const validateForm = () => {
        const tempErrors: FormErrors = {};
        if (!formData.username.trim()) {
            tempErrors.username = 'Username is required';
        }
        if (!formData.email.trim()) {
            tempErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = 'Email is invalid';
        }
        if (!formData.password) {
            tempErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            tempErrors.password = 'Password must be at least 6 characters';
        }
        if (formData.password !== formData.confirmPassword) {
            tempErrors.confirmPassword = 'Passwords do not match';
        }
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted:', formData);
        }
    };


    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
            <div className="w-full max-w-md p-8 shadow-2xl bg-white/10 backdrop-blur-md rounded-xl">
                <h2 className="mb-6 text-3xl font-bold text-center text-white">Create Account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleChange}
                            className="w-full px-4 py-3 text-white placeholder-gray-400 border border-gray-600 rounded-lg bg-white/10 focus:outline-none focus:border-blue-500"
                        />
                        {errors.username && <span className="block mt-1 text-sm text-red-400">{errors.username}</span>}
                    </div>

                    <div className="mb-4">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 text-white placeholder-gray-400 border border-gray-600 rounded-lg bg-white/10 focus:outline-none focus:border-blue-500"
                        />
                        {errors.email && <span className="block mt-1 text-sm text-red-400">{errors.email}</span>}
                    </div>

                    <div className="mb-4">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-3 text-white placeholder-gray-400 border border-gray-600 rounded-lg bg-white/10 focus:outline-none focus:border-blue-500"
                        />
                        {errors.password && <span className="block mt-1 text-sm text-red-400">{errors.password}</span>}
                    </div>

                    <div className="mb-6">
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="w-full px-4 py-3 text-white placeholder-gray-400 border border-gray-600 rounded-lg bg-white/10 focus:outline-none focus:border-blue-500"
                        />
                        {errors.confirmPassword && <span className="block mt-1 text-sm text-red-400">{errors.confirmPassword}</span>}
                    </div>

                    <button 
                        type="submit" 
                        className="w-full py-3 text-base font-medium text-white transition-all duration-300 bg-blue-600 rounded-lg hover:bg-blue-700 hover:shadow-lg"
                    >
                        Sign Up
                    </button>
                </form>

                <p className="mt-4 text-center text-gray-300">
                    Already have an account? {' '}
                    <Link to="/signin" className="font-medium text-blue-400 transition-colors hover:text-blue-300">
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
