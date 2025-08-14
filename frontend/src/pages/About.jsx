// import React from "react";

// const About = () => {
//   return (
//     <section className="bg-gradient-to-b from-white to-blue-50 py-16">
//       <div className="max-w-6xl mx-auto px-6 text-center">
//         <h2 className="text-3xl font-bold text-blue-600 mb-6">
//           About NotesHub
//         </h2>
//         <p className="text-gray-700 max-w-3xl mx-auto mb-12">
//           NotesHub is built by students, for students. Our goal is to make
//           learning collaborative and efficient by enabling students to share and
//           discover notes easily. With thousands of notes uploaded, rated, and
//           pinned daily, our community thrives on mutual learning.
//         </p>

//         {/* Stats */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
//             <h3 className="text-4xl font-bold text-blue-600">5,000+</h3>
//             <p className="text-gray-600">Notes Uploaded</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
//             <h3 className="text-4xl font-bold text-blue-600">2,500+</h3>
//             <p className="text-gray-600">Active Students</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
//             <h3 className="text-4xl font-bold text-blue-600">4.8/5</h3>
//             <p className="text-gray-600">Average Rating</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import React, { useEffect, useState } from "react";
import { FileText, Users, Star } from "lucide-react";

const About = () => {
  const statsData = [
    {
      icon: <FileText size={32} className="text-blue-500" />,
      value: 5000,
      label: "Notes Uploaded",
    },
    {
      icon: <Users size={32} className="text-blue-500" />,
      value: 2500,
      label: "Active Students",
    },
    {
      icon: <Star size={32} className="text-yellow-500" />,
      value: 4.8,
      label: "Average Rating",
      suffix: "/5",
    },
  ];

  const [counts, setCounts] = useState(statsData.map(() => 0));

  // Simple animation for number counting
  useEffect(() => {
    statsData.forEach((stat, index) => {
      let start = 0;
      const end = stat.value;
      const duration = 1200; // ms
      const stepTime = Math.abs(Math.floor(duration / end));
      const timer = setInterval(() => {
        start += 1;
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = start;
          return newCounts;
        });
        if (start >= end) clearInterval(timer);
      }, stepTime);
    });
  }, []);

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-blue-600 mb-4">
          About <span className="text-blue-500">NotesHub</span>
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-16 leading-relaxed">
          NotesHub is built{" "}
          <span className="font-semibold text-blue-500">
            by students, for students
          </span>
          . Our mission is to make learning collaborative and efficient by
          enabling students to share and discover notes effortlessly. With
          thousands of uploads, ratings, and pins daily, our vibrant community
          thrives on <span className="font-semibold">mutual learning</span>.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <h3 className="text-4xl font-bold text-blue-600">
                {counts[index]}
                {stat.suffix || "+"}
              </h3>
              <p className="text-gray-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
