// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componenets/Navbar";
import Home from "./pages/Home";
// import UploadNotes from './componenets/UploadNotes';
// import Browse from './pages/Browse';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotesList from "./pages/NotesList";
import Features from "./pages/Features";
import About from "./pages/About";
import UploadNotes from "./componenets/UploadNotes";
import Footer from "./componenets/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />
      <div className="p-4 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<UploadNotes />} />
          <Route path="/browse" element={<NotesList />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
