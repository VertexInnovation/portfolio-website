// HeroSection.jsx


const HeroSection = () => {
  return (
    <div className="relative bg-white">
      <div className="grid grid-cols-3 gap-2 overflow-hidden">
        {/* Dynamic Images */}
        {[...Array(15)].map((_, i) => (
          <img
            key={i}
            src={`/images/community/member-${i + 1}.jpg`}
            alt={`Member ${i + 1}`}
            className="object-cover w-full h-full"
          />
        ))}
      </div>
      <div className="p-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          Join the Smartest Student Community
        </h1>
        <p className="mt-4 text-gray-600">
          Collaborate, learn, and grow with ambitious peers and industry experts.
        </p>
        <button className="px-6 py-3 mt-6 text-white bg-blue-600 rounded-full hover:bg-blue-500">
          Join Discord
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
