import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogIn } from 'lucide-react';

const Login: React.FC = () => {
  const { loginWithGoogle, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as any)?.from?.pathname || "/";

  React.useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  const handleLogin = async () => {
    await loginWithGoogle();
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl text-center"
      >
        <div className="w-20 h-20 bg-indigo-50 rounded-3xl flex items-center justify-center mx-auto mb-8">
          <LogIn className="w-10 h-10 text-indigo-600" />
        </div>
        <h1 className="text-3xl font-black text-gray-900 mb-4">Welcome Back</h1>
        <p className="text-gray-500 font-medium mb-10">
          Sign in to manage your orders and access premium features.
        </p>
        
        <button
          onClick={handleLogin}
          className="w-full bg-white border-2 border-gray-100 py-4 rounded-2xl font-bold flex items-center justify-center gap-4 hover:bg-gray-50 transition-all active:scale-[0.98]"
        >
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-6 h-6" />
          Sign in with Google
        </button>
        
        <p className="mt-8 text-xs text-gray-400 font-medium">
          By signing in, you agree to our Terms of Service and Privacy Policy.
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
