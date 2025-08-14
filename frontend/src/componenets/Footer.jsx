// import React from "react";
// import { Link } from "react-router-dom";
// import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="bg-white dark:bg-gray-900 shadow-inner mt-10 ">
//       <div className="max-w-7xl mx-auto px-4 py-8">
//         {/* Top Section */}
//         <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
//           {/* Logo and Description */}
//           <div className="text-center md:text-left">
//             <Link
//               to="/"
//               className="text-2xl font-bold text-blue-600 hover:text-blue-800"
//             >
//               SMIMIT Notes
//             </Link>
//             <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
//               Your go-to platform for sharing and accessing high-quality
//               academic notes.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div className="flex flex-col space-y-2 text-gray-700 dark:text-gray-300 font-medium text-sm">
//             <Link to="/" className="hover:text-blue-500">
//               Home
//             </Link>
//             {/* <Link to="/browse" className="hover:text-blue-500">
//               Browse Notes
//             </Link>
//             <Link to="/upload" className="hover:text-blue-500">
//               Upload Notes
//             </Link> */}
//             <Link to="/contact" className="hover:text-blue-500">
//               Contact Us
//             </Link>
//           </div>

//           {/* Social Links */}
//           <div className="flex space-x-4">
//             <a
//               href="#"
//               className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
//             >
//               <Facebook size={20} />
//             </a>
//             <a
//               href="#"
//               className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
//             >
//               <Twitter size={20} />
//             </a>
//             <a
//               href="#"
//               className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
//             >
//               <Linkedin size={20} />
//             </a>
//             <a
//               href="#"
//               className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
//             >
//               <Github size={20} />
//             </a>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="border-t border-gray-200 dark:border-gray-700 mt-6 pt-4 text-center">
//           <p className="text-sm text-gray-500 dark:text-gray-400">
//             © {new Date().getFullYear()} SMIMIT Notes. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 shadow-inner mt-10">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <Link
              to="/"
              className="text-2xl font-bold text-blue-600 hover:text-blue-800"
            >
              NotesHub
            </Link>
            <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
              Your go-to platform for sharing and accessing high-quality
              academic notes.
            </p>
          </div>

          {/* Useful Links */}
          <div className="flex flex-col space-y-2 text-gray-700 dark:text-gray-300 font-medium text-sm">
            <Link to="/" className="hover:text-blue-500">
              Home
            </Link>
            <Link to="/about" className="hover:text-blue-500">
              About Us
            </Link>
            <Link to="/contact" className="hover:text-blue-500">
              Contact Us
            </Link>
            <Link to="/support" className="hover:text-blue-500">
              Support
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
            >
              <Github size={20} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-6 pt-4 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} NotesHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
