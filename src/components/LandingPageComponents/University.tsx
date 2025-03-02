import AnnaUni from '../../assets/University/AnnaUni.jpg';
import Amritanandamayi from '../../assets/University/Amritanandamayi.png';
import BitsPilani from '../../assets/University/BitsPilani.jpg';
import ChristUni from '../../assets/University/ChristUni.jpg';
import IITGuwahati from '../../assets/University/IITGuwahati.jpg';
import IITIndore from '../../assets/University/IITIndore.jpg';
import IITK from '../../assets/University/IITK.jpg';
import IITMadras from '../../assets/University/IITMadras.jpeg';
import SathyabamaUni from '../../assets/University/SathyabamaUni.jpg';
import SRM from '../../assets/University/SRM.png';
import VitUni from '../../assets/University/VitUni.jpg';



const University = () => {
  const universities = [
    { name: 'Anna University', logo: AnnaUni, alt: 'Anna University logo' },
    { name: 'BITS Pilani', logo: BitsPilani, alt: 'BITS Pilani logo' },
    { name: 'Christ University', logo: ChristUni, alt: 'Christ University logo' },
    { name: 'IIT Guwahati', logo: IITGuwahati, alt: 'IIT Guwahati logo' },
    { name: 'IIT Indore', logo: IITIndore, alt: 'IIT Indore logo' },
    { name: 'IIT Madras', logo: IITMadras, alt: 'IIT Madras logo' },
    { name: 'Sathyabama University', logo: SathyabamaUni, alt: 'Sathyabama University logo' },
    { name: 'SRM', logo: SRM, alt: 'SRM logo' },
    { name: 'VIT University', logo: VitUni, alt: 'VIT University logo' },
    { name: 'Amritanandamayi University', logo: Amritanandamayi, alt: 'Amritanandamayi University logo' },
    { name: 'IIT Kharagpur', logo: IITK, alt: 'IIT Kharagpur logo' },
  ];

  return (
    <section className="w-full px-4 text-gray-200 bg-gray-950">
      <div className="mx-auto max-w-7xl">
      <h2 className="mb-12 text-3xl font-medium text-center text-transparent bg-gradient-to-br from-white to-gray-400 bg-clip-text">
        OUR COMMUNITY MEMBERS COME FROM
      </h2>
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll">
        {/* First set of logos */}
        <div className="flex mr-8 space-x-10">
          {universities.map((university, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center flex-shrink-0"
          >
            <div className="flex items-center justify-center w-40 h-20 bg-black border border-gray-800 rounded-lg ">
            <img
              src={university.logo}
              alt={university.alt}
              className="object-contain max-w-full max-h-full p-3"
            />
            </div>
          </div>
          ))}
        </div>
        {/* Duplicate set of logos for seamless loop */}
        <div className="flex space-x-8">
          {universities.map((university, index) => (
          <div
            key={`duplicate-${index}`}
            className="flex flex-col items-center justify-center flex-shrink-0"
          >
            <div className="flex items-center justify-center w-32 h-16 border border-gray-800 rounded-lg bg-gray-950/50 backdrop-blur-sm">
            <img
              src={university.logo}
              alt={university.alt}
              className="object-contain max-w-full max-h-full p-2 filter brightness-200"
            />
            </div>
          </div>
          ))}
        </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default University;