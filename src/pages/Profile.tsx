import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogOut, Package, ShieldCheck, User as UserIcon } from 'lucide-react';

const Profile: React.FC = () => {
  const { profile, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  if (!profile) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
        {/* Header */}
        <div className="bg-indigo-600 px-8 py-12 text-white text-center">
          <div className="relative inline-block mb-6">
            {profile.photoURL ? (
              <img src={profile.photoURL} alt={profile.displayName} className="w-24 h-24 rounded-3xl border-4 border-white/20 shadow-xl" />
            ) : (
              <div className="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center border-4 border-white/20">
                <UserIcon className="w-12 h-12" />
              </div>
            )}
            {profile.role === 'admin' && (
              <div className="absolute -top-2 -right-2 bg-emerald-500 text-white p-1.5 rounded-lg shadow-lg">
                <ShieldCheck className="w-4 h-4" />
              </div>
            )}
          </div>
          <h1 className="text-3xl font-black mb-2">{profile.displayName}</h1>
          <p className="text-indigo-100 font-medium">{profile.email}</p>
        </div>

        {/* Content */}
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link 
            to="/my-orders"
            className="flex items-center gap-6 p-6 rounded-3xl border border-gray-100 hover:border-indigo-200 hover:bg-indigo-50/30 transition-all group"
          >
            <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform">
              <Package className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">My Orders</h3>
              <p className="text-sm text-gray-500 font-medium">Track and view your order history</p>
            </div>
          </Link>

          {profile.role === 'admin' && (
            <Link 
              to="/admin"
              className="flex items-center gap-6 p-6 rounded-3xl border border-gray-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all group"
            >
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Admin Panel</h3>
                <p className="text-sm text-gray-500 font-medium">Manage products, users and orders</p>
              </div>
            </Link>
          )}

          <button 
            onClick={handleLogout}
            className="flex items-center gap-6 p-6 rounded-3xl border border-gray-100 hover:border-red-200 hover:bg-red-50/30 transition-all group text-left w-full md:col-span-2"
          >
            <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 group-hover:scale-110 transition-transform">
              <LogOut className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Sign Out</h3>
              <p className="text-sm text-gray-500 font-medium">Logout from your account safely</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
