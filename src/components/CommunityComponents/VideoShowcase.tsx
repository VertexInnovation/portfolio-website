

const VideoShowcase = () => {
  return (
    <div className="relative py-16">
      <div className="absolute rounded-full bg-blue-600/20 w-72 h-72 blur-3xl opacity-20 -top-20 -left-20" />
      <div className="absolute rounded-full bg-purple-600/20 w-72 h-72 blur-3xl opacity-20 -bottom-20 -right-20" />
      
      <div className="max-w-5xl px-6 mx-auto text-center">
        <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-white">
          Our 
          <span className="relative">
            <span className="relative z-10 px-2 text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text">
              Journey
            </span>
            <div className="absolute bottom-0 left-0 w-full h-3 bg-blue-600/20 opacity-30 -rotate-2" />
          </span>
        </h2>
        <p className="mb-8 text-lg leading-relaxed text-gray-300">
          Watch our 4-year journey from a Telegram group to a thriving community.
        </p>
        <div className="relative w-full overflow-hidden shadow-lg rounded-xl aspect-video">
          <img src="https://source.unsplash.com/800x600/?img" alt="Video" className="object-cover w-full h-full" />
          <button className="absolute inset-0 flex items-center justify-center w-full h-full transition-all duration-300 bg-black bg-opacity-50 hover:bg-opacity-40 focus:outline-none">  
            <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-white transition-transform duration-300 hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14V10a1 1 0 011.5-.87l5 2a1 1 0 010 1.74l-5 2A1 1 0 0110 14z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

// const VideoShowcase = () => {
//   return (
//     <div className="py-12 bg-white">
//       <div className="max-w-5xl mx-auto text-center">
//         <h2 className="mb-4 text-3xl font-bold text-gray-800">Our Journey</h2>
//         <p className="mb-8 text-gray-600">
//           Watch our 4-year journey from a Telegram group to a thriving community.
//         </p>
//         <div className="relative w-full overflow-hidden rounded-lg shadow-lg aspect-video">
//           <iframe
//             className="w-full h-full"
//             src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your video URL
//             title="Our Journey"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           ></iframe>
//         </div>
//       </div>
//     </div>
//   );
// };


export default VideoShowcase;
