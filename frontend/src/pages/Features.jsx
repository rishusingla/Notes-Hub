// import React from "react";

// const featuresList = [
//   {
//     icon: "📌",
//     title: "Pin Your Notes",
//     desc: "Pin important notes to your profile for one-click access — never lose that exam-crucial page again.",
//   },
//   {
//     icon: "⭐",
//     title: "Rate the Best",
//     desc: "Upvote and rate the most helpful notes so the community can quickly find top-quality content.",
//   },
//   {
//     icon: "📤",
//     title: "Easy Uploads",
//     desc: "Upload PDFs or images in seconds with clear metadata (subject, semester, tags) so notes are searchable.",
//   },
//   {
//     icon: "🔎",
//     title: "Smart Search & Filters",
//     desc: "Search by subject, semester, uploader or keywords. Filter by newest, most rated or size.",
//   },
//   {
//     icon: "📂",
//     title: "Collections & Pinboards",
//     desc: "Create custom collections (e.g., 'OS Notes', 'Exam Prep') and share them with your study group.",
//   },
//   {
//     icon: "💬",
//     title: "Comments & Reviews",
//     desc: "Discuss pages, suggest edits, and add short reviews to improve note quality together.",
//   },
//   {
//     icon: "📈",
//     title: "Trending & Top Notes",
//     desc: "See which notes are trending in your branch — discover what other students find useful.",
//   },
//   {
//     icon: "🔒",
//     title: "Privacy Controls",
//     desc: "Choose who can view or download your notes — public, campus-only, or private to invited users.",
//   },
// ];

// const Features = () => {
//   return (
//     <section
//       id="features"
//       className="bg-gradient-to-b from-blue-50 to-white py-16"
//     >
//       <div className="max-w-6xl mx-auto px-6">
//         <div className="mb-10 text-center">
//           <h2 className="text-3xl md:text-4xl font-extrabold text-blue-600">
//             Powerful features made for students
//           </h2>
//           <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
//             Share, discover and organize notes with tools built for study
//             workflows — pin, rate, collect and collaborate.
//           </p>
//         </div>

//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//           {featuresList.map((f, i) => (
//             <article
//               key={i}
//               className="flex flex-col items-start gap-4 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-transform hover:-translate-y-1"
//             >
//               <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-white to-blue-50 border border-blue-100">
//                 <span className="text-2xl">{f.icon}</span>
//               </div>

//               <div>
//                 <h3 className="text-lg font-semibold text-gray-800">
//                   {f.title}
//                 </h3>
//                 <p className="mt-1 text-sm text-gray-600">{f.desc}</p>
//               </div>

//               {/* subtle footer area for each card */}
//               <div className="mt-auto pt-3 w-full">
//                 <div className="flex items-center justify-between text-xs text-gray-400">
//                   <span>Student-friendly</span>
//                   <span>✓</span>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>

//         {/* CTA */}
//         <div className="mt-10 text-center">
//           <a
//             href="/signup"
//             className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-blue-700 transition"
//           >
//             Join & Start Uploading
//           </a>
//           <a
//             href="/browse"
//             className="ml-4 inline-block border border-blue-600 text-blue-600 px-5 py-3 rounded-lg font-medium hover:bg-blue-50 transition"
//           >
//             Browse Notes
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;

import React from "react";
import { useNavigate } from "react-router-dom";

const featuresList = [
  {
    icon: "📌",
    title: "Pin Your Notes",
    desc: "Pin important notes to your profile for one-click access — never lose that exam-crucial page again.",
  },
  {
    icon: "⭐",
    title: "Rate the Best",
    desc: "Upvote and rate the most helpful notes so the community can quickly find top-quality content.",
  },
  {
    icon: "📤",
    title: "Easy Uploads",
    desc: "Upload PDFs or images in seconds with clear metadata (subject, semester, tags) so notes are searchable.",
  },
  {
    icon: "🔎",
    title: "Smart Search & Filters",
    desc: "Search by subject, semester, uploader or keywords. Filter by newest, most rated or size.",
  },
  {
    icon: "📂",
    title: "Collections & Pinboards",
    desc: "Create custom collections (e.g., 'OS Notes', 'Exam Prep') and share them with your study group.",
  },
  {
    icon: "💬",
    title: "Comments & Reviews",
    desc: "Discuss pages, suggest edits, and add short reviews to improve note quality together.",
  },
  {
    icon: "📈",
    title: "Trending & Top Notes",
    desc: "See which notes are trending in your branch — discover what other students find useful.",
  },
  {
    icon: "🔒",
    title: "Privacy Controls",
    desc: "Choose who can view or download your notes — public, campus-only, or private to invited users.",
  },
];

const Features = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("user");

  const handleJoinClick = () => {
    if (isLoggedIn) {
      navigate("/upload");
    } else {
      navigate("/signup");
    }
  };

  return (
    <section
      id="features"
      className="bg-gradient-to-b from-blue-50 to-white py-16"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-600">
            Powerful features made for students
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Share, discover and organize notes with tools built for study
            workflows — pin, rate, collect and collaborate.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuresList.map((f, i) => (
            <article
              key={i}
              className="flex flex-col items-start gap-4 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-white to-blue-50 border border-blue-100">
                <span className="text-2xl">{f.icon}</span>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {f.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600">{f.desc}</p>
              </div>

              {/* subtle footer area for each card */}
              <div className="mt-auto pt-3 w-full">
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>Student-friendly</span>
                  <span>✓</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <button
            onClick={handleJoinClick}
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-blue-700 transition"
          >
            Join & Start Uploading
          </button>
          <a
            href="/browse"
            className="ml-4 inline-block border border-blue-600 text-blue-600 px-5 py-3 rounded-lg font-medium hover:bg-blue-50 transition"
          >
            Browse Notes
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
