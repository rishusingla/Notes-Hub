// import React, { useState } from 'react';
// import InputField from '../componenets/InputField';

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     branch: '',
//   });

//   const handleChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Signup Data:', formData);
//     // Connect with backend API later
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
//       <h2 className="text-2xl font-semibold mb-6 text-center text-blue-600">Create an Account</h2>
//       <form onSubmit={handleSubmit}>
//         <InputField label="Full Name" name="name" value={formData.name} onChange={handleChange} />
//         <InputField label="Email" type="email" name="email" value={formData.email} onChange={handleChange} />
//         <InputField label="Password" type="password" name="password" value={formData.password} onChange={handleChange} />
//         <InputField label="Branch" name="branch" value={formData.branch} onChange={handleChange} />
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
//         >
//           Sign Up
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Signup;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Signup = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

// //   const handleSignup = (e) => {
// //     e.preventDefault();

// //     // In real app, store user in DB
// //     if (email && password) {
// //       localStorage.setItem("user", email); // Simulate login after signup
// //       navigate("/browse");
// //     } else {
// //       alert("Please fill in all fields");
// //     }
// //   };
// const handleSignup = (e) => {
//   e.preventDefault();

//   const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];

//   // prevent duplicate registration
//   const alreadyExists = registeredUsers.find(user => user.email === email);
//   if (alreadyExists) {
//     alert("User already exists. Please login.");
//     navigate("/login");
//     return;
//   }

//   // register and store
//   const newUser = { email, password };
//   registeredUsers.push(newUser);
//   localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));

//   alert("Signup successful. You can now log in.");
//   navigate("/login");
// };

//   return (
//     <div className="p-6 max-w-md mx-auto">
//       <h2 className="text-xl font-bold mb-4">Sign Up</h2>
//       <form onSubmit={handleSignup} className="space-y-4">
//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full border p-2 rounded"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full border p-2 rounded"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button
//           type="submit"
//           className="w-full bg-green-600 text-white p-2 rounded"
//         >
//           Sign Up /Login if Already?
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Signup;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [suggestedPassword, setSuggestedPassword] = useState("");
  const navigate = useNavigate();

  const generateStrongPassword = () => {
    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    let pass = "";
    for (let i = 0; i < 10; i++) {
      pass += chars[Math.floor(Math.random() * chars.length)];
    }
    return pass;
  };

  useEffect(() => {
    setSuggestedPassword(generateStrongPassword());
  }, []);

  const handleSignup = (e) => {
    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Please enter a valid Gmail address (e.g., yourname@gmail.com).");
      return;
    }

    if (password.length < 7) {
      alert("Password must be at least 7 characters long.");
      return;
    }

    const registeredUsers =
      JSON.parse(localStorage.getItem("registeredUsers")) || [];
    const alreadyExists = registeredUsers.find((user) => user.email === email);
    if (alreadyExists) {
      alert("User already exists. Please login.");
      navigate("/login");
      return;
    }

    const newUser = { email, password };
    registeredUsers.push(newUser);
    localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));

    alert("Signup successful. You can now log in.");
    navigate("/login");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-blue-700 dark:text-blue-400 mb-6">
          Create an Account
        </h2>

        <form onSubmit={handleSignup} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Gmail
            </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter a strong password"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              🔐 Suggested:{" "}
              <span className="font-mono select-all">{suggestedPassword}</span>
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
          >
            Sign Up
          </button>

          {/* Login Redirect */}
          <p className="text-sm text-center text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-blue-600 hover:underline font-medium"
            >
              Login here
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
