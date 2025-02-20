import { useState, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, Github, } from 'lucide-react';
import { AiFillGoogleCircle } from 'react-icons/ai';

const SignUp = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const SocialButton = ({ icon: Icon, label }: { icon: React.ElementType; label: string }) => (
    <button 
      className="flex items-center justify-center w-full gap-2 px-4 py-2 mb-3 text-gray-700 transition-all duration-300 bg-white rounded-lg hover:bg-gray-50 hover:shadow-md"
    >
      <Icon size={20} />
      <span>Continue with {label}</span>
    </button>
  );

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-blue-800">
      <div className="w-full max-w-md p-8 m-4 space-y-6 shadow-2xl bg-white/10 backdrop-blur-md rounded-2xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">
            {isSignUp ? 'Create Account' : 'Welcome Back'}
          </h2>
          <p className="mt-2 text-gray-300">
            {isSignUp ? 'Sign up to get started' : 'Sign in to continue'}
          </p>
        </div>

        <div className="space-y-4">
        <SocialButton icon={AiFillGoogleCircle} label="Google" />
          <SocialButton icon={Github} label="Github" />
        </div>

        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gray-600"></div>
          <span className="text-gray-400">or</span>
          <div className="flex-1 h-px bg-gray-600"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignUp && (
            <div className="relative">
              <User className="absolute text-gray-400 left-3 top-3" size={20} />
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-3 pl-10 text-white placeholder-gray-400 border border-gray-600 rounded-lg bg-white/10 focus:outline-none focus:border-blue-500"
              />
            </div>
          )}

          <div className="relative">
            <Mail className="absolute text-gray-400 left-3 top-3" size={20} />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 pl-10 text-white placeholder-gray-400 border border-gray-600 rounded-lg bg-white/10 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="relative">
            <Lock className="absolute text-gray-400 left-3 top-3" size={20} />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 pl-10 text-white placeholder-gray-400 border border-gray-600 rounded-lg bg-white/10 focus:outline-none focus:border-blue-500"
            />
          </div>

          {isSignUp && (
            <div className="relative">
              <Lock className="absolute text-gray-400 left-3 top-3" size={20} />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 pl-10 text-white placeholder-gray-400 border border-gray-600 rounded-lg bg-white/10 focus:outline-none focus:border-blue-500"
              />
            </div>
          )}

          {!isSignUp && (
            <div className="text-right">
              <Link to="/forgot-password" className="text-sm text-blue-400 hover:text-blue-300">
                Forgot password?
              </Link>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 text-base font-medium text-white transition-all duration-300 bg-blue-600 rounded-lg hover:bg-blue-700 hover:shadow-lg"
          >
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
        </form>

        <p className="text-center text-gray-300">
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="font-medium text-blue-400 transition-colors hover:text-blue-300"
          >
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;