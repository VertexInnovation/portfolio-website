import { useEffect, useState } from 'react';
import vishnu from '../../assets/team/Vishnu.jpg';
import giri from '../../assets/team/giridharan.jpg';
import Swayam from '../../assets/team/Swayam.jpg';
import Aashik from '../../assets/team/MohammedAashik.jpeg';
import alwin from '../../assets/team/alwin.jpg';
import karunya from '../../assets/team/studentHeads/karunya.jpeg';
import harini from '../../assets/team/studentHeads/Harini.jpeg';
import Smitha from '../../assets/team/studentHeads/SmithaGladius.jpg';
import Ramana from '../../assets/team/studentHeads/ramana.jpg';
import Monish from '../../assets/team/studentHeads/monish.jpg';
import Abinav from '../../assets/team/studentHeads/Abhinavanagarajan.jpg';
const HeroSection = () => {
  const [rows, setRows] = useState([
    { photos: [], key: 1 },
    { photos: [], key: 2 }
  ]);

  useEffect(() => {
    const allPhotos = [vishnu, giri, Swayam, Aashik, alwin, karunya, harini, Smitha, Ramana, Monish, Abinav];
    
    // Function to shuffle array
    const shuffleArray = (array: string[]) => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    // Create arrays with repeated shuffled photos to fill the screen width
    const repeatedPhotos = Array(3).fill(allPhotos).flat();
    const shuffledPhotos1 = shuffleArray([...repeatedPhotos]);
    const shuffledPhotos2 = shuffleArray([...repeatedPhotos]);

    setRows([
      { photos: shuffledPhotos1, key: 1 },
      { photos: shuffledPhotos2, key: 2 }
    ]);
  }, []);

  return (
    <div className="flex flex-col items-center w-full overflow-hidden bg-white">
      <style>
        {`
          @keyframes slideLeft {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          @keyframes slideRight {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0);
            }
          }

          .scroll-left {
            animation: slideLeft 20s linear infinite;
          }

          .scroll-right {
            animation: slideRight 20s linear infinite;
          }

          .photo-stream {
            display: flex;
            gap: 1rem;
            padding: 0.5rem 0;
          }

          .photo-stream:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* Top Row - Scrolling Left */}
      <div className="w-full mb-4 overflow-hidden">
        <div className="flex photo-stream scroll-left">
          {rows[0].photos.map((photo, index) => (
            <div key={`top-${index}`} className="flex-none">
              <img
                src={photo}
                alt={`Community Member ${index + 1}`}
                className="object-cover w-16 h-16 rounded-lg"
                loading="lazy"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {rows[0].photos.map((photo, index) => (
            <div key={`top-duplicate-${index}`} className="flex-none">
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

      {/* Bottom Row - Scrolling Right */}
      <div className="w-full mb-4 overflow-hidden">
        <div className="flex photo-stream scroll-right">
          {rows[1].photos.map((photo, index) => (
            <div key={`bottom-${index}`} className="flex-none">
              <img
                src={photo}
                alt={`Community Member ${index + 1}`}
                className="object-cover w-16 h-16 rounded-lg"
                loading="lazy"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {rows[1].photos.map((photo, index) => (
            <div key={`bottom-duplicate-${index}`} className="flex-none">
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
        <button className="inline-flex items-center px-6 py-3 text-lg font-medium text-white transition-colors bg-[#5865F2] rounded-full hover:bg-[#4752C4]">
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