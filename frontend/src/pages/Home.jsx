// import React from 'react';

// const Home = () => {
//   return (
//     <div className="text-center mt-10">
//       <h1 className="text-4xl font-bold text-blue-600">Notes-Hub Sharing Platform</h1>
//       <p className="text-lg mt-4">Welcome to the platform. Start uploading and browsing notes!</p>
//     </div>
//   );
// };

// export default Home;
// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Footer from "../componenets/Footer";

// const Home = () => {
//   const navigate = useNavigate();
//   const isLoggedIn = !!localStorage.getItem("user");

//   useEffect(() => {
//     document.body.style.overflowY = "hidden";
//     return () => {
//       document.body.style.overflowY = "auto";
//     };
//   }, []);

//   const handleProtectedRoute = (path) => {
//     if (isLoggedIn) {
//       navigate(path);
//     } else {
//       localStorage.setItem("redirectAfterLogin", path);
//       alert("🔒 Please log in or sign up to continue.");
//       navigate("/login");
//     }
//   };

//   const handleGetStarted = () => {
//     if (isLoggedIn) {
//       alert("✅ You are already logged in.");
//       navigate("/browse");
//     } else {
//       navigate("/signup");
//     }
//   };

//   return (
//     <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 text-center px-4">
//       <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 dark:text-blue-400 mb-4">
//         📚 Notes-Hub Sharing Platform
//       </h1>
//       <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mb-8">
//         Welcome to your one-stop platform for sharing and accessing branch- and
//         semester-wise notes at SMIMIT. Empower your learning journey!
//       </p>

//       <div className="flex gap-4 flex-wrap justify-center">
//         <button
//           onClick={() => handleProtectedRoute("/browse")}
//           className="px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
//         >
//           🔍 Browse Notes
//         </button>

//         <button
//           onClick={() => handleProtectedRoute("/upload")}
//           className="px-6 py-3 bg-green-600 text-white rounded shadow hover:bg-green-700 transition"
//         >
//           📤 Upload Notes
//         </button>

//         <button
//           onClick={handleGetStarted}
//           className={`px-6 py-3 ${
//             isLoggedIn
//               ? "bg-gray-400 cursor-not-allowed"
//               : "bg-purple-600 hover:bg-purple-700"
//           } text-white rounded shadow transition`}
//         >
//           📝 {isLoggedIn ? "You're Logged In" : "Get Started"}
//         </button>
//       </div>
//       <div className=""></div>
//     </div>
//   );
// };

// export default Home;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../componenets/Footer";

const Home = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("user");

  useEffect(() => {
    document.body.style.overflowY = "auto"; // Allow scrolling if needed
  }, []);

  const handleProtectedRoute = (path) => {
    if (isLoggedIn) {
      navigate(path);
    } else {
      localStorage.setItem("redirectAfterLogin", path);
      alert("🔒 Please log in or sign up to continue.");
      navigate("/login");
    }
  };

  const handleGetStarted = () => {
    if (isLoggedIn) {
      alert("✅ You are already logged in.");
      navigate("/browse");
    } else {
      navigate("/signup");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4">
          📚 Notes Sharing Platform
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-8">
          Your one-stop platform for sharing and accessing branch- and
          semester-wise notes at NotesHub. Collaborate, learn, and succeed
          together.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <button
            onClick={() => handleProtectedRoute("/browse")}
            className="px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
          >
            🔍 Browse Notes
          </button>

          <button
            onClick={() => handleProtectedRoute("/upload")}
            className="px-6 py-3 bg-green-600 text-white rounded shadow hover:bg-green-700 transition"
          >
            📤 Upload Notes
          </button>

          <button
            onClick={handleGetStarted}
            className={`px-6 py-3 ${
              isLoggedIn
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-purple-600 hover:bg-purple-700"
            } text-white rounded shadow transition`}
          >
            📝 {isLoggedIn ? "You're Logged In" : "Get Started"}
          </button>
        </div>
      </section>

      {/* Features Preview */}
      {/* <section className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-16 px-6"> */}
      <section className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose NotesHub?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 p-6 rounded-lg shadow hover:shadow-lg transition">
              📌 <h3 className="font-semibold mt-2">Pin Notes</h3>
              <p className="text-sm mt-1">
                Quickly access your important notes anytime.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg shadow hover:shadow-lg transition">
              ⭐ <h3 className="font-semibold mt-2">Rate the Best</h3>
              <p className="text-sm mt-1">
                Highlight top-quality notes for everyone.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg shadow hover:shadow-lg transition">
              📤 <h3 className="font-semibold mt-2">Easy Uploads</h3>
              <p className="text-sm mt-1">
                Share your notes with just a few clicks.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg shadow hover:shadow-lg transition">
              🔍 <h3 className="font-semibold mt-2">Smart Search</h3>
              <p className="text-sm mt-1">
                Find the notes you need, instantly.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <button
              onClick={() => navigate("/features")}
              className="bg-white text-blue-600 px-6 py-3 rounded font-medium hover:bg-gray-100 transition"
            >
              Explore All Features →
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
};

export default Home;
