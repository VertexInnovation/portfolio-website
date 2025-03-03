import { useState, useEffect } from 'react';
import { Linkedin, Instagram, Mail, X, ChevronRight, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import vishnu from '../assets/team/Vishnu.jpg';
import giri from '../assets/team/giridharan.jpg';
import Swayam from '../assets/team/Swayam.jpg';
import Aashik from '../assets/team/MohammedAashik.jpeg';
import alwin from '../assets/team/alwin.jpg';
import karunya from '../assets/team/studentHeads/karunya.jpeg';
import harini from '../assets/team/studentHeads/Harini.jpeg';
import Smitha from '../assets/team/studentHeads/SmithaGladius.jpg';
import sanchali from '../assets/team/studentHeads/sanchali.jpg';
import Andrew from '../assets/team/studentHeads/Andrew.png';
import sakthi from '../assets/team/studentHeads/Sakthi.jpg';
import rahul from '../assets/team/studentHeads/Rahul.jpg';
import vishnupandian from '../assets/team/studentHeads/Vishnupaandian.jpg';
import abhinavanagarajan from '../assets/team/studentHeads/Abhinavanagarajan.jpg';
import ananya from '../assets/team/ananya.jpeg';
import { BackgroundBeamsWithCollision } from "../components/ui/background-beams-with-collision"; // Import the background component

const TeamPage = () => {
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const teamMembers = [
    {
      name: 'Vishnu Swaroop G',
      designation: 'Founder',
      image: vishnu,
      bio: 'As the visionary founder of Vertex Tech, Vishnu leads our company with innovative strategies and a passion for technological advancement. His leadership drives our mission to deliver cutting-edge solutions.',
      linkedin: 'https://www.linkedin.com/in/vishnu-swaroop-g-820b8928b',
      instagram: 'https://www.instagram.com/vishnu.gvs',
      email: 'director@vertextech.org'
    },
    {
      name: 'Giridharan R E',
      designation: 'Co-Founder',
      image: giri,
      bio: 'Giridharan brings strong leadership expertise to Vertex Tech, overseeing our operations and ensuring excellence in project delivery. His strategic vision helps drive our company forward.',
      linkedin: 'https://www.linkedin.com/in/giridharan-r-e',
      instagram: 'https://www.instagram.com/giridharan_re',
      email: 'executive@vertextech.org'
    },
    {
      name: 'Mohammed Aashik F',
      designation: 'Cheif Technical Officer',
      image: Aashik,
      bio: 'Aashik leads our technical initiatives with expertise in modern web technologies. His innovative approach and technical knowledge drive our development projects to success.',
      linkedin: 'https://www.linkedin.com/in/mohammed-aashik-f-690418263/',
      instagram: 'https://www.instagram.com/_ashik_1701_/',
      email: 'technical@vertextech.org'
    },
    {
      name: 'Smitha Gladius',
      designation: 'Cheif Organizing Officer',
      image: Smitha,
      bio: 'Smitha excels in project management and team coordination. Her leadership ensures smooth operations and successful delivery of our client projects.',
      linkedin: 'https://www.linkedin.com/in/t-s-smitha-gladius-6824b4251/?originalSubdomain=in',
      instagram: 'https://www.instagram.com/smitha_gladys',
      email: 'management@vertextech.org'
    },
    {
      name: 'Swayam Krishnan',
      designation: 'Chief Marketing Officer',
      image: Swayam,
      bio: 'As the Chief Financial Officer, Swayam manages our financial strategies and operations. His expertise in financial planning ensures sustainable growth and sound fiscal management.',
      linkedin: 'https://www.linkedin.com/in/swayamkrishnan',
      instagram: 'https://www.instagram.com/swayam_krishnan0905',
      email: 'finance@vertextech.org'
    },
    {
      name: 'Alwin Nithish R',
      designation: 'Cheif Vision Officer',
      image: alwin,
      bio: 'Alwin brings innovative vision and strategic thinking to Vertex Tech. His creative approach helps shape our future direction and technological initiatives.',
      linkedin: 'https://www.linkedin.com/in/alwin-nithish-r-a78046252',
      instagram: 'https://www.instagram.com/ransyverse',
      email: 'alwinnithishr@gmail.com'
    },
    {
      name: 'Abhinavanagarajan A',
      designation: 'Chief Financial Officer',
      image: abhinavanagarajan,
      bio: 'As the Chief Financial Officer, Abhinav manages our financial strategies and operations. His expertise in financial planning ensures sustainable growth and sound fiscal management.',
      linkedin: 'https://www.linkedin.com/in/abhinavanagarajan-a-47798128a',
      instagram: 'https://www.instagram.com/abhinavanagarajan',
      email: 'abhinavanagarajan@gmail.com'
    },
    {
      name: 'Sanchali',
      designation: 'Social media lead',
      image: sanchali,
      bio: 'Sanchali is a creative and innovative social media lead who brings fresh ideas and strategies to our team. Her expertise in digital marketing helps drive our online presence.',
      linkedin: 'https://www.linkedin.com/in/sanchali-shastri-661b5334b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: 'https://www.instagram.com/_sanchali_shastri_/',
      email: 'sanchalishastri13@gmail.com'
    },
    {
      name: 'Rahul K',
      designation: 'Creative Designer',
      image: rahul,
      bio: 'I am Rahul, a creative designer with a passion for visual storytelling and innovation. I thrive on bringing ideas to life through design, blending creativity with functionality to craft impactful visuals. With a keen eye for detail and a collaborative mindset, I enjoy working across different teams to create designs that inspire and engage.',
      linkedin: 'https://www.linkedin.com/in/rahul-k-7982a8293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: 'https://www.instagram.com/kutty_rahul_07?igsh=OG9idjB2Y2hpcmdx',
      email: 'rahul211307@gmail.com'
    },
    {
      name: 'Ananya B',
      designation: 'HR Lead',
      image: ananya,
      bio: 'Ananya is a dedicated HR lead who fosters collaboration and enhances employee engagement. Her enthusiasm and leadership create a positive impact on the team.',
      linkedin: 'https://www.linkedin.com/in/ananya-baalasubramani-197ba2282',
      instagram: 'https://www.instagram.com/Ananyaahh',
      email: 'ananya.baalas@gmail.com',
    },
    {
      name: 'Vishnu Paandian',
      designation: 'R&D Lead',
      image: vishnupandian, 
      bio: 'I am Vishnu, the R&D Lead and a passionate engineer who thrives on innovation and collaboration. I enjoy exploring new technologies and driving impactful projects that bridge the gap between academia and industry. With a keen interest in research and development, I am committed to creating solutions that make a difference.',
      linkedin: 'https://www.linkedin.com/in/vishnu-pandian-8b9a5924b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: 'https://www.instagram.com/vishnu_pandian_?igshid=1f3j9x3z1j1x5',
      email: 'vishnupaandian@gmail.com'
    },
    {
      name: 'LN Karunyaa',
      designation: 'Student Coordinator',
      image: karunya,
      bio: 'LN Karunyaa is a dedicated student coordinator who fosters collaboration and enhances student engagement. Their enthusiasm and leadership create a positive impact on the community.',
      linkedin: 'https://www.linkedin.com/in/karunyaa-ln-b5786a28b',
      instagram: 'https://www.instagram.com/karunyaaln',
      email: 'lnkarunyaa@gmail.com'
    },
    {
      name: 'Harini Karthikeyan',
      designation: 'Student Coordinator',
      image: harini,
      bio: 'Harini is a dedicated student coordinator who brings energy and fresh perspectives to our team. Her commitment to excellence helps foster collaboration and growth.',
      linkedin: 'https://www.linkedin.com/in/harini-karthikeyan-841b8928b/',
      instagram: 'https://www.instagram.com/vertex_innovate/',
      email: 'harinikk.863@gmail.com'
    },
    {
      name: 'Shakthi R',
      designation: 'Student Director',
      image: sakthi,
      bio: 'I am Shakthi, the Student Director and a passionate learner who thrives on leadership and collaboration. I enjoy connecting with people across different sectors, bringing fresh ideas, and contributing to impactful projects that bridge the gap between academia and industry.',
      linkedin: 'https://www.linkedin.com/in/shakthi-r-94847a2a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: 'https://www.instagram.com/19_shakthi?igsh=MzRwejh6ZHFta2t2',
      email: 'shakthirm05@gmail.com'
    },
    {
      name: 'Andrew Sundaradhas',
      designation: 'Student Director', 
      image: Andrew,
      bio: 'I am Andrew Sundaradhas, the Student Director and an enthusiastic engineer who enjoys engaging with people and building connections across sectors. Passionate about innovation and collaboration, I thrive in dynamic environments, fostering partnerships and driving impactful projects.',
      linkedin: 'https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3B9Tyvuv52RMmkNr%2BjGU0iZQ%3D%3D',
      instagram: 'https://www.instagram.com/mj_thriller?igsh=MWxyeWsyaXFtbHoweg==',
      email: 'Andrewsundaradhas56@gmail.com'
    }
  ];
  
  const MemberModal = ({ member, onClose }: { member: typeof teamMembers[0], onClose: () => void }) => (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black backdrop-blur-md bg-black/60"
      >
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25 }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-auto rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]"
        >
          <div className="absolute inset-0 overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.5)_0%,transparent_70%)]"></div>
          </div>
          
          <button 
            onClick={onClose}
            className="absolute z-10 p-2 text-white transition-all duration-300 rounded-full top-4 right-4 bg-white/10 hover:bg-white/20 hover:rotate-90"
          >
            <X size={20} />
          </button>
          
          <div className="relative flex flex-col md:flex-row">
            <div className="w-full md:w-2/5">
              <div className="relative h-64 overflow-hidden md:h-full">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent md:bg-gradient-to-l"></div>
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            
            <div className="relative p-8 md:w-3/5">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="mb-1 text-3xl font-bold text-transparent bg-gradient-to-r from-white to-blue-200 bg-clip-text">{member.name}</h3>
                <p className="inline-block px-3 py-1 mb-6 text-sm font-medium text-blue-300 rounded-full bg-blue-900/40 backdrop-blur-sm">{member.designation}</p>
                <p className="mb-8 text-lg leading-relaxed text-gray-300">{member.bio}</p>
                
                <div className="flex gap-4">
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 hover:shadow-lg hover:shadow-blue-600/30 hover:-translate-y-1"
                  >
                    <Linkedin size={18} className="text-white" />
                  </a>
                  <a 
                    href={member.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-full bg-gradient-to-br from-pink-600 to-purple-600 hover:shadow-lg hover:shadow-pink-600/30 hover:-translate-y-1"
                  >
                    <Instagram size={18} className="text-white" />
                  </a>
                  <a 
                    href={`mailto:${member.email}`}
                    className="flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-full bg-gradient-to-br from-red-500 to-red-700 hover:shadow-lg hover:shadow-red-500/30 hover:-translate-y-1"
                  >
                    <Mail size={18} className="text-white" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
  
  const TeamMemberCard = ({ member, index }: { member: typeof teamMembers[0], index: number }) => (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ 
        opacity: isLoaded ? 1 : 0, 
        y: isLoaded ? 0 : 50 
      }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => setSelectedMember(member)}
      className="cursor-pointer group"
    >
      <div className="relative overflow-hidden transition-all duration-500 border shadow-xl bg-gradient-to-b from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl border-white/5 hover:shadow-blue-500/20 hover:border-blue-500/30">
        {/* Glass effect overlay */}
        <div className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 bg-blue-500/10"></div>
        
        {/* Image with Zoom Effect */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
          <img
            src={member.image}
            alt={member.name}
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Hover Social Links */}
          <div className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-center gap-3 p-4 transition-all duration-500 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
            <a 
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center w-8 h-8 transition-all duration-300 bg-blue-600 rounded-full hover:scale-110"
            >
              <Linkedin size={14} className="text-white" />
            </a>
            <a 
              href={member.instagram}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center w-8 h-8 transition-all duration-300 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 hover:scale-110"
            >
              <Instagram size={14} className="text-white" />
            </a>
          </div>
        </div>
        
        {/* Member Info */}
        <div className="relative p-5 transition-all duration-300">
          <h3 className="mb-1 text-lg font-semibold text-transparent bg-gradient-to-r from-white to-blue-200 bg-clip-text group-hover:from-blue-300 group-hover:to-blue-100">
            {member.name}
          </h3>
          <p className="text-sm text-gray-400">{member.designation}</p>
          
          <div className="absolute top-0 right-0 w-10 h-10 transition-all duration-300 translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
            <ChevronRight className="w-5 h-5 text-blue-400" />
          </div>
        </div>
      </div>
    </motion.div>
  );
  
  return (
    <BackgroundBeamsWithCollision> {/* Wrap the content with BackgroundBeamsWithCollision */}
      <div className="min-h-screen bg-[#050816]">
        {/* Decorative Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-30 bg-[radial-gradient(circle,rgba(59,130,246,0.3)_0%,transparent_70%)]"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-20 bg-[radial-gradient(circle,rgba(147,51,234,0.3)_0%,transparent_70%)]"></div>
        </div>
        
        <div className="container relative z-10 px-4 py-24 mx-auto">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -20 }}
            className="max-w-3xl mx-auto mb-20 text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center px-4 py-1.5 mb-6 space-x-2 text-sm font-medium text-blue-300 rounded-full bg-blue-900/20 border border-blue-800/30"
            >
              <Users size={16} />
              <span>Our Leadership</span>
            </motion.div>
            
            <h1 className="mb-6 text-3xl font-bold text-white md:text-5xl lg:text-6xl">
              <span className="text-transparent bg-gradient-to-r from-white to-blue-300 bg-clip-text">
                Meet The Minds Behind
              </span>
              <br />
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">
                Vertex Innovation
              </span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-lg text-gray-400 md:text-xl">
              Our team of visionaries and tech enthusiasts are pushing the boundaries of innovation to create a future driven by technology.
            </p>
          </motion.div>
          
          {/* Team Grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} index={index} />
            ))}
          </div>
          
          {/* Join Team Section */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
            transition={{ delay: 0.6 }}
            className="relative mt-32 overflow-hidden rounded-3xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-indigo-900/30 to-purple-900/30 backdrop-blur-md"></div>
            <div className="absolute inset-0 bg-[url('path/to/pattern.svg')] opacity-10"></div>
            
            <div className="relative px-8 py-16 text-center">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] -translate-y-1/2 translate-x-1/2 rounded-full opacity-20 bg-[radial-gradient(circle,rgba(59,130,246,0.3)_0%,transparent_70%)]"></div>
              
              <h2 className="mb-4 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 md:text-3xl lg:text-4xl">
                Join Our Innovative Team
              </h2>
              
              <p className="max-w-2xl mx-auto mb-10 text-lg leading-relaxed text-gray-300">
                We're constantly looking for passionate individuals who are ready to challenge the status quo and build the future of technology. Be part of our exciting journey.
              </p>
              
              <motion.a 
                href="/careers" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium text-white transition-all duration-300 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-lg hover:shadow-blue-600/30"
              >
                View Open Positions
                <ChevronRight size={18} />
              </motion.a>
            </div>
          </motion.div>
        </div>
        
        {/* Modal */}
        {selectedMember && (
          <MemberModal 
            member={selectedMember} 
            onClose={() => setSelectedMember(null)} 
          />
        )}
      </div>
    </BackgroundBeamsWithCollision> // Closing the wrapper
  );
};

export default TeamPage;