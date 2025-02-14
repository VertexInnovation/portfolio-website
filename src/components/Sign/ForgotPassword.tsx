import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, Check } from 'lucide-react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  interface FormEvent {
    preventDefault: () => void;
  }

  interface SubmitHandler {
    (e: FormEvent): Promise<void>;
  }

  const handleSubmit: SubmitHandler = async (e) => {
      e.preventDefault();
      setIsLoading(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitted(true);
        setIsLoading(false);
      }, 1500);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-blue-800">
      <div className="w-full max-w-md p-8 m-4 space-y-6 shadow-2xl bg-white/10 backdrop-blur-md rounded-2xl">
        <Link 
          to="/signUp" 
          className="inline-flex items-center text-sm text-gray-300 transition-colors hover:text-white"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Sign In
        </Link>

        {!isSubmitted ? (
          <>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white">Forgot Password?</h2>
              <p className="mt-2 text-gray-300">
                No worries! Enter your email and we'll send you reset instructions.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <Mail className="absolute text-gray-400 left-3 top-3" size={20} />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 pl-10 text-white placeholder-gray-400 border border-gray-600 rounded-lg bg-white/10 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 text-base font-medium text-white transition-all duration-300 bg-blue-600 rounded-lg hover:bg-blue-700 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span className="inline-flex items-center">
                    <svg className="w-5 h-5 mr-2 animate-spin" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Reset Instructions'
                )}
              </button>
            </form>
          </>
        ) : (
          <div className="space-y-6 text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-green-500/20">
              <Check size={32} className="text-green-500" />
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-white">Check your email</h2>
              <p className="mt-2 text-gray-300">
                We've sent password reset instructions to<br />
                <span className="font-medium text-white">{email}</span>
              </p>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => setIsSubmitted(false)}
                className="w-full py-3 text-base font-medium text-white transition-all duration-300 border border-gray-600 rounded-lg hover:bg-white/5"
              >
                Didn't receive the email?
              </button>

              <Link
                to="/signin"
                className="block w-full py-3 text-base font-medium text-center text-white transition-all duration-300 bg-blue-600 rounded-lg hover:bg-blue-700 hover:shadow-lg"
              >
                Back to Sign In
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;

