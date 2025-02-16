import { useState } from 'react';
import { Linkedin, Instagram, Mail, X } from 'lucide-react';
import vishnu from '../assets/team/Vishnu.jpg';
import giri from '../assets/team/giridharan.jpg';
import Swayam from '../assets/team/Swayam.jpg';
import Aashik from '../assets/team/MohammedAashik.jpeg';
const TeamPage = () => {
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);
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
      name: 'Swayam Krishnan',
      designation: 'Chief Financial Officer',
      image: Swayam,
      bio: 'As the Chief Financial Officer, Swayam manages our financial strategies and operations. His expertise in financial planning ensures sustainable growth and sound fiscal management.',
      linkedin: 'https://www.linkedin.com/in/swayamkrishnan',
      instagram: 'https://www.instagram.com/swayam_krishnan0905',
      email: 'finance@vertextech.org'
    },
    {
      name: 'Mohammed Aashik F',
      designation: 'Technical Lead',
      image: Aashik,
      bio: 'Aashik leads our technical initiatives with expertise in modern web technologies. His innovative approach and technical knowledge drive our development projects to success.',
      linkedin: 'https://www.linkedin.com/in/mohammed-aashik-f-690418263/',
      instagram: 'https://www.instagram.com/_ashik_1701_/',
      email: 'technical@vertextech.org'
    },
    {
      name: 'Smitha Gladius',
      designation: 'Management Lead',
      image: '/api/placeholder/400/400',
      bio: 'Smitha excels in project management and team coordination. Her leadership ensures smooth operations and successful delivery of our client projects.',
      linkedin: 'https://www.linkedin.com/in/smitha-gladius',
      instagram: 'https://www.instagram.com/smitha.gladius',
      email: 'management@vertextech.org'
    },
    {
      name: 'John Smith',
      designation: 'Marketing Director',
      image: '/api/placeholder/400/400',
      bio: 'John brings over a decade of marketing experience, specializing in digital strategies and brand development. His innovative approach helps drive our market presence.',
      linkedin: 'https://www.linkedin.com/in/john-smith',
      instagram: 'https://www.instagram.com/johnsmith',
      email: 'marketing@vertextech.org'
    },
    {
      name: 'Sarah Johnson',
      designation: 'UX Design Lead',
      image: '/api/placeholder/400/400',
      bio: 'Sarah leads our UX design team with expertise in creating intuitive and engaging user experiences. Her creative vision helps shape our product design strategy.',
      linkedin: 'https://www.linkedin.com/in/sarah-johnson',
      instagram: 'https://www.instagram.com/sarahj.design',
      email: 'design@vertextech.org'
    },
  ];
  
  const MemberModal = ({ member, onClose }: { member: typeof teamMembers[0], onClose: () => void }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-auto bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute p-2 text-gray-400 transition-colors rounded-full top-4 right-4 hover:text-white hover:bg-gray-700"
        >
          <X size={20} />
        </button>
        
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <img 
              src={member.image} 
              alt={member.name}
              className="object-cover w-full h-64 md:h-full rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
            />
          </div>
          
          <div className="p-6 md:w-1/2">
            <h3 className="mb-1 text-2xl font-bold text-white">{member.name}</h3>
            <p className="mb-4 text-blue-400">{member.designation}</p>
            <p className="mb-6 text-gray-300">{member.bio}</p>
            
            <div className="flex gap-4">
              <a 
                href={member.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-white transition-all duration-300 rounded-full bg-blue-600/20 hover:bg-blue-600"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href={member.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-white transition-all duration-300 rounded-full bg-pink-600/20 hover:bg-pink-600"
              >
                <Instagram size={20} />
              </a>
              <a 
                href={`mailto:${member.email}`}
                className="p-2 text-white transition-all duration-300 rounded-full bg-red-600/20 hover:bg-red-600"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const TeamMemberCard = ({ member }: { member: typeof teamMembers[0] }) => (
    <div 
      onClick={() => setSelectedMember(member)}
      className="relative cursor-pointer group"
    >
      <div className="overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl">
        {/* Image with Zoom Effect */}
        <div className="relative aspect-[4/5]">
          <img
            src={member.image}
            alt={member.name}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        
        {/* Member Info */}
        <div className="p-4 text-center">
          <h3 className="mb-1 text-lg font-semibold text-white transition-colors duration-300 group-hover:text-blue-400">
            {member.name}
          </h3>
          <p className="text-gray-400 text-sm">{member.designation}</p>
        </div>
      </div>
    </div>
  );
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800">
      <div className="container px-4 py-16 mx-auto">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h1 className="mb-4 text-3xl font-bold text-white md:text-5xl lg:text-6xl">
            Meet Our Team
          </h1>
          <p className="text-lg text-gray-300 md:text-xl">
            The brilliant minds behind Vertex Innovation, working together to shape the future of technology.
          </p>
        </div>
        {/* Team Grid */}
        <div className="grid gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
        </div>
        {/* Join Team Section */}
        <div className="relative mt-20 overflow-hidden bg-white/10 backdrop-blur-md rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative px-6 py-12 text-center">
            <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
              Join Our Team
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-gray-300">
              We're always looking for talented individuals to join our innovative team. 
              Check out our open positions and become part of something extraordinary.
            </p>
            <a 
              href="/careers" 
              className="inline-flex items-center px-6 py-3 text-lg font-medium text-white transition-all duration-300 bg-blue-600 rounded-lg hover:bg-blue-700 hover:shadow-lg"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </div>
      {/* Modal */}
      {selectedMember && (
        <MemberModal 
          member={selectedMember} 
          onClose={() => setSelectedMember(null)} 
        />
      )}
    </div>
  );
};
export default TeamPage;

