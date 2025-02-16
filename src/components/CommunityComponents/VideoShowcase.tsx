

const VideoShowcase = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="mb-4 text-3xl font-bold text-gray-800">Our Journey</h2>
        <p className="mb-8 text-gray-600">
          Watch our 4-year journey from a Telegram group to a thriving community.
        </p>
        <div className="relative w-full overflow-hidden rounded-lg shadow-lg aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your video URL
            title="Our Journey"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoShowcase;
