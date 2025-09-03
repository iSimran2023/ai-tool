import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';

const Header = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header className="bg-white shadow-md py-4">
      <div className="container">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-indigo-600">
            MERN<span className="text-green-500">Commerce</span>
          </Link>

          <div className="flex items-center space-x-6">
            <Link to="/products" className="text-gray-700 hover:text-indigo-600">
              Products
            </Link>

            {userInfo ? (
              <div className="flex items-center space-x-4">
                <Link to="/profile" className="text-gray-700 hover:text-indigo-600">
                  {userInfo.name}
                </Link>
                <button
                  onClick={logoutHandler}
                  className="text-gray-700 hover:text-indigo-600"
                >
                  Logout
                </button>
                {userInfo.isAdmin && (
                  <Link to="/admin" className="text-gray-700 hover:text-indigo-600">
                    Admin
                  </Link>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login" className="text-gray-700 hover:text-indigo-600">
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                >
                  Sign Up
                </Link>
              </div>
            )}

            <Link to="/cart" className="text-gray-700 hover:text-indigo-600">
              <i className="fas fa-shopping-cart"></i>
              <span className="ml-1">Cart</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;