import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Menu, X, UserCircle2 } from "lucide-react";
import axios from "axios";

const Navbar = () => {
  const { loggedIn, user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [userStats, setUserStats] = useState({ bio: "", notesCount: 0 });

  // Fetch user profile info (bio, notes count) from backend
  useEffect(() => {
    if (loggedIn && user?.email) {
      axios
        .get(`/api/users/${user.email}`) // backend API should return { bio, notesCount }
        .then((res) => setUserStats(res.data))
        .catch((err) => console.error(err));
    }
  }, [loggedIn, user]);

  const handleLogout = () => {
    logout();
    navigate("/login");
    setIsMenuOpen(false);
    setIsProfileOpen(false);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600 hover:text-blue-800"
        >
          NotesHub
        </Link>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-blue-600 focus:outline-none"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 text-gray-700 dark:text-white font-medium items-center relative">
          <Link to="/" className="hover:text-blue-500">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-500">
            About
          </Link>
          <Link to="/features" className="hover:text-blue-500">
            Features
          </Link>

          {loggedIn ? (
            <>
              <Link to="/browse" className="hover:text-blue-500">
                Browse
              </Link>
              <Link to="/upload" className="hover:text-blue-500">
                Upload
              </Link>

              {/* Profile Section */}
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="focus:outline-none"
                >
                  {user?.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt="User"
                      className="w-8 h-8 rounded-full object-cover border-2 border-blue-500"
                    />
                  ) : (
                    <UserCircle2 size={28} className="text-blue-600" />
                  )}
                </button>

                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-lg z-10">
                    {/* Profile Header */}
                    <div className="p-4 flex items-center space-x-3 border-b dark:border-gray-700">
                      {user?.photoURL ? (
                        <img
                          src={user.photoURL}
                          alt="Profile"
                          className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
                        />
                      ) : (
                        <UserCircle2 size={40} className="text-blue-600" />
                      )}
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">
                          {user?.email}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                          {userStats.bio || "No bio added yet"}
                        </p>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">
                      <span className="font-semibold">
                        {userStats.notesCount}
                      </span>{" "}
                      Notes Uploaded
                    </div>

                    {/* Links */}
                    <Link
                      to="/my-notes"
                      onClick={() => setIsProfileOpen(false)}
                      className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      📄 My Notes
                    </Link>

                    {/* Logout */}
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-blue-500">
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition"
              >
                Signup
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col space-y-3 text-gray-700 dark:text-white font-medium items-start">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/features" onClick={() => setIsMenuOpen(false)}>
            Features
          </Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>

          {loggedIn ? (
            <>
              <Link to="/browse" onClick={() => setIsMenuOpen(false)}>
                Browse
              </Link>
              <Link to="/upload" onClick={() => setIsMenuOpen(false)}>
                Upload
              </Link>
              <Link to="/my-notes" onClick={() => setIsMenuOpen(false)}>
                📄 My Notes
              </Link>
              <button
                onClick={handleLogout}
                className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                Login
              </Link>
              <Link
                to="/signup"
                onClick={() => setIsMenuOpen(false)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Signup
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
