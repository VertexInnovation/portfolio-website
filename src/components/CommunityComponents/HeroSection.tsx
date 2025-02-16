import { useRef, useEffect } from 'react';
import ashik from '../../assets/team/MohammedAashik.jpeg';
const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Sample member images - in production you would import these
  const memberPhotos = [
    ashik,
    ashik,
    ashik,
    ashik,
    ashik,
    ashik,
    ashik,
    ashik,
  ];

  // Double the photos array to create seamless loop
  const allPhotos = [...memberPhotos, ...memberPhotos];

  useEffect(() => {
    const scrollContainer = containerRef.current;
    if (!scrollContainer) return;

    // Calculate total scroll width
    const totalWidth = scrollContainer.scrollWidth;
    let currentScroll = 0;

    const scroll = () => {
      currentScroll += 1;
      
      // Reset scroll position when reaching end
      if (currentScroll >= totalWidth / 2) {
        currentScroll = 0;
      }
      
      scrollContainer.scrollLeft = currentScroll;
    };

    const intervalId = setInterval(scroll, 30);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col items-center w-full overflow-hidden bg-white">
      {/* Photos Row 1 */}
      <div className="w-full mb-4">
        <div 
          ref={containerRef}
          className="flex gap-4 py-2 overflow-hidden"
          style={{ width: '100%' }}
        >
          {allPhotos.map((photo, index) => (
            <div
              key={index}
              className="flex-none"
            >
              <img
                src={photo}
                alt={`Community Member ${index + 1}`}
                className="object-cover w-16 h-16 rounded-lg"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Photos Row 2 */}
      <div className="w-full mb-4">
        <div 
          className="flex gap-4 py-2 overflow-hidden"
          style={{ 
            width: '100%',
            animation: 'scroll 20s linear infinite reverse'
          }}
        >
          {allPhotos.map((photo, index) => (
            <div
              key={index}
              className="flex-none"
            >
              <img
                src={photo}
                alt={`Community Member ${index + 1}`}
                className="object-cover w-16 h-16 rounded-lg"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl px-4 py-12 mx-auto text-center">
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900">
          Join India's smartest student community
        </h1>
        <p className="mb-8 text-lg leading-relaxed text-gray-600">
          Join niche clubs, interact with experts, explore, network with high-profile and ambitious individuals, get internships, and join India's largest community all for free! What are you waiting for?
        </p>
        <button className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-[#5865F2] rounded-full hover:bg-[#4752C4] transition-colors">
          <svg 
            className="w-6 h-6 mr-2" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026 13.83 13.83 0 0 0 1.226-1.963.074.074 0 0 0-.041-.104 13.175 13.175 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z"/>
          </svg>
          Join Discord
        </button>
      </div>
    </div>
  );
};

export default HeroSection;